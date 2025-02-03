
// import React, { useState, useEffect } from "react";
// import { useDropzone } from "react-dropzone";
// import "font-awesome/css/font-awesome.min.css";
// import { Link } from "react-router-dom";
// import { BASE_URL } from "../../constant";

// export default function AddCourse() {
//   const [courseName, setCourseName] = useState("");
//   const [courseDescription, setCourseDescription] = useState("");
//   const [trainer, setTrainer] = useState([]);
//   const [courseSection, setCourseSection] = useState("");
//   const [courseBatch, setCourseBatch] = useState("");
//   const [courseImage, setCourseImage] = useState(null);
//   const [sections, setSections] = useState([]);
//   const [batches, setBatches] = useState([]);
//   const [selectedTrainerId, setSelectedTrainerId] = useState("");
// const [selectedTrainerName, setSelectedTrainerName] = useState("Select Trainer");



//    useEffect(() => {
//      const fetchData = async () => {
//        try {
//          const sectionsResponse = {
//            data: [
//              { id: 1, name: "Section 1" },
//              { id: 2, name: "Section 2" },
//              { id: 3, name: "Section 3" },
//            ],
//          };
//          const batchesResponse = {
//            data: [
//              { id: 1, name: "Batch 1" },
//              { id: 2, name: "Batch 2" },
//              { id: 3, name: "Batch 3" },
//            ],
//          };

//          setSections(sectionsResponse.data);
//          setBatches(batchesResponse.data);
//        } catch (error) {
//          console.error("Error fetching data:", error);
//        }
//      };

//      fetchData();
//    }, []);

//   const getTrainers = async() =>{
//     try {
//       const response = await fetch(`${BASE_URL}/auth/trainer`, {
//         method: "GET",
//       });
//       const result = await response.json();
//       if (response.ok) {
//         setTrainer(result.trainer)
//         console.log(result.trainer)
//       } else {
//         console.error("Failed to fetch users");
//       }
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     }
//   }

//  useEffect(()=>{
//   getTrainers()
//  },[])

//  const handleTrainerChange = (e) => {
//   const trainerId = e.target.value;
//   setSelectedTrainerId(trainerId);

//   const selectedTrainer = trainer.find((t) => t._id === trainerId);
//   if (selectedTrainer) {
//     setSelectedTrainerName(selectedTrainer.trainerName);
//   }
// };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Course Added:", {
//       courseName,
//       courseDescription,
//       courseImage,
//       trainer,
//       courseSection,
//       courseBatch,
//     });

//     let uploadImgurl = "";
//     if (courseImage) {
//       const data = new FormData();
//       data.append("file", courseImage);
//       data.append("upload_preset", "Lmsystem"); 
//       data.append("cloud_name", "djmfadch8"); 
  
//       const res = await fetch("https://api.cloudinary.com/v1_1/djmfadch8/image/upload", {
//         method: "POST",
//         body: data,
//       });
  
//       if (!res.ok) {
//         const error = await res.json();
//         console.error("Error uploading image:", error);
//         return;
//       }
  
//       const uploadImgData = await res.json();
//       uploadImgurl = uploadImgData.secure_url; 
//       console.log("Image URL:", uploadImgurl);
//     }
  
//     try {
//       const response = await fetch("http://localhost:3000/course", {
//         method: "POST", 
//          headers: {
//         "Content-Type": "application/json", 
//       },
//         body: JSON.stringify({
//           courseName,
//           courseDescription,
//           courseImage: uploadImgurl,
//           trainer: selectedTrainerId ,
//           courseSection,
//           courseBatch,
//         }), 
//       });
  
//       const result = await response.json(); 
//       console.log("Course Added:", result);
  
//     } catch (error) {
//       console.error("Error adding course:", error);
//     }
//   };
  
//   const onDrop = (acceptedFiles) => {
//     setCourseImage(acceptedFiles[0]);
//   };

//   const { getRootProps, getInputProps } = useDropzone({
//     onDrop,
//     accept: "image/*",
//   });

