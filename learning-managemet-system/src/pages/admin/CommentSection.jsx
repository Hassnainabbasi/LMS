import React from 'react'

export default function CommentSection() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl">
    <h2 className="text-2xl font-bold mb-2">Recent Comments</h2>
    <p className="text-gray-600 mb-4">Latest Comments section by users</p>
    <div className="space-y-6">
      {/* Comment 1 */}
      <div className="border-b pb-4">
        <div className="flex items-start space-x-4">
          <img
            alt="Profile picture of Samso Nagaro"
            className="w-12 h-12 rounded-full"
            src="https://placehold.co/50x50"
          />
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <h3 className="font-bold">Samso Nagaro</h3>
              <span className="text-sm text-gray-500">April 14, 2019</span>
              <span className="text-xs bg-blue-500 text-white rounded-full px-2 py-1">
                Pending
              </span>
            </div>
            <p className="text-gray-700 mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it
            </p>
            <div className="flex items-center space-x-2 mt-2 text-gray-500">
              <i className="fas fa-pencil-alt"></i>
              <i className="fas fa-sync-alt"></i>
              <i className="fas fa-heart"></i>
            </div>
          </div>
        </div>
      </div>
      {/* Comment 2 */}
      <div className="border-b pb-4">
        <div className="flex items-start space-x-4">
          <img
            alt="Profile picture of Jonty Andrews"
            className="w-12 h-12 rounded-full"
            src="https://placehold.co/50x50"
          />
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <h3 className="font-bold">Jonty Andrews</h3>
              <span className="text-sm text-gray-500">March 13, 2020</span>
              <span className="text-xs bg-green-500 text-white rounded-full px-2 py-1">
                Approved
              </span>
            </div>
            <p className="text-gray-700 mt-2">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites
            </p>
            <div className="flex items-center space-x-2 mt-2 text-gray-500">
              <i className="fas fa-pencil-alt"></i>
              <i className="fas fa-sync-alt"></i>
              <i className="fas fa-heart"></i>
            </div>
          </div>
        </div>
      </div>
      {/* Comment 3 */}
      <div className="border-b pb-4">
        <div className="flex items-start space-x-4">
          <img
            alt="Profile picture of Sarah Tim"
            className="w-12 h-12 rounded-full"
            src="https://placehold.co/50x50"
          />
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <h3 className="font-bold">Sarah Tim</h3>
              <span className="text-sm text-gray-500">Jan 20, 2020</span>
              <span className="text-xs bg-red-500 text-white rounded-full px-2 py-1">
                Rejected
              </span>
            </div>
            <p className="text-gray-700 mt-2">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure
            </p>
            <div className="flex items-center space-x-2 mt-2 text-gray-500">
              <i className="fas fa-pencil-alt"></i>
              <i className="fas fa-sync-alt"></i>
              <i className="fas fa-heart"></i>
            </div>
          </div>
        </div>
      </div>
      {/* Comment 4 */}
      <div>
        <div className="flex items-start space-x-4">
          <img
            alt="Profile picture of Samso Nagaro"
            className="w-12 h-12 rounded-full"
            src="https://placehold.co/50x50"
          />
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <h3 className="font-bold">Samso Nagaro</h3>
              <span className="text-sm text-gray-500">March 20, 2020</span>
              <span className="text-xs bg-blue-500 text-white rounded-full px-2 py-1">
                Pending
              </span>
            </div>
            <p className="text-gray-700 mt-2">
              It uses a dictionary of over 200 Latin words, combined with a
              handful of model sentence structures, to generate Lorem Ipsum
              which looks reasonable. The generated Lorem Ipsum is therefore
              always free from repetition, injected humour, or
              non-characteristic words etc.
            </p>
            <div className="flex items-center space-x-2 mt-2 text-gray-500">
              <i className="fas fa-pencil-alt"></i>
              <i className="fas fa-sync-alt"></i>
              <i className="fas fa-heart"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
