const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  description: {
    type: String,
    required: true,
    maxlength: 1000
  },
  category: {
    type: String,
    required: true,
    enum: [
      'Potholes & Roads',
      'Street Lighting',
      'Garbage & Sanitation',
      'Water Supply',
      'Drainage Issues',
      'Parks & Public Spaces',
      'Traffic Signals',
      'Illegal Construction',
      'Other'
    ]
  },
  location: {
    address: String,
    coordinates: {
      lat: Number,
      lng: Number
    }
  },
  urgency: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium'
  },
  status: {
    type: String,
    enum: ['pending', 'inProgress', 'resolved', 'closed'],
    default: 'pending'
  },
  images: [{
    url: String,
    public_id: String
  }],
  reportedBy: {
    type: String,
    default: 'anonymous'
  },
  assignedTo: {
    type: String,
    default: null
  },
  department: {
    type: String,
    enum: ['Public Works', 'Sanitation', 'Water Department', 'Electricity', 'Other', null],
    default: null
  },
  votes: {
    type: Number,
    default: 0
  },
  comments: [{
    user: String,
    text: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  }]
}, {
  timestamps: true
});

// Create model only if mongoose is connected
let Issue;
try {
  Issue = mongoose.model('Issue');
} catch {
  Issue = mongoose.model('Issue', issueSchema);
}

module.exports = Issue;