// // import React from 'react'

// // export default function LandingPage() {
// //   return (
// //     <div>
// //       <div className="flex flex-col lg:flex-row">
// //         {/* Sidebar */}
// //         <div
// //           className="w-full lg:w-1/5 bg-white h-screen p-6 sidebar lg:transform-none sidebar-hidden lg:sidebar-visible"
// //           id="sidebar"
// //         >
// //           <div className="flex items-center mb-8">
// //             <div className="bg-purple-600 text-white p-2 rounded-full">
// //               <i className="fas fa-star"></i>
// //             </div>
// //             <span className="ml-3 text-xl font-bold">COURSU</span>
// //           </div>
// //           <nav className="mb-8">
// //             <h2 className="text-gray-500 mb-4">OVERVIEW</h2>
// //             <ul>
// //               <li className="mb-4 flex items-center text-purple-600">
// //                 <i className="fas fa-tachometer-alt mr-3"></i>
// //                 <span>Dashboard</span>
// //               </li>
// //               <li className="mb-4 flex items-center text-gray-600">
// //                 <i className="fas fa-inbox mr-3"></i>
// //                 <span>Inbox</span>
// //               </li>
// //               <li className="mb-4 flex items-center text-gray-600">
// //                 <i className="fas fa-book mr-3"></i>
// //                 <span>Lesson</span>
// //               </li>
// //               <li className="mb-4 flex items-center text-gray-600">
// //                 <i className="fas fa-tasks mr-3"></i>
// //                 <span>Task</span>
// //               </li>
// //               <li className="mb-4 flex items-center text-gray-600">
// //                 <i className="fas fa-users mr-3"></i>
// //                 <span>Group</span>
// //               </li>
// //             </ul>
// //           </nav>
// //           <div className="mb-8">
// //             <h2 className="text-gray-500 mb-4">FRIENDS</h2>
// //             <ul>
// //               <li className="mb-4 flex items-center">
// //                 <img
// //                   alt="Profile picture of Prashant"
// //                   className="rounded-full mr-3"
// //                   height={100}
// //                   src="https://storage.googleapis.com/a1aa/image/9vVlJEvKjVWVUFnBLO8EYgEWPDkqKpjN8lcETZAQhSA.jpg"
// //                   width={100}
// //                 />
// //                 <div>
// //                   <span className="block font-semibold">Prashant</span>
// //                   <span className="text-gray-500 text-sm">
// //                     Software Developer
// //                   </span>
// //                 </div>
// //               </li>
// //               <li className="mb-4 flex items-center">
// //                 <img
// //                   alt="Profile picture of Prashant"
// //                   className="rounded-full mr-3"
// //                   height={100}
// //                   src="https://storage.googleapis.com/a1aa/image/9vVlJEvKjVWVUFnBLO8EYgEWPDkqKpjN8lcETZAQhSA.jpg"
// //                   width={100}
// //                 />
// //                 <div>
// //                   <span className="block font-semibold">Prashant</span>
// //                   <span className="text-gray-500 text-sm">
// //                     Software Developer
// //                   </span>
// //                 </div>
// //               </li>
// //               <li className="mb-4 flex items-center">
// //                 <img
// //                   alt="Profile picture of Prashant"
// //                   className="rounded-full mr-3"
// //                   height={100}
// //                   src="https://storage.googleapis.com/a1aa/image/9vVlJEvKjVWVUFnBLO8EYgEWPDkqKpjN8lcETZAQhSA.jpg"
// //                   width={100}
// //                 />
// //                 <div>
// //                   <span className="block font-semibold">Prashant</span>
// //                   <span className="text-gray-500 text-sm">
// //                     Software Developer
// //                   </span>
// //                 </div>
// //               </li>
// //             </ul>
// //           </div>
// //           <div>
// //             <h2 className="text-gray-500 mb-4">SETTINGS</h2>
// //             <ul>
// //               <li className="mb-4 flex items-center text-gray-600">
// //                 <i className="fas fa-cog mr-3"></i>
// //                 <span>Settings</span>
// //               </li>
// //               <li className="flex items-center text-red-600">
// //                 <i className="fas fa-sign-out-alt mr-3"></i>
// //                 <span>Logout</span>
// //               </li>
// //             </ul>
// //           </div>
// //         </div>
// //         {/* Main Content */}
// //         <div className="flex-1 p-6">
// //           <div className="flex justify-between items-center mb-6">
// //             <button className="lg:hidden text-gray-600 text-xl" id="menuButton">
// //               <i className="fas fa-bars"></i>
// //             </button>
// //             <input
// //               className="w-2/3 p-3 rounded-lg border border-gray-300"
// //               placeholder="Search your course here..."
// //               type="text"
// //             />
// //             <i className="fas fa-filter text-gray-600 text-xl"></i>
// //           </div>
// //           <div className="bg-purple-600 text-white p-6 rounded-lg mb-6">
// //             <h2 className="text-lg font-semibold mb-2">ONLINE COURSE</h2>
// //             <h1 className="text-2xl font-bold mb-4">
// //               Sharpen Your Skills With Professional Online Courses
// //             </h1>
// //             <button className="bg-white text-purple-600 px-4 py-2 rounded-lg">
// //               Join Now
// //             </button>
// //           </div>
// //           <div className="flex flex-col lg:flex-row justify-between mb-6">
// //             <div className="bg-white p-4 rounded-lg flex-1 mb-4 lg:mb-0 lg:mr-4">
// //               <div className="flex items-center mb-2">
// //                 <i className="fas fa-play-circle text-purple-600 text-2xl mr-2"></i>
// //                 <span className="text-gray-600">2/8 Watched</span>
// //               </div>
// //               <span className="text-gray-500">Product Design</span>
// //             </div>
// //             <div className="bg-white p-4 rounded-lg flex-1 mb-4 lg:mb-0 lg:mr-4">
// //               <div className="flex items-center mb-2">
// //                 <i className="fas fa-play-circle text-purple-600 text-2xl mr-2"></i>
// //                 <span className="text-gray-600">2/8 Watched</span>
// //               </div>
// //               <span className="text-gray-500">Product Design</span>
// //             </div>
// //             <div className="bg-white p-4 rounded-lg flex-1">
// //               <div className="flex items-center mb-2">
// //                 <i className="fas fa-play-circle text-purple-600 text-2xl mr-2"></i>
// //                 <span className="text-gray-600">2/8 Watched</span>
// //               </div>
// //               <span className="text-gray-500">Product Design</span>
// //             </div>
// //           </div>
// //           <div className="mb-6">
// //             <h2 className="text-xl font-semibold mb-4">Continue Watching</h2>
// //             <div className="flex flex-col lg:flex-row justify-between">
// //               <div className="bg-white p-4 rounded-lg w-full lg:w-1/3 mb-4 lg:mb-0 lg:mr-4">
// //                 <img
// //                   alt="Course thumbnail"
// //                   className="rounded-lg mb-4"
// //                   height={200}
// //                   src="https://storage.googleapis.com/a1aa/image/CMW3Qn39Z72O7SMikoL6wZLa0vS_Nll9sub_Nwrz_vw.jpg"
// //                   width={300}
// //                 />
// //                 <span className="bg-purple-600 text-white px-2 py-1 rounded-lg text-sm">
// //                   FRONTEND
// //                 </span>
// //                 <h3 className="text-lg font-semibold mt-2">
// //                   Beginner's Guide To Becoming A Professional Frontend Developer
// //                 </h3>
// //                 <div className="flex items-center mt-2">
// //                   <img
// //                     alt="Instructor profile picture"
// //                     className="rounded-full mr-2"
// //                     height={100}
// //                     src="https://storage.googleapis.com/a1aa/image/joGrYEZWjJ6bLNdHAYDwWwwlvys_LX-pQW79PrzCauQ.jpg"
// //                     width={100}
// //                   />
// //                   <div>
// //                     <span className="block font-semibold">
// //                       Prashant Kumar Singh
// //                     </span>
// //                     <span className="text-gray-500 text-sm">
// //                       Software Developer
// //                     </span>
// //                   </div>
// //                 </div>
// //               </div>
// //               <div className="bg-white p-4 rounded-lg w-full lg:w-1/3 mb-4 lg:mb-0 lg:mr-4">
// //                 <img
// //                   alt="Course thumbnail"
// //                   className="rounded-lg mb-4"
// //                   height={200}
// //                   src="https://storage.googleapis.com/a1aa/image/CMW3Qn39Z72O7SMikoL6wZLa0vS_Nll9sub_Nwrz_vw.jpg"
// //                   width={300}
// //                 />
// //                 <span className="bg-purple-600 text-white px-2 py-1 rounded-lg text-sm">
// //                   FRONTEND
// //                 </span>
// //                 <h3 className="text-lg font-semibold mt-2">
// //                   Beginner's Guide To Becoming A Professional Frontend Developer
// //                 </h3>
// //                 <div className="flex items-center mt-2">
// //                   <img
// //                     alt="Instructor profile picture"
// //                     className="rounded-full mr-2"
// //                     height={100}
// //                     src="https://storage.googleapis.com/a1aa/image/joGrYEZWjJ6bLNdHAYDwWwwlvys_LX-pQW79PrzCauQ.jpg"
// //                     width={100}
// //                   />
// //                   <div>
// //                     <span className="block font-semibold">
// //                       Prashant Kumar Singh
// //                     </span>
// //                     <span className="text-gray-500 text-sm">
// //                       Software Developer
// //                     </span>
// //                   </div>
// //                 </div>
// //               </div>
// //               <div className="bg-white p-4 rounded-lg w-full lg:w-1/3">
// //                 <img
// //                   alt="Course thumbnail"
// //                   className="rounded-lg mb-4"
// //                   height={200}
// //                   src="https://storage.googleapis.com/a1aa/image/CMW3Qn39Z72O7SMikoL6wZLa0vS_Nll9sub_Nwrz_vw.jpg"
// //                   width={300}
// //                 />
// //                 <span className="bg-purple-600 text-white px-2 py-1 rounded-lg text-sm">
// //                   FRONTEND
// //                 </span>
// //                 <h3 className="text-lg font-semibold mt-2">
// //                   Beginner's Guide To Becoming A Professional Frontend Developer
// //                 </h3>
// //                 <div className="flex items-center mt-2">
// //                   <img
// //                     alt="Instructor profile picture"
// //                     className="rounded-full mr-2"
// //                     height={100}
// //                     src="https://storage.googleapis.com/a1aa/image/joGrYEZWjJ6bLNdHAYDwWwwlvys_LX-pQW79PrzCauQ.jpg"
// //                     width={100}
// //                   />
// //                   <div>
// //                     <span className="block font-semibold">
// //                       Prashant Kumar Singh
// //                     </span>
// //                     <span className="text-gray-500 text-sm">
// //                       Software Developer
// //                     </span>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //           <div>
// //             <h2 className="text-xl font-semibold mb-4">Your Mentor</h2>
// //             <div className="bg-white p-4 rounded-lg">
// //               <div className="flex justify-between items-center mb-4">
// //                 <div className="flex items-center">
// //                   <img
// //                     alt="Mentor profile picture"
// //                     className="rounded-full mr-2"
// //                     height={100}
// //                     src="https://storage.googleapis.com/a1aa/image/H0hE4u0BmtCDqJNwllDEwQM0hbr1yuTnlSOPtReIFLo.jpg"
// //                     width={100}
// //                   />
// //                   <div>
// //                     <span className="block font-semibold">
// //                       Prashant Kumar Singh
// //                     </span>
// //                     <span className="text-gray-500 text-sm">25/2/2023</span>
// //                   </div>
// //                 </div>
// //                 <span className="text-purple-600">FRONTEND</span>
// //                 <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
// //                   SHOW DETAILS
// //                 </button>
// //               </div>
// //               <div className="flex justify-between items-center">
// //                 <div className="flex items-center">
// //                   <img
// //                     alt="Mentor profile picture"
// //                     className="rounded-full mr-2"
// //                     height={100}
// //                     src="https://storage.googleapis.com/a1aa/image/H0hE4u0BmtCDqJNwllDEwQM0hbr1yuTnlSOPtReIFLo.jpg"
// //                     width={100}
// //                   />
// //                   <div>
// //                     <span className="block font-semibold">Ravi Kumar</span>
// //                     <span className="text-gray-500 text-sm">25/2/2023</span>
// //                   </div>
// //                 </div>
// //                 <span className="text-purple-600">FRONTEND</span>
// //                 <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
// //                   SHOW DETAILS
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //         {/* Right Sidebar */}
// //         <div className="w-full lg:w-1/5 bg-white h-screen p-6">
// //           <div className="flex items-center mb-8">
// //             <img
// //               alt="Profile picture of Prashant"
// //               className="rounded-full mr-4"
// //               height={100}
// //               src="https://storage.googleapis.com/a1aa/image/9vVlJEvKjVWVUFnBLO8EYgEWPDkqKpjN8lcETZAQhSA.jpg"
// //               width={100}
// //             />
// //             <div>
// //               <span className="block font-semibold">Good Morning Prashant</span>
// //               <span className="text-gray-500 text-sm">
// //                 Continue Your Journey And Achieve Your Target
// //               </span>
// //             </div>
// //           </div>
// //           <div className="flex justify-between mb-8">
// //             <i className="fas fa-user text-gray-600 text-xl"></i>
// //             <i className="fas fa-cog text-gray-600 text-xl"></i>
// //             <i className="fas fa-bell text-gray-600 text-xl"></i>
// //           </div>
// //           <div className="mb-8">
// //             <h2 className="text-xl font-semibold mb-4">Your Mentor</h2>
// //             <ul>
// //               <li className="mb-4 flex items-center">
// //                 <img
// //                   alt="Mentor profile picture"
// //                   className="rounded-full mr-3"
// //                   height={100}
// //                   src="https://storage.googleapis.com/a1aa/image/H0hE4u0BmtCDqJNwllDEwQM0hbr1yuTnlSOPtReIFLo.jpg"
// //                   width={100}
// //                 />
// //                 <div>
// //                   <span className="block font-semibold">
// //                     Prashant Kumar Singh
// //                   </span>
// //                   <span className="text-gray-500 text-sm">
// //                     Software Developer
// //                   </span>
// //                 </div>
// //                 <span className="ml-auto text-purple-600">FRONTEND</span>
// //               </li>
// //               <li className="mb-4 flex items-center">
// //                 <img
// //                   alt="Mentor profile picture"
// //                   className="rounded-full mr-3"
// //                   height={100}
// //                   src="https://storage.googleapis.com/a1aa/image/H0hE4u0BmtCDqJNwllDEwQM0hbr1yuTnlSOPtReIFLo.jpg"
// //                   width={100}
// //                 />
// //                 <div>
// //                   <span className="block font-semibold">
// //                     Prashant Kumar Singh
// //                   </span>
// //                   <span className="text-gray-500 text-sm">
// //                     Software Developer
// //                   </span>
// //                 </div>
// //                 <span className="ml-auto text-purple-600">FRONTEND</span>
// //               </li>
// //               <li className="mb-4 flex items-center">
// //                 <img
// //                   alt="Mentor profile picture"
// //                   className="rounded-full mr-3"
// //                   height={100}
// //                   src="https://storage.googleapis.com/a1aa/image/H0hE4u0BmtCDqJNwllDEwQM0hbr1yuTnlSOPtReIFLo.jpg"
// //                   width={100}
// //                 />
// //                 <div>
// //                   <span className="block font-semibold">
// //                     Prashant Kumar Singh
// //                   </span>
// //                   <span className="text-gray-500 text-sm">
// //                     Software Developer
// //                   </span>
// //                 </div>
// //                 <span className="ml-auto text-purple-600">FRONTEND</span>
// //               </li>
// //               <li className="mb-4 flex items-center">
// //                 <img
// //                   alt="Mentor profile picture"
// //                   className="rounded-full mr-3"
// //                   height={100}
// //                   src="https://storage.googleapis.com/a1aa/image/H0hE4u0BmtCDqJNwllDEwQM0hbr1yuTnlSOPtReIFLo.jpg"
// //                   width={100}
// //                 />
// //                 <div>
// //                   <span className="block font-semibold">
// //                     Prashant Kumar Singh
// //                   </span>
// //                   <span className="text-gray-500 text-sm">
// //                     Software Developer
// //                   </span>
// //                 </div>
// //                 <span className="ml-auto text-purple-600">FRONTEND</span>
// //               </li>
// //               <li className="mb-4 flex items-center">
// //                 <img
// //                   alt="Mentor profile picture"
// //                   className="rounded-full mr-3"
// //                   height={100}
// //                   src="https://storage.googleapis.com/a1aa/image/H0hE4u0BmtCDqJNwllDEwQM0hbr1yuTnlSOPtReIFLo.jpg"
// //                   width={100}
// //                 />
// //                 <div>
// //                   <span className="block font-semibold">
// //                     Prashant Kumar Singh
// //                   </span>
// //                   <span className="text-gray-500 text-sm">
// //                     Software Developer
// //                   </span>
// //                 </div>
// //                 <span className="ml-auto text-purple-600">FRONTEND</span>
// //               </li>
// //             </ul>
// //             <button className="bg-purple-600 text-white px-4 py-2 rounded-lg w-full">
// //               See All
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// import React, { useState } from "react";

// export default function LandingPage() {
//   const [sidebarVisible, setSidebarVisible] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarVisible(!sidebarVisible);
//   };

//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <div
//         className={`w-full lg:w-1/5 bg-white h-screen p-6 transition-transform duration-300 ease-in-out ${
//           sidebarVisible ? "transform-none" : "-translate-x-full"
//         } lg:transform-none lg:translate-x-0`}
//         id="sidebar"
//       >
//         <div className="flex items-center mb-8">
//           <div className="bg-purple-600 text-white p-2 rounded-full">
//             <i className="fas fa-star"></i>
//           </div>
//           <span className="ml-3 text-xl font-bold">COURSU</span>
//         </div>
//         <nav className="mb-8">
//           <h2 className="text-gray-500 mb-4">OVERVIEW</h2>
//           <ul>
//             <li className="mb-4 flex items-center text-purple-600">
//               <i className="fas fa-tachometer-alt mr-3"></i>
//               <span>Dashboard</span>
//             </li>
//             <li className="mb-4 flex items-center text-gray-600">
//               <i className="fas fa-inbox mr-3"></i>
//               <span>Inbox</span>
//             </li>
//             <li className="mb-4 flex items-center text-gray-600">
//               <i className="fas fa-book mr-3"></i>
//               <span>Lesson</span>
//             </li>
//             <li className="mb-4 flex items-center text-gray-600">
//               <i className="fas fa-tasks mr-3"></i>
//               <span>Task</span>
//             </li>
//             <li className="mb-4 flex items-center text-gray-600">
//               <i className="fas fa-users mr-3"></i>
//               <span>Group</span>
//             </li>
//           </ul>
//         </nav>
//         <div className="mb-8">
//           <h2 className="text-gray-500 mb-4">FRIENDS</h2>
//           <ul>{/* Repeat friends list */}</ul>
//         </div>
//         <div>
//           <h2 className="text-gray-500 mb-4">SETTINGS</h2>
//           <ul>
//             <li className="mb-4 flex items-center text-gray-600">
//               <i className="fas fa-cog mr-3"></i>
//               <span>Settings</span>
//             </li>
//             <li className="flex items-center text-red-600">
//               <i className="fas fa-sign-out-alt mr-3"></i>
//               <span>Logout</span>
//             </li>
//           </ul>
//         </div>
//       </div>
//       {/* Main Content */}
//       <div className="flex-1 p-6 w-full">
//         <div className="flex justify-between items-center mb-6">
//           <button
//             className="lg:hidden text-gray-600 text-xl"
//             id="menuButton"
//             onClick={toggleSidebar}
//           >
//             <i className="fas fa-bars"></i>
//           </button>
//           <input
//             className="w-2/3 p-3 rounded-lg border border-gray-300"
//             placeholder="Search your course here..."
//             type="text"
//           />
//           <i className="fas fa-filter text-gray-600 text-xl"></i>
//         </div>
//         <div className="bg-purple-600 text-white p-6 rounded-lg mb-6">
//           <h2 className="text-lg font-semibold mb-2">ONLINE COURSE</h2>
//           <h1 className="text-2xl font-bold mb-4">
//             Sharpen Your Skills With Professional Online Courses
//           </h1>
//           <button className="bg-white text-purple-600 px-4 py-2 rounded-lg">
//             Join Now
//           </button>
//         </div>
//         <div className="flex flex-col lg:flex-row justify-between mb-6">
//           {/* Course Boxes */}
//         </div>
//         <div className="mb-6">
//           <h2 className="text-xl font-semibold mb-4">Continue Watching</h2>
//           <div className="flex flex-col lg:flex-row justify-between">
//                <div className="bg-white p-4 rounded-lg w-full lg:w-1/3 mb-4 lg:mb-0 lg:mr-4">
//                  <img
// //                   alt="Course thumbnail"
// //                   className="rounded-lg mb-4"
// //                   height={200}
// //                   src="https://storage.googleapis.com/a1aa/image/CMW3Qn39Z72O7SMikoL6wZLa0vS_Nll9sub_Nwrz_vw.jpg"
// //                   width={300}
// //                 />
// //                 <span className="bg-purple-600 text-white px-2 py-1 rounded-lg text-sm">
// //                   FRONTEND
// //                 </span>
// //                 <h3 className="text-lg font-semibold mt-2">
// //                   Beginner's Guide To Becoming A Professional Frontend Developer
// //                 </h3>
// //                 <div className="flex items-center mt-2">
// //                   <img
// //                     alt="Instructor profile picture"
// //                     className="rounded-full mr-2"
// //                     height={100}
// //                     src="https://storage.googleapis.com/a1aa/image/joGrYEZWjJ6bLNdHAYDwWwwlvys_LX-pQW79PrzCauQ.jpg"
// //                     width={100}
// //                   />
// //                   <div></div>
//           </div>
//         </div>
//         <div>
//           <h2 className="text-xl font-semibold mb-4">Your Mentor</h2>
//           <div className="bg-white p-4 rounded-lg">{/* Mentor List */}</div>
//         </div>
//       </div>
//       {/* Right Sidebar */}
//       <div className="w-full lg:w-1/5 bg-white h-screen p-6">
//         <div className="flex items-center mb-8">
//           <img
//             alt="Profile picture of Prashant"
//             className="rounded-full mr-4"
//             height={100}
//             src="https://storage.googleapis.com/a1aa/image/9vVlJEvKjVWVUFnBLO8EYgEWPDkqKpjN8lcETZAQhSA.jpg"
//             width={100}
//           />
//           <div>
//             <span className="block font-semibold">Good Morning Prashant</span>
//             <span className="text-gray-500 text-sm">
//               Continue Your Journey And Achieve Your Target
//             </span>
//           </div>
//         </div>
//         <div className="flex justify-between mb-8">
//           <i className="fas fa-user text-gray-600 text-xl"></i>
//           <i className="fas fa-cog text-gray-600 text-xl"></i>
//           <i className="fas fa-bell text-gray-600 text-xl"></i>
//         </div>
//         <div className="mb-8">
//           <h2 className="text-xl font-semibold mb-4">Your Mentor</h2>
//           <ul>{/* Mentor list items */}</ul>
//           <button className="bg-purple-600 text-white px-4 py-2 rounded-lg w-full">
//             See All
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";

export default function LandingPage() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`w-full lg:w-1/5 bg-white h-screen p-6 transition-transform duration-300 ease-in-out ${
          sidebarVisible ? "transform-none" : "-translate-x-full"
        } lg:transform-none lg:translate-x-0`}
        id="sidebar"
      >
        <div className="flex items-center mb-8">
          <div className="bg-purple-600 text-white p-2 rounded-full">
            <i className="fas fa-star"></i>
          </div>
          <span className="ml-3 text-xl font-sans font-bold">Marco</span>
        </div>
        <nav className="mb-8">
          <h2 className="text-gray-500 mb-4">OVERVIEW</h2>
          <ul>
            <li className="mb-4 flex items-center text-purple-600">
              <i className="fas fa-tachometer-alt mr-3"></i>
              <span>Dashboard</span>
            </li>
            <li className="mb-4 flex items-center text-gray-600">
              <i className="fas fa-inbox mr-3"></i>
              <span>Inbox</span>
            </li>
            <li className="mb-4 flex items-center text-gray-600">
              <i className="fas fa-book mr-3"></i>
              <span>Lesson</span>
            </li>
            <li className="mb-4 flex items-center text-gray-600">
              <i className="fas fa-tasks mr-3"></i>
              <span>Task</span>
            </li>
            <li className="mb-4 flex items-center text-gray-600">
              <i className="fas fa-users mr-3"></i>
              <span>Group</span>
            </li>
          </ul>
        </nav>
        <div className="mb-8">
          <h2 className="text-gray-500 mb-4">FRIENDS</h2>
          <ul>{/* Repeat friends list */}</ul>
        </div>
        <div>
          <h2 className="text-gray-500 mb-4">SETTINGS</h2>
          <ul>
            <li className="mb-4 flex items-center text-gray-600">
              <i className="fas fa-cog mr-3"></i>
              <span>Settings</span>
            </li>
            <li className="flex items-center text-red-600">
              <i className="fas fa-sign-out-alt mr-3"></i>
              <span>Logout</span>
            </li>
          </ul>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1 p-6 w-full">
        <div className="flex justify-between items-center mb-6">
          <button
            className="lg:hidden text-gray-600 text-xl"
            id="menuButton"
            onClick={toggleSidebar}
          >
            <i className="fas fa-bars"></i>
          </button>
          <input
            className="w-2/3 p-3 rounded-lg border border-gray-300"
            placeholder="Search your course here..."
            type="text"
          />
          <i className="fas fa-filter text-gray-600 text-xl"></i>
        </div>
        <div className="bg-purple-600 text-white p-6 rounded-lg mb-6">
          <h2 className="text-lg font-semibold mb-2">ONLINE COURSE</h2>
          <h1 className="text-2xl font-bold mb-4">
            Sharpen Your Skills With Professional Online Courses
          </h1>
          <button className="bg-white text-purple-600 px-4 py-2 rounded-lg">
            Join Now
          </button>
        </div>
        <div className="flex flex-col lg:flex-row justify-between mb-6">
          {/* Course Boxes */}
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Continue Watching</h2>
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="bg-white p-4 rounded-lg w-full lg:w-1/3 mb-4 lg:mb-0 lg:mr-4">
              <img
                alt="Course thumbnail"
                className="rounded-lg mb-4"
                height={200}
                src="https://storage.googleapis.com/a1aa/image/CMW3Qn39Z72O7SMikoL6wZLa0vS_Nll9sub_Nwrz_vw.jpg"
                width={300}
              />
              <span className="bg-purple-600 text-white px-2 py-1 rounded-lg text-sm">
                FRONTEND
              </span>
              <h3 className="text-lg font-semibold mt-2">
                Beginner's Guide To Becoming A Professional Frontend Developer
              </h3>
              <div className="flex items-center mt-2">
                <img
                  alt="Instructor profile picture"
                  className="rounded-full mr-2"
                  height={100}
                  src="https://storage.googleapis.com/a1aa/image/joGrYEZWjJ6bLNdHAYDwWwwlvys_LX-pQW79PrzCauQ.jpg"
                  width={100}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Your Mentor</h2>
          <div className="bg-white p-4 rounded-lg">{/* Mentor List */}</div>
        </div>
      </div>
      {/* Right Sidebar */}
      <div className="w-full lg:w-1/5 bg-white h-screen p-6">
        <div className="flex items-center mb-8">
          <img
            alt="Profile picture of Prashant"
            className="rounded-full mr-4"
            height={100}
            src="https://storage.googleapis.com/a1aa/image/9vVlJEvKjVWVUFnBLO8EYgEWPDkqKpjN8lcETZAQhSA.jpg"
            width={100}
          />
          <div>
            <span className="block font-semibold">Good Morning Prashant</span>
            <span className="text-gray-500 text-sm">
              Continue Your Journey And Achieve Your Target
            </span>
          </div>
        </div>
        <div className="flex justify-between mb-8">
          <i className="fas fa-user text-gray-600 text-xl"></i>
          <i className="fas fa-cog text-gray-600 text-xl"></i>
          <i className="fas fa-bell text-gray-600 text-xl"></i>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Your Mentor</h2>
          <ul>{/* Mentor list items */}</ul>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg w-full">
            See All
          </button>
        </div>
      </div>
    </div>
  );
}
