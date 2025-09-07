import api from './api';

export const issueService = {
  // Get all issues
  getIssues: async (params = {}) => {
    const response = await api.get('/issues', { params });
    return response.data;
  },

  // Get single issue
  getIssue: async (id) => {
    const response = await api.get(`/issues/${id}`);
    return response.data;
  },

  // Create new issue
  createIssue: async (issueData) => {
    const response = await api.post('/issues', issueData);
    return response.data;
  },

  // Update issue
  updateIssue: async (id, updateData) => {
    const response = await api.put(`/issues/${id}`, updateData);
    return response.data;
  },

  // Delete issue
  deleteIssue: async (id) => {
    const response = await api.delete(`/issues/${id}`);
    return response.data;
  },

  // Vote on issue
  voteIssue: async (id) => {
    const response = await api.post(`/issues/${id}/vote`);
    return response.data;
  },

  // Add comment
  addComment: async (id, comment) => {
    const response = await api.post(`/issues/${id}/comments`, { text: comment });
    return response.data;
  }
};