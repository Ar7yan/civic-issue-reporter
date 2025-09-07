import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { issueService } from "../services/issueService";

const ReportIssue = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    location: "",
    urgency: "medium",
    image: null
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const categories = [
    "Potholes & Roads",
    "Street Lighting",
    "Garbage & Sanitation",
    "Water Supply",
    "Drainage Issues",
    "Parks & Public Spaces",
    "Traffic Signals",
    "Illegal Construction",
    "Other"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        image: file
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Convert form data to API format
      const issueData = {
        title: formData.title,
        description: formData.description,
        category: formData.category,
        location: { address: formData.location },
        urgency: formData.urgency
      };

      // If you have image upload, you'd handle it here
      const response = await issueService.createIssue(issueData);
      
      alert("Issue reported successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error reporting issue:", error);
      alert("Failed to report issue. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-indian-lightGreen py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-4">
            <span className="text-indian-green hover:text-green-800">← Back to Home</span>
          </Link>
          <h1 className="text-3xl font-bold text-indian-green mb-2">Report an Issue</h1>
          <p className="text-gray-600">Help improve your community by reporting civic issues</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border-2 border-indian-green">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Issue Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Issue Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Brief description of the issue"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indian-green focus:border-indian-green transition-colors"
                disabled={loading}
              />
            </div>

            {/* Category Selection */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Category *
              </label>
              <select
                id="category"
                name="category"
                required
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indian-green focus:border-indian-green transition-colors"
                disabled={loading}
              >
                <option value="">Select a category</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Description *
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows="4"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Please provide detailed information about the issue..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indian-green focus:border-indian-green transition-colors"
                disabled={loading}
              />
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                Location *
              </label>
              <input
                type="text"
                id="location"
                name="location"
                required
                value={formData.location}
                onChange={handleInputChange}
                placeholder="Street address or landmark"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indian-green focus:border-indian-green transition-colors"
                disabled={loading}
              />
              <p className="text-sm text-gray-500 mt-1">You can also use your current location</p>
            </div>

            {/* Urgency Level */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Urgency Level *
              </label>
              <div className="grid grid-cols-3 gap-4">
                <label className={`flex flex-col items-center p-3 border-2 rounded-lg cursor-pointer transition-colors ${
                  formData.urgency === 'low' 
                    ? 'border-indian-green bg-indian-lightGreen' 
                    : 'border-gray-300 hover:border-indian-green'
                } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
                  <input
                    type="radio"
                    name="urgency"
                    value="low"
                    checked={formData.urgency === 'low'}
                    onChange={handleInputChange}
                    className="sr-only"
                    disabled={loading}
                  />
                  <span className="text-2xl">🟢</span>
                  <span className="text-sm font-medium">Low</span>
                  <span className="text-xs text-gray-500">Minor issue</span>
                </label>

                <label className={`flex flex-col items-center p-3 border-2 rounded-lg cursor-pointer transition-colors ${
                  formData.urgency === 'medium' 
                    ? 'border-indian-green bg-indian-lightGreen' 
                    : 'border-gray-300 hover:border-indian-green'
                } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
                  <input
                    type="radio"
                    name="urgency"
                    value="medium"
                    checked={formData.urgency === 'medium'}
                    onChange={handleInputChange}
                    className="sr-only"
                    disabled={loading}
                  />
                  <span className="text-2xl">🟡</span>
                  <span className="text-sm font-medium">Medium</span>
                  <span className="text-xs text-gray-500">Moderate issue</span>
                </label>

                <label className={`flex flex-col items-center p-3 border-2 rounded-lg cursor-pointer transition-colors ${
                  formData.urgency === 'high' 
                    ? 'border-indian-green bg-indian-lightGreen' 
                    : 'border-gray-300 hover:border-indian-green'
                } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
                  <input
                    type="radio"
                    name="urgency"
                    value="high"
                    checked={formData.urgency === 'high'}
                    onChange={handleInputChange}
                    className="sr-only"
                    disabled={loading}
                  />
                  <span className="text-2xl">🔴</span>
                  <span className="text-sm font-medium">High</span>
                  <span className="text-xs text-gray-500">Emergency</span>
                </label>
              </div>
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Photo (Optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                {formData.image ? (
                  <div>
                    <img 
                      src={URL.createObjectURL(formData.image)} 
                      alt="Preview" 
                      className="mx-auto h-32 object-cover rounded-lg mb-4"
                    />
                    <p className="text-sm text-gray-600">{formData.image.name}</p>
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, image: null }))}
                      className="text-red-600 text-sm mt-2"
                      disabled={loading}
                    >
                      Remove Image
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="w-12 h-12 bg-indian-lightGreen rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl">📸</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Drag & drop or click to upload</p>
                    <label htmlFor="image-upload" className={`bg-indian-green text-white px-4 py-2 rounded-lg text-sm cursor-pointer inline-block ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
                      Choose File
                    </label>
                    <input
                      id="image-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="sr-only"
                      disabled={loading}
                    />
                    <p className="text-xs text-gray-500 mt-2">PNG, JPG up to 5MB</p>
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t border-gray-200">
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-indian-green text-white font-semibold py-3 px-6 rounded-lg text-lg transition-colors shadow-lg ${
                  loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-800'
                }`}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </div>
                ) : (
                  'Submit Report'
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Additional Info */}
        <div className="bg-white rounded-xl shadow-md p-6 border-2 border-indian-green mt-6">
          <h3 className="text-lg font-semibold text-indian-green mb-4">📋 What happens next?</h3>
          <div className="space-y-3 text-sm text-gray-600">
            <p>1. Your report will be reviewed by our team</p>
            <p>2. It will be assigned to the relevant department</p>
            <p>3. You'll receive updates on the progress</p>
            <p>4. The issue will be resolved as quickly as possible</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportIssue;