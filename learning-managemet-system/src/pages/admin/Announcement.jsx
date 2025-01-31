import React from "react";

export default function Announcement() {
  return (
    <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Create Announcement</h2>
        <button className="text-gray-500">
          <i className="fas fa-times" />
        </button>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Select Course</label>
          <select className="w-full p-2 border border-gray-300 rounded">
            <option>Complete Financial Analyst Course</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Announcement Title</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Announcement title"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Summary</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            rows={4}
            placeholder="Summary..."
            defaultValue={""}
          />
        </div>
      </div>
      <div className="flex justify-end mt-4 space-x-2">
        <button className="px-4 py-2 border border-gray-300 rounded text-gray-700">
          Cancel
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded">
          Publish
        </button>
      </div>
    </div>
  );
}
