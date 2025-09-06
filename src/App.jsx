import React from "react";

function App() {
  return (
    <div className="p-8">
      {/* Test Tailwind classes */}
      <h1 className="text-4xl font-bold text-blue-600 bg-blue-100 p-4 rounded-lg mb-8">
        🎨 Tailwind CSS Test Page
      </h1>
      
      <div className="space-y-6">
        {/* Color Test */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Color Test</h2>
          <div className="flex space-x-4">
            <div className="p-4 bg-red-100 text-red-800 rounded">Red</div>
            <div className="p-4 bg-green-100 text-green-800 rounded">Green</div>
            <div className="p-4 bg-blue-100 text-blue-800 rounded">Blue</div>
            <div className="p-4 bg-yellow-100 text-yellow-800 rounded">Yellow</div>
            <div className="p-4 bg-purple-100 text-purple-800 rounded">Purple</div>
          </div>
        </div>

        {/* Spacing Test */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Spacing Test</h2>
          <div className="space-y-4">
            <div className="p-2 bg-gray-200">Small padding (p-2)</div>
            <div className="p-4 bg-gray-300">Medium padding (p-4)</div>
            <div className="p-8 bg-gray-400">Large padding (p-8)</div>
          </div>
        </div>

        {/* Hover Effects Test */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Hover Effects Test</h2>
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Hover over me (should change color)
          </button>
        </div>

        {/* Flexbox Test */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Flexbox Test</h2>
          <div className="flex space-x-4">
            <div className="flex-1 p-4 bg-gray-200 text-center">Flex item 1</div>
            <div className="flex-1 p-4 bg-gray-300 text-center">Flex item 2</div>
            <div className="flex-1 p-4 bg-gray-400 text-center">Flex item 3</div>
          </div>
        </div>

        {/* Grid Test */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Grid Test</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-gray-200 text-center">Grid 1</div>
            <div className="p-4 bg-gray-300 text-center">Grid 2</div>
            <div className="p-4 bg-gray-400 text-center">Grid 3</div>
            <div className="p-4 bg-gray-500 text-white text-center">Grid 4</div>
            <div className="p-4 bg-gray-600 text-white text-center">Grid 5</div>
            <div className="p-4 bg-gray-700 text-white text-center">Grid 6</div>
          </div>
        </div>

        {/* Responsive Test */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Responsive Test</h2>
          <div className="bg-blue-200 p-4 text-center md:bg-green-200 lg:bg-yellow-200 xl:bg-red-200">
            This changes color on different screen sizes
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Resize your browser window to see the color change
          </p>
        </div>
      </div>

      {/* Success Message */}
      <div className="mt-12 p-6 bg-green-100 border-l-4 border-green-500 text-green-700">
        <h3 className="font-bold text-lg mb-2">✅ How to check if Tailwind is working:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Colors should appear (not plain black text)</li>
          <li>Backgrounds should have colors</li>
          <li>Elements should have spacing between them</li>
          <li>Buttons should change color when you hover over them</li>
          <li>Corners should be rounded</li>
          <li>Layout should be responsive (try resizing browser)</li>
        </ul>
      </div>
    </div>
  );
}

export default App;