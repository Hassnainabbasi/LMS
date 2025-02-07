
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
  const [ course , setCourse] = useState([])
  const [courseImage, setCourseImage] = useState(null);
  const [sections, setSections] = useState([]);
  const [batches, setBatches] = useState([]);
  const [selectedTrainerId, setSelectedTrainerId] = useState("");
  const [selectedTrainerName, setSelectedTrainerName] = useState("Select Trainer");
  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);
  const [isBatchModalOpen, setIsBatchModalOpen] = useState(false);
  const [isSectionModalOpen, setIsSectionModalOpen] = useState(false);
  const [selectedbatchName, setSelectedbatchName] = useState("Select Batch");
  const [selectedbatchId, setSelectedbatchId] = useState("Select Course");  
  const [selectedsectionName, setSelectedsectionName] = useState("Select Section");
  const [selectedsectionId, setSelectedsectionId] = useState("Select Section");  
  const [loading, setLoading] = useState(false);

   const getBatch = async () => {
     try {
       const response = await fetch(`${BASE_URL}/auth/batch`, {
         method: "GET",
       });
       const result = await response.json();
       if (response.ok) {
         setBatches(result.batch);
       } else {
         console.error("Failed to fetch courses");
       }
     } catch (error) {
       console.error("Error fetching course data:", error);
     }
   };

  const getSection = async () => {
    try {
      const response = await fetch(`${BASE_URL}/auth/section`, {
        method: "GET",
      });
      const result = await response.json();
      if (response.ok) {
        setSections(result.section);
        // console.log(result);
      } else {
        console.error("Failed to fetch courses");
      }
    } catch (error) {
      console.error("Error fetching course data:", error);
    }
  };

  const getTrainers = async () => {
    try {
      const response = await fetch(`${BASE_URL}/auth/trainer`, {
        method: "GET",
      });
      const result = await response.json();
      if (response.ok) {
        setTrainer(result.trainer);
        // console.log(result.trainer)
      } else {
        console.error("Failed to fetch users");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const getCourse = async () => {
    try {
      const response = await fetch(`${BASE_URL}/course`, {
        method: "GET"
      });
      const result = await response.json();
      if (response.ok) {
        setCourse(result.course);
        console.log(result.course,'ppppp')
      } else {
        console.error("Failed to fetch users");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  useEffect(() => {
    getTrainers();
  }, []);

  
  useEffect(() => {
    getSection();
  },[]);

  
  useEffect(() => {
    getBatch();
    }, []);

    useEffect(() => {
      getCourse();
      }, []);
  

  const handleTrainerChange = (e) => {
    const trainerId = e.target.value;
    setSelectedTrainerId(trainerId);

    const selectedTrainer = trainer.find((t) => t._id === trainerId);
    if (selectedTrainer) {
      setSelectedTrainerName(selectedTrainer.trainerName);
    }
  };
 
  const handlesectionChange = (e) => {
    const sectionId = e.target.value;
    setSelectedsectionId(sectionId);

    const selectedsection = sections.find((t) => t._id === sectionId);
    if (selectedsection) {
      setSelectedsectionName(selectedsection.sectionName);
    }
  };

  const handlebatchChange = (e) => {
    const batchId = e.target.value;
    setSelectedbatchId(batchId);

    const selectedbatch = batches.find((t) => t._id === batchId);
    if (selectedbatch) {
      setSelectedbatchName(selectedbatch.batchName);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let uploadImgurl = '';
    if (courseImage) {
      const data = new FormData();
      data.append("file", courseImage);
      data.append("upload_preset", "Lmsystem"); 
      data.append("cloud_name", "djmfadch8"); 
  
      const res = await fetch("https://api.cloudinary.com/v1_1/djmfadch8/image/upload", {
        method: "POST",
        body: data,
      });
  
      if (!res.ok) {
        const error = await res.json();
        console.error("Error uploading image:", error);
        return;
      }
  
      const uploadImgData = await res.json();
      uploadImgurl = uploadImgData.secure_url; 
      console.log("Image URL:", uploadImgurl);
    }
  
    try {
      const response = await fetch("http://localhost:3000/course", {
        method: "POST", 
         headers: {
        "Content-Type": "application/json", 
      },
        body: JSON.stringify({
          courseName,
          courseDescription,
          courseImage: uploadImgurl,
          trainer : selectedTrainerId,
          section : selectedsectionId,
          batch : selectedbatchId,
        }), 
      });
  
      const result = await response.json(); 
      if (response.ok) {
        console.log("Course Added:", result);
        setCourseName("");
        setCourseDescription("");
        setCourseImage(null);
        setSelectedTrainerId("");
        setSelectedTrainerName("Select Trainer");
        setSelectedbatchId('Select Batch')
        setSelectedsectionId('Select Section')
      } else {
        console.error("Failed to add course");
      }
  
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  const onDrop = (acceptedFiles) => {
    setCourseImage(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

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
      <div className="overflow-hidden w-full">
  <table className="min-w-full bg-white hidden sm:table">
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
     {course.map((courses)=>(
  <tr className="bg-gray-50">
  <td className="py-2 px-4 border-b">
    <img
      alt="Course image"
      className="w-16 h-10 mr-2"
      height={50}
      src={courses.courseImage}
      width={50}
    />
  </td>
  <td className="py-2 px-4 border-b">{courses.courseName}</td>
  <td className="py-2 px-4 border-b">{courses.batch.batchNo}</td>
  <td className="py-2 px-4 border-b">{courses.trainer.trainerName}</td>
  <td className="py-2 px-4 border-b">{courses.batch.startDate}</td>
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
     ))}
    
      {/* Additional rows here */}
    </tbody>
  </table>

  {/* Mobile view */}
  <div className="sm:hidden">
    <div className="space-y-4">
      {course.map((courses)=>(
        <div className="p-4 bg-white shadow-md rounded-lg">
        <div className="flex items-center space-x-4">
          <img
            alt="Course image"
            className="w-16 h-16"
            height={50}
            src={courses.courseImage}
            width={50}
          />
          <div>
            <p className="font-semibold text-gray-900">{courses.courseName}</p>
            <p className="text-gray-600">{courses.batch.batchNo}</p>
            <p className="text-gray-600">{courses.trainer.trainerName}</p>
            <p className="text-gray-600">{courses.batch.startDate}</p>
            <select className="border border-gray-300 rounded p-1 mt-2">
              <option>Pending</option>
              <option>Ongoing</option>
              <option>Complete</option>
            </select>
            <button className="text-red-500 mt-2">
              <i className="fas fa-trash"></i> Delete
            </button>
          </div>
        </div>
      </div>
      ))}
      {/* Additional cards here */}
    </div>
  </div>
</div>


      <Modal isOpen={isCourseModalOpen} onRequestClose={closeCourseModal}>
        <div className="modal-content bg-white p-6 rounded-lg shadow-xl w-full mx-auto">
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
                <option value="" disabled>Select Trainer</option>
                {trainer.map((t) => (
                  <option key={t._id} value={t._id}>{t.trainerName}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="courseSection" className="block text-sm font-medium">Section</label>
              <select
                id="courseSection"
                value={selectedsectionId}
                onChange={handlesectionChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Section</option>
                {sections.map((allsection) => (
                  <option key={allsection._id} value={allsection._id}>{allsection.sectionName}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="courseBatch" className="block text-sm font-medium">Batch</label>
              <select
                id="courseBatch"
                value={selectedbatchId}
                onChange={handlebatchChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Batch</option>
                {batches.map((batch) => (
                  <option key={batch._id} value={batch._id}>{batch.batchNo}</option>
                ))}
              </select>
            </div>

            <div className="flex gap-4 justify-center mt-6">
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                disabled={loading}
              >
                {loading ? <span>Loading...</span> : "Add Course"}
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

      <Modal isOpen={isBatchModalOpen} onRequestClose={closeBatchModal}>
        <div className="modal-content p-6 rounded-lg  w-full mx-auto">
         <AddBatch />

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