//   return (
// //     <div className="flex flex-col lg:flex-row">
// //       <div className="bg-white w-full lg:w-1/4 p-4 shadow-lg">
// //         <div className="flex items-center mb-6">
// //           <div className="bg-gray-300 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold text-gray-700">
// //             TO
// //           </div>
// //           <div className="ml-4">
// //             <div className="text-lg font-semibold">Training Organization</div>
// //             <a href="#" className="text-blue-500">
// //               profile
// //             </a>
// //           </div>
// //         </div>
// //         <nav>
// //           <ul>
// //             <li className="mb-4">
// //               <Link to={'/admin'}
// //                 href=""
// //                 className="flex items-center text-gray-700 hover:text-blue-500"
// //               >
// //                 <i className="fas fa-tachometer-alt mr-2" /> Dashboard
// //               </Link>
// //             </li>
// //             <li className="mb-4">
// //               <a
// //                 href="#"
// //                 className="flex items-center text-gray-700 hover:text-blue-500"
// //               >
// //                 <i className="fas fa-chalkboard-teacher mr-2" /> Virtual
// //                 Classrooms
// //               </a>
// //             </li>
// //             <li className="mb-4">
// //               <a
// //                 href="#"
// //                 className="flex items-center text-gray-700 hover:text-blue-500"
// //               >
// //                 <i className="fas fa-book mr-2" /> Courses
// //               </a>
// //               <ul className="ml-6 mt-2">
// //                 <li className="mb-2">
// //                   <a href="#" className="text-gray-700 hover:text-blue-500">
// //                     Courses list
// //                   </a>
// //                 </li>
// //                 <li className="mb-2">
// //                   <a href="#" className="text-gray-700 hover:text-blue-500">
// //                     Packages
// //                   </a>
// //                 </li>
// //                 <li>
// //                   <a href="#" className="text-gray-700 hover:text-blue-500">
// //                     Reviews
// //                   </a>
// //                 </li>
// //               </ul>
// //             </li>
// //           </ul>
// //         </nav>
// //       </div>

// //       {/* Main Content */}
// //       <div className="flex-1 p-6">
// //         <header className="flex justify-between items-center mb-6">
// //           <div className="text-3xl font-bold text-green-600">VEDAMO</div>
// //           <div className="flex items-center">
// //             <a href="#" className="text-gray-700 mr-4">
// //               COURSES
// //             </a>
// //             <i className="fas fa-globe text-gray-700 mr-4" />
// //             <div className="bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold text-gray-700">
// //               TO
// //             </div>
// //           </div>
// //         </header>

// //         <div className="bg-white p-6 rounded-lg shadow-lg">
// //           <h2 className="text-2xl font-semibold mb-4">Add New Course</h2>
// //           <form onSubmit={handleSubmit}>
// //             {/* Course Name */}
// //             <div className="mb-4">
// //               <label
// //                 htmlFor="courseName"
// //                 className="block text-gray-700 font-semibold mb-2"
// //               >
// //                 Course Name
// //               </label>
// //               <input
// //                 type="text"
// //                 id="courseName"
// //                 value={courseName}
// //                 onChange={(e) => setCourseName(e.target.value)}
// //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg"
// //                 placeholder="Enter Course Name"
// //                 required
// //               />
// //             </div>

// //             {/* Course Description */}
// //             <div className="mb-4">
// //               <label
// //                 htmlFor="courseDescription"
// //                 className="block text-gray-700 font-semibold mb-2"
// //               >
// //                 Course Description
// //               </label>
// //               <textarea
// //                 id="courseDescription"
// //                 value={courseDescription}
// //                 onChange={(e) => setCourseDescription(e.target.value)}
// //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg"
// //                 rows="4"
// //                 placeholder="Enter Course Description"
// //                 required
// //               />
// //             </div>

