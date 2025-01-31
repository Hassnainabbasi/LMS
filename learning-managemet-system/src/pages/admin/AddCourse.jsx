// import React, { useState } from "react";
// import "font-awesome/css/font-awesome.min.css";

// export default function AddCourse() {
//   const [courseName, setCourseName] = useState("");
//   const [courseDescription, setCourseDescription] = useState("");
//   const [courseImage, setCourseImage] = useState(null);
//   const [trainer, setTrainer] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Course Added:", {
//       courseName,
//       courseDescription,
//       courseImage,
//       trainer,
//     });
//   };

//   return (
//     <div className="flex flex-col lg:flex-row">
//       {/* Sidebar */}
//       <div className="bg-white w-full lg:w-1/4 p-4 shadow-lg">
//         <div className="flex items-center mb-6">
//           <div className="bg-gray-300 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold text-gray-700">
//             TO
//           </div>
//           <div className="ml-4">
//             <div className="text-lg font-semibold">Training Organization</div>
//             <a href="#" className="text-blue-500">
//               profile
//             </a>
//           </div>
//         </div>
//         <nav>
//           <ul>
//             <li className="mb-4">
//               <a
//                 href="#"
//                 className="flex items-center text-gray-700 hover:text-blue-500"
//               >
//                 <i className="fas fa-tachometer-alt mr-2" /> Dashboard
//               </a>
//             </li>
//             <li className="mb-4">
//               <a
//                 href="#"
//                 className="flex items-center text-gray-700 hover:text-blue-500"
//               >
//                 <i className="fas fa-chalkboard-teacher mr-2" /> Virtual
//                 classrooms
//               </a>
//             </li>
//             <li className="mb-4">
//               <a
//                 href="#"
//                 className="flex items-center text-gray-700 hover:text-blue-500"
//               >
//                 <i className="fas fa-book mr-2" /> Courses
//               </a>
//               <ul className="ml-6 mt-2">
//                 <li className="mb-2">
//                   <a href="#" className="text-gray-700 hover:text-blue-500">
//                     Courses list
//                   </a>
//                 </li>
//                 <li className="mb-2">
//                   <a href="#" className="text-gray-700 hover:text-blue-500">
//                     Packages
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-gray-700 hover:text-blue-500">
//                     Reviews
//                   </a>
//                 </li>
//               </ul>
//             </li>
//           </ul>
//         </nav>
//       </div>
//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         <header className="flex justify-between items-center mb-6">
//           <div className="text-3xl font-bold text-green-600">VEDAMO</div>
//           <div className="flex items-center">
//             <a href="#" className="text-gray-700 mr-4">
//               COURSES
//             </a>
//             <i className="fas fa-globe text-gray-700 mr-4" />
//             <div className="bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold text-gray-700">
//               TO
//             </div>
//           </div>
//         </header>
//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <div className="flex flex-col md:flex-row justify-between items-center mb-4">
//             <h2 className="text-2xl font-semibold mb-4 md:mb-0">Courses</h2>
//             <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
//               <i className="fas fa-plus mr-2" /> NEW COURSE
//             </button>
//           </div>
//           <div className="flex flex-col md:flex-row justify-between items-center mb-4">
//             <div className="flex space-x-4 mb-4 md:mb-0">
//               <select className="border border-gray-300 rounded-lg p-2">
//                 <option>Newest</option>
//               </select>
//               <select className="border border-gray-300 rounded-lg p-2">
//                 <option>All</option>
//               </select>
//             </div>
//             <div className="flex items-center">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="border border-gray-300 rounded-lg p-2"
//               />
//               <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg ml-2">
//                 MANDATORY
//               </button>
//             </div>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="w-full text-left border-collapse">
//               <thead>
//                 <tr>
//                   <th className="border-b p-4">ID</th>
//                   <th className="border-b p-4">Name</th>
//                   <th className="border-b p-4">Created</th>
//                   <th className="border-b p-4" />
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="border-b p-4">13592</td>
//                   <td className="border-b p-4 text-blue-500">
//                     English C1 Course Summer 2022
//                   </td>
//                   <td className="border-b p-4">17.05.2022</td>
//                   <td className="border-b p-4">
//                     <a href="#" className="text-blue-500 mr-4">
//                       Lessons: 1
//                     </a>
//                     <a href="#" className="text-blue-500 mr-4">
//                       add participants
//                     </a>
//                     <a href="#" className="text-blue-500 mr-4">
//                       add groups
//                     </a>
//                     <button className="bg-black text-white px-4 py-2 rounded-lg">
//                       PREVIEW
//                     </button>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="border-b p-4">13579</td>
//                   <td className="border-b p-4 text-blue-500">
//                     Advanced Business English Course
//                   </td>
//                   <td className="border-b p-4">12.05.2022</td>
//                   <td className="border-b p-4">
//                     <a href="#" className="text-blue-500 mr-4">
//                       Lessons: 1
//                     </a>
//                     <a href="#" className="text-blue-500 mr-4">
//                       add participants
//                     </a>
//                     <a href="#" className="text-blue-500 mr-4">
//                       add groups
//                     </a>
//                     <button className="bg-black text-white px-4 py-2 rounded-lg">
//                       PREVIEW
//                     </button>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import "font-awesome/css/font-awesome.min.css";

export default function AddCourse() {
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [trainer, setTrainer] = useState("");
  const [courseSection, setCourseSection] = useState("");
  const [courseBatch, setCourseBatch] = useState("");
  const [courseImage, setCourseImage] = useState(null);
  const [trainers, setTrainers] = useState([]);
  const [sections, setSections] = useState([]);
  const [batches, setBatches] = useState([]);

   useEffect(() => {
     // Simulating API responses with dummy data
     const fetchData = async () => {
       try {
         const trainersResponse = {
           data: [
             { id: 1, name: "Trainer 1" },
             { id: 2, name: "Trainer 2" },
             { id: 3, name: "Trainer 3" },
           ],
         };
         const sectionsResponse = {
           data: [
             { id: 1, name: "Section 1" },
             { id: 2, name: "Section 2" },
             { id: 3, name: "Section 3" },
           ],
         };
         const batchesResponse = {
           data: [
             { id: 1, name: "Batch 1" },
             { id: 2, name: "Batch 2" },
             { id: 3, name: "Batch 3" },
           ],
         };

         setTrainers(trainersResponse.data);
         setSections(sectionsResponse.data);
         setBatches(batchesResponse.data);
       } catch (error) {
         console.error("Error fetching data:", error);
       }
     };

     fetchData();
   }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Course Added:", {
      courseName,
      courseDescription,
      courseImage,
      trainer,
      courseSection,
      courseBatch,
    });
  };

  const onDrop = (acceptedFiles) => {
    setCourseImage(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar */}
      <div className="bg-white w-full lg:w-1/4 p-4 shadow-lg">
        <div className="flex items-center mb-6">
          <div className="bg-gray-300 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold text-gray-700">
            TO
          </div>
          <div className="ml-4">
            <div className="text-lg font-semibold">Training Organization</div>
            <a href="#" className="text-blue-500">
              profile
            </a>
          </div>
        </div>
        <nav>
          <ul>
            <li className="mb-4">
              <a
                href="#"
                className="flex items-center text-gray-700 hover:text-blue-500"
              >
                <i className="fas fa-tachometer-alt mr-2" /> Dashboard
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#"
                className="flex items-center text-gray-700 hover:text-blue-500"
              >
                <i className="fas fa-chalkboard-teacher mr-2" /> Virtual
                Classrooms
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#"
                className="flex items-center text-gray-700 hover:text-blue-500"
              >
                <i className="fas fa-book mr-2" /> Courses
              </a>
              <ul className="ml-6 mt-2">
                <li className="mb-2">
                  <a href="#" className="text-gray-700 hover:text-blue-500">
                    Courses list
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-700 hover:text-blue-500">
                    Packages
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-blue-500">
                    Reviews
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <div className="text-3xl font-bold text-green-600">VEDAMO</div>
          <div className="flex items-center">
            <a href="#" className="text-gray-700 mr-4">
              COURSES
            </a>
            <i className="fas fa-globe text-gray-700 mr-4" />
            <div className="bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold text-gray-700">
              TO
            </div>
          </div>
        </header>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Add New Course</h2>
          <form onSubmit={handleSubmit}>
            {/* Course Name */}
            <div className="mb-4">
              <label
                htmlFor="courseName"
                className="block text-gray-700 font-semibold mb-2"
              >
                Course Name
              </label>
              <input
                type="text"
                id="courseName"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Enter Course Name"
                required
              />
            </div>

            {/* Course Description */}
            <div className="mb-4">
              <label
                htmlFor="courseDescription"
                className="block text-gray-700 font-semibold mb-2"
              >
                Course Description
              </label>
              <textarea
                id="courseDescription"
                value={courseDescription}
                onChange={(e) => setCourseDescription(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                rows="4"
                placeholder="Enter Course Description"
                required
              />
            </div>

            {/* Dropzone for Image */}
            <div
              className="mb-4"
              {...getRootProps()}
              style={{
                border: "2px dashed #cccccc",
                padding: "20px",
                cursor: "pointer",
              }}
            >
              <input {...getInputProps()} />
              <p className="text-center text-gray-600">
                Drag & drop an image here, or click to select
              </p>
              {courseImage && (
                <p className="mt-2 text-center text-blue-500">
                  {courseImage.name}
                </p>
              )}
            </div>

            {/* Trainer Name */}
            <div className="mb-4">
              <label
                htmlFor="trainer"
                className="block text-gray-700 font-semibold mb-2"
              >
                Trainer Name
              </label>
              <select
                id="trainer"
                value={trainer}
                onChange={(e) => setTrainer(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              >
                <option value="">Select Trainer</option>
                {trainers.map((trainer) => (
                  <option key={trainer.id} value={trainer.id}>
                    {trainer.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Course Section */}
            <div className="mb-4">
              <label
                htmlFor="courseSection"
                className="block text-gray-700 font-semibold mb-2"
              >
                Course Section
              </label>
              <select
                id="courseSection"
                value={courseSection}
                onChange={(e) => setCourseSection(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              >
                <option value="">Select Section</option>
                {sections.map((section) => (
                  <option key={section.id} value={section.id}>
                    {section.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Course Batch */}
            <div className="mb-4">
              <label
                htmlFor="courseBatch"
                className="block text-gray-700 font-semibold mb-2"
              >
                Course Batch
              </label>
              <select
                id="courseBatch"
                value={courseBatch}
                onChange={(e) => setCourseBatch(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              >
                <option value="">Select Batch</option>
                {batches.map((batch) => (
                  <option key={batch.id} value={batch.id}>
                    {batch.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition duration-300"
              >
                Add Course
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
