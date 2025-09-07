import React, { useState } from "react";

const AdminView = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedStatus, setSelectedStatus] = useState("all");

  // Sample data
  const stats = {
    totalIssues: 156,
    pending: 42,
    inProgress: 67,
    resolved: 47,
    highPriority: 23
  };

  const recentIssues = [
    {
      id: 1,
      title: "Pothole on Main Street",
      category: "Roads",
      status: "pending",
      priority: "high",
      location: "Main Street, Downtown",
      reported: "2 hours ago",
      votes: 15
    },
    {
      id: 2,
      title: "Broken Streetlight",
      category: "Lighting",
      status: "inProgress",
      priority: "medium",
      location: "Oak Avenue",
      reported: "5 hours ago",
      votes: 8
    },
    {
      id: 3,
      title: "Garbage Accumulation",
      category: "Sanitation",
      status: "resolved",
      priority: "medium",
      location: "City Park",
      reported: "1 day ago",
      votes: 12
    },
    {
      id: 4,
      title: "Water Logging",
      category: "Drainage",
      status: "pending",
      priority: "high",
      location: "Market Area",
      reported: "1 day ago",
      votes: 20
    }
  ];

  const departments = [
    { name: "Public Works", issues: 67, resolved: 45 },
    { name: "Sanitation", issues: 42, resolved: 38 },
    { name: "Water Department", issues: 25, resolved: 20 },
    { name: "Electricity", issues: 22, resolved: 18 }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'inProgress': return 'bg-blue-100 text-blue-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-orange-100 text-orange-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-indian-lightGreen">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6 border-2 border-indian-green">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-indian-green">Admin Dashboard</h1>
              <p className="text-gray-600">Manage and monitor civic issues</p>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <div className="bg-indian-lightGreen rounded-lg px-4 py-2">
                <span className="text-sm text-gray-600">Last updated:</span>
                <span className="text-sm font-medium ml-2">Just now</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-6 border-2 border-indian-green">
          <nav className="flex space-x-4">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === "dashboard"
                  ? "bg-indian-green text-white"
                  : "text-gray-600 hover:bg-indian-lightGreen"
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab("issues")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === "issues"
                  ? "bg-indian-green text-white"
                  : "text-gray-600 hover:bg-indian-lightGreen"
              }`}
            >
              All Issues
            </button>
            <button
              onClick={() => setActiveTab("analytics")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === "analytics"
                  ? "bg-indian-green text-white"
                  : "text-gray-600 hover:bg-indian-lightGreen"
              }`}
            >
              Analytics
            </button>
            <button
              onClick={() => setActiveTab("departments")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === "departments"
                  ? "bg-indian-green text-white"
                  : "text-gray-600 hover:bg-indian-lightGreen"
              }`}
            >
              Departments
            </button>
          </nav>
        </div>

        {/* Statistics Cards */}
        {activeTab === "dashboard" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-md p-6 border-2 border-indian-green">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-indian-lightGreen rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Issues</p>
                  <p className="text-2xl font-bold text-indian-green">{stats.totalIssues}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border-2 border-yellow-300">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">⏳</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Pending</p>
                  <p className="text-2xl font-bold text-yellow-700">{stats.pending}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border-2 border-blue-300">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🚧</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">In Progress</p>
                  <p className="text-2xl font-bold text-blue-700">{stats.inProgress}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border-2 border-green-300">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">✅</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Resolved</p>
                  <p className="text-2xl font-bold text-green-700">{stats.resolved}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-md p-6 border-2 border-indian-green">
          {/* Issues Table */}
          {activeTab === "dashboard" && (
            <div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <h2 className="text-xl font-bold text-indian-green">Recent Issues</h2>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indian-green focus:border-indian-green mt-2 md:mt-0"
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="inProgress">In Progress</option>
                  <option value="resolved">Resolved</option>
                </select>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Issue</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Category</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Priority</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentIssues.map((issue) => (
                      <tr key={issue.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4">
                          <div>
                            <p className="font-medium text-gray-900">{issue.title}</p>
                            <p className="text-sm text-gray-600">{issue.location}</p>
                            <p className="text-xs text-gray-500">{issue.reported}</p>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className="bg-indian-lightGreen text-indian-green px-2 py-1 rounded-full text-xs">
                            {issue.category}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(issue.status)}`}>
                            {issue.status}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(issue.priority)}`}>
                            {issue.priority}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex space-x-2">
                            <button className="bg-indian-green text-white px-3 py-1 rounded-lg text-sm hover:bg-green-800 transition-colors">
                              View
                            </button>
                            <button className="bg-indian-saffron text-white px-3 py-1 rounded-lg text-sm hover:bg-orange-600 transition-colors">
                              Assign
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Department Performance */}
          {activeTab === "dashboard" && (
            <div className="mt-8">
              <h2 className="text-xl font-bold text-indian-green mb-4">Department Performance</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {departments.map((dept, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold text-gray-800">{dept.name}</h3>
                      <span className="text-sm text-gray-600">{dept.issues} issues</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-indian-green h-2 rounded-full"
                        style={{ width: `${(dept.resolved / dept.issues) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-gray-600">Resolved: {dept.resolved}</span>
                      <span className="text-sm text-indian-green font-semibold">
                        {Math.round((dept.resolved / dept.issues) * 100)}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Placeholder for other tabs */}
          {activeTab !== "dashboard" && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-indian-lightGreen rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {activeTab === "issues" && "All Issues Management"}
                {activeTab === "analytics" && "Analytics & Reports"}
                {activeTab === "departments" && "Department Management"}
              </h3>
              <p className="text-gray-600">This section is under development</p>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-md p-6 border-2 border-indian-green mt-6">
          <h2 className="text-xl font-bold text-indian-green mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="bg-indian-green text-white py-3 px-4 rounded-lg font-medium hover:bg-green-800 transition-colors">
              📋 Generate Report
            </button>
            <button className="bg-indian-saffron text-white py-3 px-4 rounded-lg font-medium hover:bg-orange-600 transition-colors">
              👥 Manage Users
            </button>
            <button className="bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              ⚙️ Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminView;