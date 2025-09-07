import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-indian-lightGreen py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6 border-2 border-indian-green">
          <h1 className="text-3xl font-bold text-indian-green mb-2">Profile</h1>
          <p className="text-gray-600">Manage your account and track your reports</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - User Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 border-2 border-indian-saffron">
              <div className="text-center">
                <div className="w-24 h-24 bg-indian-lightGreen rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-indian-green">
                  <span className="text-3xl text-indian-green font-bold">RK</span>
                </div>
                <h2 className="text-xl font-bold text-indian-green">Rajesh Kumar</h2>
                <p className="text-gray-600">rajesh.kumar@example.com</p>
                <p className="text-gray-500 mt-2">Delhi, India</p>
                <p className="text-gray-500">Joined January 2023</p>
                
                <button className="w-full mt-4 bg-indian-green hover:bg-green-800 text-white py-2 px-4 rounded-lg transition-colors">
                  Edit Profile
                </button>
              </div>
            </div>

            {/* Activity Summary */}
            <div className="bg-white rounded-xl shadow-md p-6 mt-6 border-2 border-indian-green">
              <h3 className="text-lg font-semibold text-indian-green mb-4">Activity Summary</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-indian-lightGreen rounded-lg border border-indian-green">
                  <div className="text-2xl font-bold text-indian-green">12</div>
                  <div className="text-sm text-gray-600">Reports</div>
                </div>
                
                <div className="text-center p-4 bg-green-100 rounded-lg border border-green-300">
                  <div className="text-2xl font-bold text-green-800">5</div>
                  <div className="text-sm text-gray-600">Resolved</div>
                </div>
                
                <div className="text-center p-4 bg-yellow-100 rounded-lg border border-yellow-300">
                  <div className="text-2xl font-bold text-yellow-800">7</div>
                  <div className="text-sm text-gray-600">In Progress</div>
                </div>
                
                <div className="text-center p-4 bg-indian-lightSaffron rounded-lg border border-indian-saffron">
                  <div className="text-2xl font-bold text-indian-saffron">24</div>
                  <div className="text-sm text-gray-600">Contributions</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Reports */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-6 border-2 border-indian-green">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-indian-green">My Reports</h3>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-indian-lightGreen text-indian-green rounded-lg text-sm border border-indian-green">All</button>
                  <button className="px-3 py-1 bg-blue-100 text-blue-800 rounded-lg text-sm border border-blue-300">Open</button>
                  <button className="px-3 py-1 bg-green-100 text-green-800 rounded-lg text-sm border border-green-300">Resolved</button>
                </div>
              </div>

              {/* Report List */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border-2 border-indian-lightGreen rounded-lg">
                  <div>
                    <h4 className="font-semibold text-indian-green">Pothole on Main Street</h4>
                    <p className="text-sm text-gray-600">Today • Apr 20, 2024</p>
                  </div>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm border border-yellow-300">In Progress</span>
                </div>

                <div className="flex items-center justify-between p-4 border-2 border-indian-lightGreen rounded-lg">
                  <div>
                    <h4 className="font-semibold text-indian-green">Broken Streetlight</h4>
                    <p className="text-sm text-gray-600">Elm Street • Apr 16, 2024</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm border border-blue-300">Submitted</span>
                </div>

                <div className="flex items-center justify-between p-4 border-2 border-indian-lightGreen rounded-lg">
                  <div>
                    <h4 className="font-semibold text-indian-green">Graffiti on Building</h4>
                    <p className="text-sm text-gray-600">Oak Avenue • Apr 16, 2024</p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm border border-green-300">Resolved</span>
                </div>

                <div className="flex items-center justify-between p-4 border-2 border-indian-lightGreen rounded-lg">
                  <div>
                    <h4 className="font-semibold text-indian-green">Abandoned Vehicle</h4>
                    <p className="text-sm text-gray-600">Pine Street • Apr 10, 2024</p>
                  </div>
                  <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm border border-red-300">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;