// //             {/* Dropzone for Image */}
// //             <div
// //               className="mb-4"
// //               {...getRootProps()}
// //               style={{
// //                 border: "2px dashed #cccccc",
// //                 padding: "20px",
// //                 cursor: "pointer",
// //               }}
// //             >
// //               <input {...getInputProps()} />
// //               <p className="text-center text-gray-600">
// //                 Drag & drop an image here, or click to select
// //               </p>
// //               {courseImage && (
// //                 <p className="mt-2 text-center text-blue-500">
// //                   {courseImage.name}
// //                 </p>
// //               )}
// //             </div>

// //             {/* Trainer Name */}
// //             <div className="mb-4">
// //               <label
// //                 htmlFor="trainer"
// //                 className="block text-gray-700 font-semibold mb-2"
// //               >
// //                 Trainer Name
// //               </label>
// //               <select
// //   id="trainer"
// //   value={selectedTrainerId}
// //   onChange={handleTrainerChange}
// //   className="w-full px-4 py-2 border border-gray-300 rounded-lg"
// //   required
// // >
// //   <option value="" disabled>
// //     {selectedTrainerName} {/* Yahan selected trainer ka naam show hoga */}
// //   </option>
// //   {trainer.map((trainers) => (
// //     <option key={trainers._id} value={trainers._id}>
// //       {trainers.trainerName}
// //     </option>
// //   ))}
// // </select>
// //             </div>

// //             {/* Course Section */}
// //             <div className="mb-4">
// //               <label
// //                 htmlFor="courseSection"
// //                 className="block text-gray-700 font-semibold mb-2"
// //               >
// //                 Course Section
// //               </label>
// //               <select
// //                 id="courseSection"
// //                 value={courseSection}
// //                 onChange={(e) => setCourseSection(e.target.value)}
// //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg"
// //                 required
// //               >
// //                 <option value="">Select Section</option>
// //                 {sections.map((section) => (
// //                   <option key={section.id} value={section.id}>
// //                     {section.name}
// //                   </option>
// //                 ))}
// //               </select>
// //             </div>

// //             {/* Course Batch */}
// //             <div className="mb-4">
// //               <label
// //                 htmlFor="courseBatch"
// //                 className="block text-gray-700 font-semibold mb-2"
// //               >
// //                 Course Batch
// //               </label>
// //               <select
// //                 id="courseBatch"
// //                 value={courseBatch}
// //                 onChange={(e) => setCourseBatch(e.target.value)}
// //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg"
// //                 required
// //               >
// //                 <option value="">Select Batch</option>
// //                 {batches.map((batch) => (
// //                   <option key={batch.id} value={batch.id}>
// //                     {batch.name}
// //                   </option>
// //                 ))}
// //               </select>
// //               <button>ADD BATCH</button>
// //             </div>

// //             {/* Submit Button */}
// //             <div className="flex justify-center">
// //               <button
// //                 type="submit"
// //                 className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition duration-300"
// //               >
// //                 Add Course
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// <table className="min-w-full bg-white">
//   <thead>
//     <tr>
//       <th className="py-2 px-4 border-b">Course Image</th>
//       <th className="py-2 px-4 border-b">Course Name</th>
//       <th className="py-2 px-4 border-b">Batch</th>
//       <th className="py-2 px-4 border-b">Trainer</th>
//       <th className="py-2 px-4 border-b">Starting At</th>
//       <th className="py-2 px-4 border-b">Status</th>
//       <th className="py-2 px-4 border-b">Action</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr className="bg-gray-50">
//       <td className="py-2 px-4 border-b">
//         <img
//           alt="Course image"
//           className="w-10 h-10 mr-2"
//           height={50}
//           src="https://storage.googleapis.com/a1aa/image/mBP6g0xEytYPx-36Mxe3_27-o2NMMgnJnslTs_4Fk9w.jpg"
//           width={50}
//         />
//       </td>
//       <td className="py-2 px-4 border-b">Jaisy Course</td>
//       <td className="py-2 px-4 border-b">Batch 1</td>
//       <td className="py-2 px-4 border-b">John Doe</td>
//       <td className="py-2 px-4 border-b">2025-02-03 10:00 AM</td>
//       <td className="py-2 px-4 border-b">
//         <select className="border border-gray-300 rounded p-1">
//           <option>Pending</option>
//           <option>Ongoing</option>
//           <option>Complete</option>
//         </select>
//       </td>
//       <td className="py-2 px-4 border-b">
//         <i className="fas fa-trash text-red-500 cursor-pointer"></i>
//       </td>
//     </tr>
//     <tr>
//       <td className="py-2 px-4 border-b">
//         <img
//           alt="Course image"
//           className="w-10 h-10 mr-2"
//           height={50}
//           src="https://storage.googleapis.com/a1aa/image/mBP6g0xEytYPx-36Mxe3_27-o2NMMgnJnslTs_4Fk9w.jpg"
//           width={50}
//         />
//       </td>
//       <td className="py-2 px-4 border-b">Python Data Science: Data Prep...</td>
//       <td className="py-2 px-4 border-b">Batch 2</td>
//       <td className="py-2 px-4 border-b">Jane Smith</td>
//       <td className="py-2 px-4 border-b">2025-02-05 11:00 AM</td>
//       <td className="py-2 px-4 border-b">
//         <select className="border border-gray-300 rounded p-1">
//           <option>Pending</option>
//           <option>Ongoing</option>
//           <option>Complete</option>
//         </select>
//       </td>
//       <td className="py-2 px-4 border-b">
//         <i className="fas fa-trash text-red-500 cursor-pointer"></i>
//       </td>
//     </tr>
//     <tr className="bg-gray-50">
//       <td className="py-2 px-4 border-b">
//         <img
//           alt="Course image"
//           className="w-10 h-10 mr-2"
//           height={50}
//           src="https://storage.googleapis.com/a1aa/image/mBP6g0xEytYPx-36Mxe3_27-o2NMMgnJnslTs_4Fk9w.jpg"
//           width={50}
//         />
//       </td>
//       <td className="py-2 px-4 border-b">The 2024 Pandas Bootcamp: Adva...</td>
//       <td className="py-2 px-4 border-b">Batch 3</td>
//       <td className="py-2 px-4 border-b">James Brown</td>
//       <td className="py-2 px-4 border-b">2025-02-10 09:00 AM</td>
//       <td className="py-2 px-4 border-b">
//         <select className="border border-gray-300 rounded p-1">
//           <option>Pending</option>
//           <option>Ongoing</option>
//           <option>Complete</option>
//         </select>
//       </td>
//       <td className="py-2 px-4 border-b">
//         <i className="fas fa-trash text-red-500 cursor-pointer"></i>
//       </td>
//     </tr>
//     {/* Add more rows as needed */}
//   </tbody>
// </table>

//   );
// }
import React, { useState, useEffect } from "react";
import Modal from "react-modal";  // Import the Modal component
import { useDropzone } from "react-dropzone";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../constant";
import AddBatch from "./AdBatch";
import AddSection from "./AdSection";

