import React from 'react';

const BottomSection = () => {
  return (
    <div className="bg-gray-800 p-4 mt-8 rounded-lg grid grid-cols-2 gap-4">
      <div className="bg-gray-700 p-4 rounded-lg">
        <h3 className="text-white text-lg">Get Our App</h3>
        <img src="/path/to/app-promo.jpg" className="w-full h-auto rounded-md" alt="App Promotion" />
      </div>
      <div className="bg-gray-700 p-4 rounded-lg">
        <h3 className="text-white text-lg">News & Transfers</h3>
        <div className="mt-2">
          <p className="text-gray-400">News item 1</p>
          <p className="text-gray-400">News item 2</p>
          {/* Add more news items */}
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
