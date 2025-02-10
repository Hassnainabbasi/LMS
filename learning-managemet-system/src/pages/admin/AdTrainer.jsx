import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

const AddTrainer = () => {
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-indigo-500 mb-6">Teacher</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="teacherName" className="block text-gray-700 font-semibold">
              Teacher Name
            </label>
            <input
              type="text"
              id="teacherName"
              value={teacherName}
              onChange={(e) => setTeacherName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="teacherEmail" className="block text-gray-700 font-semibold">
              Teacher Email
            </label>
            <input
              type="email"
              id="teacherEmail"
              value={teacherEmail}
              onChange={(e) => setTeacherEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
            
          <div>
            <label htmlFor="teacherName" className="block text-gray-700 font-semibold">
              Teacher Password
            </label>
            <input
              type="text"
              id="teacherName"
              value={teacherPassword}
              onChange={(e) => setTeacherPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="teacherPhone" className="block text-gray-700 font-semibold">
              Teacher Phone (optional)
            </label>
            <input
              type="text"
              id="teacherPhone"
              value={teacherPhone}
              onChange={(e) => setTeacherPhone(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="teacherBio" className="block text-gray-700 font-semibold">
              Teacher Bio
            </label>
            <textarea
              id="teacherBio"
              value={teacherBio}
              onChange={(e) => setTeacherBio(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="relative">
              <div {...getRootProps()} className="border-dashed border-2 border-gray-300 rounded-lg p-4 text-center">
                <input {...getInputProps()} />
                <p className="text-gray-500">Drag & drop an image, or click to select</p>
                {teacherImage && <p className="mt-2 text-sm">{teacherImage.name}</p>}
              </div>
            </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Add Teacher
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTrainer;