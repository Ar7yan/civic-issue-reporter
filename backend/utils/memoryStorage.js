class MemoryStorage {
  constructor() {
    this.issues = new Map();
    this.nextId = 1;
    this.users = new Map();
  }

  // Issue methods
  createIssue(issueData) {
    const id = this.nextId++;
    const issue = {
      _id: id.toString(),
      ...issueData,
      createdAt: new Date(),
      updatedAt: new Date(),
      status: 'pending',
      votes: 0,
      comments: [],
      reportedBy: issueData.reportedBy || 'anonymous-user'
    };
    this.issues.set(id, issue);
    return Promise.resolve(issue);
  }

  getIssues() {
    const issues = Array.from(this.issues.values());
    // Sort by newest first
    issues.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return Promise.resolve(issues);
  }

  getIssue(id) {
    return Promise.resolve(this.issues.get(parseInt(id)));
  }

  updateIssue(id, updates) {
    const issue = this.issues.get(parseInt(id));
    if (issue) {
      Object.assign(issue, updates, { updatedAt: new Date() });
      return Promise.resolve(issue);
    }
    return Promise.resolve(null);
  }

  deleteIssue(id) {
    const success = this.issues.delete(parseInt(id));
    return Promise.resolve(success);
  }

  // User methods (simple implementation)
  createUser(userData) {
    const id = this.nextId++;
    const user = {
      _id: id.toString(),
      ...userData,
      createdAt: new Date()
    };
    this.users.set(id, user);
    return Promise.resolve(user);
  }

  findUserByEmail(email) {
    const users = Array.from(this.users.values());
    return Promise.resolve(users.find(user => user.email === email));
  }
}

module.exports = new MemoryStorage();