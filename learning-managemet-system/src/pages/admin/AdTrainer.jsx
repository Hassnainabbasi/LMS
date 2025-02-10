import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";


const AddTrainer = () => {
  
  const [allTeachers, setallTeachers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cnic, setCnic] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [teacherName, setTeacherName] = useState("");
  const [teacherEmail, setTeacherEmail] = useState("");
  const [teacherPhone, setTeacherPhone] = useState("");
  const [teacherBio, setTeacherBio] = useState("");
  const [teacherPassword, setTeacherPassword] = useState("");
  const [teacherImage, setTeacherImage] = useState(null);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    let uploadImgurl = '';
    if (teacherImage) {
      const data = new FormData();
      data.append("file", teacherImage);
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
  
    const newTeacher = {
      teacherName,
      teacherEmail,
      teacherPhone,
      teacherBio,
      teacherPassword,
      teacherImage : uploadImgurl
    };

    try {
      const response = await fetch("http://localhost:3000/auth/teachers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTeacher),
      });

      const result = await response.json();

      if (response.ok) {
        alert("teacher added successfully");
        setTeacherName("");
        setTeacherEmail("");
        setTeacherBio("");
        setTeacherPhone("");
        setTeacherPassword("");
        setTeacherImage(null);
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Error adding teacher:", error);
      alert("Error adding teacher.");
    }
  };

  const onDrop = (acceptedFiles) => {
    setTeacherImage(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

 const getTeachers = async() =>{
 try {
  const response = await fetch("http://localhost:3000/auth/teachers", {
    method: "GET",
  });
  const result = await response.json()
  if (response.ok) {
    console.log(result.teachers)
    setallTeachers(result.teachers )
  } else {
  }
 } catch (error) {
  console.log(error)
 }
 }

 useEffect(()=>{
 getTeachers()
 },[])

  return (
   
  //   <div className="container mx-auto p-4">
  //   <div className="flex justify-between items-center mb-4">
  //     <h1 className="text-2xl font-bold">All Teacher</h1>
  //     <div className="flex items-center space-x-2">
  //       {/* Import Button */}
  //       <button onClick={() => setShowModal(true)} className="bg-teal-500 text-white px-4 py-2 rounded">
  //         Add Student
  //       </button>
  //     </div>
  //   </div>

  //   {/* allteachers Table */}
  //   <div className="bg-white shadow-md rounded-lg overflow-hidden">
  //     <table className="min-w-full bg-white">
  //       <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
  //         <tr>
  //           <th className="py-3 px-6 text-left">#</th>
  //           <th className="py-3 px-6 text-left">Photo</th>
  //           <th className="py-3 px-6 text-left">Name</th>
  //           <th className="py-3 px-6 text-left">Email</th>
  //           <th className="py-3 px-6 text-left">Phone No</th>
  //           <th className="py-3 px-6 text-left">Subject</th>
  //         </tr>
  //       </thead>
  //       <tbody className="text-gray-600 text-sm font-light">
  //         {allTeachers.map((student, index) => (
  //           <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
  //             <td className="py-3 px-6 text-left">{index + 1}</td>
  //             <td className="py-3 px-6 text-left">
  //       <img src={student.teacherImage} alt="Teacher" className="w-12 h-12 rounded-full object-cover"/></td>
  //             <td className="py-3 px-6 text-left">{student.teacherName}</td>
  //             <td className="py-3 px-6 text-left">{student.teacherEmail}</td>
  //             <td className="py-3 px-6 text-left">{student.teacherPhone}</td>
  //             <td className="py-3 px-6 text-left">{student.teacherBio}</td>
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //   </div>


  // </div>
<div className="container mx-auto p-4">
  {/* Heading + Button Section */}
  <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-3 md:space-y-0">
    <motion.h1
      className="text-2xl md:text-2xl font-extrabold font-serif"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      Teachers
    </motion.h1>

    {/* Add Button */}
    <motion.button
      onClick={() => setShowModal(true)}
      className="bg-teal-500 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-teal-600 transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      + Add Teacher
    </motion.button>
  </div>

  {/* Teachers Table */}
  <motion.div
    className="bg-white shadow-lg rounded-lg overflow-hidden"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    <table className="min-w-full bg-white">
      <thead className="bg-gray-800 text-white uppercase text-sm">
        <tr>
          <th className="py-3 px-6 text-left">#</th>
          <th className="py-3 px-6 text-left">Photo</th>
          <th className="py-3 px-6 text-left">Name</th>
          <th className="py-3 px-6 text-left">Email</th>
          <th className="py-3 px-6 text-left hidden sm:table-cell">Phone No</th>
          <th className="py-3 px-6 text-left hidden md:table-cell">Subject</th>
        </tr>
      </thead>
      <tbody className="text-gray-700 text-sm font-light">
        {allTeachers.map((teacher, index) => (
          <motion.tr
            key={index}
            className="border-b border-gray-300 hover:bg-indigo-100 transition-all duration-200"
            whileHover={{ scale: 1.02 }}
          >
            <td className="py-3 px-6">{index + 1}</td>
            <td className="py-3 px-6">
              <img
                src={teacher.teacherImage}
                alt="Teacher"
                className="w-12 h-12 rounded-full object-cover shadow-md"
              />
            </td>
            <td className="py-3 px-6">{teacher.teacherName}</td>
            <td className="py-3 px-6">{teacher.teacherEmail}</td>
            <td className="py-3 px-6 hidden sm:table-cell">{teacher.teacherPhone}</td>
            <td className="py-3 px-6 hidden md:table-cell">{teacher.teacherBio}</td>
          </motion.tr>
        ))}
      </tbody>
    </table>
  </motion.div>
  
{showModal && (
  <AnimatePresence>
    <motion.div
      className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowModal(false)} // Close on outside click
    >
      <motion.div
        className="bg-white rounded-xl shadow-2xl p-5 w-full max-w-sm md:max-w-md relative"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onClick={(e) => e.stopPropagation()} // Stop outside click from closing modal
      >
        {/* Close Button */}
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 transition"
        >
          ✖
        </button>

        {/* Heading */}
        <h1 className="text-xl md:text-2xl font-bold text-center text-indigo-600 mb-4">Add Teacher</h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-gray-700 font-medium">Teacher Name</label>
            <input
              type="text"
              value={teacherName}
              onChange={(e) => setTeacherName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Teacher Email</label>
            <input
              type="email"
              value={teacherEmail}
              onChange={(e) => setTeacherEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Teacher Password</label>
            <input
              type="password"
              value={teacherPassword}
              onChange={(e) => setTeacherPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Teacher Phone (optional)</label>
            <input
              type="text"
              value={teacherPhone}
              onChange={(e) => setTeacherPhone(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Teacher Bio</label>
            <textarea
              value={teacherBio}
              onChange={(e) => setTeacherBio(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* File Upload */}
          <div {...getRootProps()} className="border-dashed border-2 border-gray-300 rounded-lg p-3 text-center">
            <input {...getInputProps()} />
            <p className="text-gray-500 text-sm">Drag & drop an image, or click to select</p>
            {teacherImage && <p className="mt-1 text-xs">{teacherImage.name}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
          >
            Add Teacher
          </button>
        </form>
      </motion.div>
    </motion.div>
  </AnimatePresence>
)}
</div>
  );
};

export default AddTrainer;