export default function AddCourse() {
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [trainer, setTrainer] = useState([]);
  const [courseSection, setCourseSection] = useState("");
  const [courseBatch, setCourseBatch] = useState("");
  const [courseImage, setCourseImage] = useState(null);
  const [sections, setSections] = useState([]);
  const [batches, setBatches] = useState([]);
  const [selectedTrainerId, setSelectedTrainerId] = useState("");
  const [selectedTrainerName, setSelectedTrainerName] = useState("Select Trainer");

  // Modal states
  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);
  const [isBatchModalOpen, setIsBatchModalOpen] = useState(false);
  const [isSectionModalOpen, setIsSectionModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
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

        setSections(sectionsResponse.data);
        setBatches(batchesResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const getTrainers = async () => {
    try {
      const response = await fetch(`${BASE_URL}/auth/trainer`, {
        method: "GET",
      });
      const result = await response.json();
      if (response.ok) {
        setTrainer(result.trainer);
      } else {
        console.error("Failed to fetch users");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    getTrainers();
  }, []);

  const handleTrainerChange = (e) => {
    const trainerId = e.target.value;
    setSelectedTrainerId(trainerId);

    const selectedTrainer = trainer.find((t) => t._id === trainerId);
    if (selectedTrainer) {
      setSelectedTrainerName(selectedTrainer.trainerName);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Course Added:", {
      courseName,
      courseDescription,
      courseImage,
      trainer,
      courseSection,
      courseBatch,
    });

    // Implement image upload logic and API call for adding the course...
  };

  const onDrop = (acceptedFiles) => {
    setCourseImage(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  // Modal toggle functions
  const openCourseModal = () => setIsCourseModalOpen(true);
  const closeCourseModal = () => setIsCourseModalOpen(false);

  const openBatchModal = () => setIsBatchModalOpen(true);
  const closeBatchModal = () => setIsBatchModalOpen(false);

  const openSectionModal = () => setIsSectionModalOpen(true);
  const closeSectionModal = () => setIsSectionModalOpen(false);

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-semibold text-center mb-8">Manage Courses</h1>
      <div className="flex gap-4 mb-6">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
          onClick={openCourseModal}
        >
          Add New Course
        </button>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600 focus:outline-none"
          onClick={openBatchModal}
        >
          New Batch
        </button>
        <button
          className="bg-purple-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-purple-600 focus:outline-none"
          onClick={openSectionModal}
        >
          New Section
        </button>
      </div>
      <table className="min-w-full bg-white">
  <thead>
    <tr>
      <th className="py-2 px-4 border-b">Course Image</th>
      <th className="py-2 px-4 border-b">Course Name</th>
      <th className="py-2 px-4 border-b">Batch</th>
      <th className="py-2 px-4 border-b">Trainer</th>
      <th className="py-2 px-4 border-b">Starting At</th>
      <th className="py-2 px-4 border-b">Status</th>
      <th className="py-2 px-4 border-b">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr className="bg-gray-50">
      <td className="py-2 px-4 border-b">
        <img
          alt="Course image"
          className="w-10 h-10 mr-2"
          height={50}
          src="https://storage.googleapis.com/a1aa/image/mBP6g0xEytYPx-36Mxe3_27-o2NMMgnJnslTs_4Fk9w.jpg"
          width={50}
        />
      </td>
      <td className="py-2 px-4 border-b">Jaisy Course</td>
      <td className="py-2 px-4 border-b">Batch 1</td>
      <td className="py-2 px-4 border-b">John Doe</td>
      <td className="py-2 px-4 border-b">2025-02-03 10:00 AM</td>
      <td className="py-2 px-4 border-b">
        <select className="border border-gray-300 rounded p-1">
          <option>Pending</option>
          <option>Ongoing</option>
          <option>Complete</option>
        </select>
      </td>
      <td className="py-2 px-4 border-b">
        <i className="fas fa-trash text-red-500 cursor-pointer"></i>
      </td>
    </tr>
    <tr>
      <td className="py-2 px-4 border-b">
        <img
          alt="Course image"
          className="w-10 h-10 mr-2"
          height={50}
          src="https://storage.googleapis.com/a1aa/image/mBP6g0xEytYPx-36Mxe3_27-o2NMMgnJnslTs_4Fk9w.jpg"
          width={50}
        />
      </td>
      <td className="py-2 px-4 border-b">Python Data Science: Data Prep...</td>
      <td className="py-2 px-4 border-b">Batch 2</td>
      <td className="py-2 px-4 border-b">Jane Smith</td>
      <td className="py-2 px-4 border-b">2025-02-05 11:00 AM</td>
      <td className="py-2 px-4 border-b">
        <select className="border border-gray-300 rounded p-1">
          <option>Pending</option>
          <option>Ongoing</option>
          <option>Complete</option>
        </select>
      </td>
      <td className="py-2 px-4 border-b">
        <i className="fas fa-trash text-red-500 cursor-pointer"></i>
      </td>
    </tr>
    <tr className="bg-gray-50">
      <td className="py-2 px-4 border-b">
        <img
          alt="Course image"
          className="w-10 h-10 mr-2"
          height={50}
          src="https://storage.googleapis.com/a1aa/image/mBP6g0xEytYPx-36Mxe3_27-o2NMMgnJnslTs_4Fk9w.jpg"
          width={50}
        />
      </td>
      <td className="py-2 px-4 border-b">The 2024 Pandas Bootcamp: Adva...</td>
      <td className="py-2 px-4 border-b">Batch 3</td>
      <td className="py-2 px-4 border-b">James Brown</td>
      <td className="py-2 px-4 border-b">2025-02-10 09:00 AM</td>
      <td className="py-2 px-4 border-b">
        <select className="border border-gray-300 rounded p-1">
          <option>Pending</option>
          <option>Ongoing</option>
          <option>Complete</option>
        </select>
      </td>
      <td className="py-2 px-4 border-b">
        <i className="fas fa-trash text-red-500 cursor-pointer"></i>
      </td>
    </tr>
    {/* Add more rows as needed */}
  </tbody>
</table>

      {/* New Course Modal */}
      <Modal isOpen={isCourseModalOpen} onRequestClose={closeCourseModal}>
        <div className="modal-content bg-white p-6 rounded-lg shadow-xl max-w-lg mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-4">Add New Course</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="courseName" className="block text-sm font-medium">Course Name</label>
              <input
                type="text"
                id="courseName"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="courseDescription" className="block text-sm font-medium">Course Description</label>
              <textarea
                id="courseDescription"
                value={courseDescription}
                onChange={(e) => setCourseDescription(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="relative">
              <div {...getRootProps()} className="border-dashed border-2 border-gray-300 rounded-lg p-4 text-center">
                <input {...getInputProps()} />
                <p className="text-gray-500">Drag & drop an image, or click to select</p>
                {courseImage && <p className="mt-2 text-sm">{courseImage.name}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="trainer" className="block text-sm font-medium">Trainer</label>
              <select
                id="trainer"
                value={selectedTrainerId}
                onChange={handleTrainerChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="" disabled>{selectedTrainerName}</option>
                {trainer.map((t) => (
                  <option key={t._id} value={t._id}>{t.trainerName}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="courseSection" className="block text-sm font-medium">Section</label>
              <select
                id="courseSection"
                value={courseSection}
                onChange={(e) => setCourseSection(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Section</option>
                {sections.map((section) => (
                  <option key={section.id} value={section.id}>{section.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="courseBatch" className="block text-sm font-medium">Batch</label>
              <select
                id="courseBatch"
                value={courseBatch}
                onChange={(e) => setCourseBatch(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Batch</option>
                {batches.map((batch) => (
                  <option key={batch.id} value={batch.id}>{batch.name}</option>
                ))}
              </select>
            </div>

            <div className="flex gap-4 justify-center mt-6">
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
              >
                Add Course
              </button>
              <button
                type="button"
                onClick={closeCourseModal}
                className="bg-gray-400 text-white py-2 px-4 rounded-lg hover:bg-gray-500"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </Modal>

      {/* Other modals */}
      <Modal isOpen={isBatchModalOpen} onRequestClose={closeBatchModal}>
        <div className="modal-content p-6 rounded-lg  max-w-lg mx-auto">
         <AddBatch />
          {/* Add your batch form content here */}
          <button onClick={closeBatchModal} className="bg-gray-400 text-white py-2 px-4 rounded-lg mt-4 hover:bg-gray-500">Close</button>
        </div>
      </Modal>

      <Modal isOpen={isSectionModalOpen} onRequestClose={closeSectionModal}>
        <div className="modal-content  p-6 rounded-lg max-w-lg mx-auto">
          <AddSection />
           <button onClick={closeSectionModal} className="bg-gray-400 text-white py-2 px-4 rounded-lg mt-4 hover:bg-gray-500">Close</button>
        </div>
      </Modal>
    </div>
  );
}
