import React from 'react'

export default function Reports() {
  return (
     <div className="w-full">
      <div className="flex-1 p-5 bg-white">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">General</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            SAVE
          </button>
        </div>
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700">Form Name</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              defaultValue="Customer Complaint Form"
            />
          </div>
          <div>
            <label className="block text-gray-700">Form description</label>
            <textarea
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              defaultValue={""}
            />
          </div>
          <div>
            <label className="block text-gray-700">Form disabled message</label>
            <textarea
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              defaultValue={"This form is disabled."}
            />
          </div>
          <div>
            <label className="block text-gray-700">
              Successful form submission message
            </label>
            <textarea
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              defaultValue={
                "Thanks for contacting us! We will be in touch with you shortly."
              }
            />
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <label className="text-gray-700">
              Automatically scroll to the submission message
            </label>
          </div>
          <div>
            <label className="block text-gray-700">Redirect To</label>
            <select className="w-full mt-1 p-2 border border-gray-300 rounded">
              <option>Same Page</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}
