const express = require('express');
const Issue = require('../models/Issue');
const memoryStorage = require('../utils/memoryStorage');
const router = express.Router();

// Check if MongoDB is connected
const isMongoConnected = () => {
  return Issue.db.readyState === 1;
};

// Get all issues
router.get('/', async (req, res) => {
  try {
    if (isMongoConnected()) {
      const { status, category, page = 1, limit = 10 } = req.query;
      let filter = {};
      
      if (status) filter.status = status;
      if (category) filter.category = category;

      const issues = await Issue.find(filter)
        .sort({ createdAt: -1 })
        .limit(limit * 1)
        .skip((page - 1) * limit);

      const total = await Issue.countDocuments(filter);

      res.json({
        issues,
        totalPages: Math.ceil(total / limit),
        currentPage: page,
        total
      });
    } else {
      // Use memory storage
      const issues = await memoryStorage.getIssues();
      res.json({
        issues,
        totalPages: 1,
        currentPage: 1,
        total: issues.length
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single issue
router.get('/:id', async (req, res) => {
  try {
    if (isMongoConnected()) {
      const issue = await Issue.findById(req.params.id);
      if (!issue) {
        return res.status(404).json({ message: 'Issue not found' });
      }
      res.json(issue);
    } else {
      const issue = await memoryStorage.getIssue(req.params.id);
      if (!issue) {
        return res.status(404).json({ message: 'Issue not found' });
      }
      res.json(issue);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new issue
router.post('/', async (req, res) => {
  try {
    console.log('Creating issue with data:', req.body);
    
    if (isMongoConnected()) {
      const issue = new Issue(req.body);
      const savedIssue = await issue.save();
      res.status(201).json(savedIssue);
    } else {
      const issue = await memoryStorage.createIssue(req.body);
      res.status(201).json(issue);
    }
  } catch (error) {
    console.error('Error creating issue:', error);
    res.status(400).json({ message: error.message });
  }
});

// Update issue
router.put('/:id', async (req, res) => {
  try {
    if (isMongoConnected()) {
      const issue = await Issue.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
      if (!issue) {
        return res.status(404).json({ message: 'Issue not found' });
      }
      res.json(issue);
    } else {
      const issue = await memoryStorage.updateIssue(req.params.id, req.body);
      if (!issue) {
        return res.status(404).json({ message: 'Issue not found' });
      }
      res.json(issue);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete issue
router.delete('/:id', async (req, res) => {
  try {
    if (isMongoConnected()) {
      const issue = await Issue.findByIdAndDelete(req.params.id);
      if (!issue) {
        return res.status(404).json({ message: 'Issue not found' });
      }
      res.json({ message: 'Issue deleted successfully' });
    } else {
      const success = await memoryStorage.deleteIssue(req.params.id);
      if (!success) {
        return res.status(404).json({ message: 'Issue not found' });
      }
      res.json({ message: 'Issue deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;