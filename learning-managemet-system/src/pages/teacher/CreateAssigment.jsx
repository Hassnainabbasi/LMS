import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDropzone } from 'react-dropzone'

export default function CreateAssignment() {
  const [assignmentName, setAssignmentName] = useState('')
  const [assignmentGroup, setAssignmentGroup] = useState('')
  const [description, setDescription] = useState('')
  const [responsible, setResponsible] = useState('')
  const [deadline, setDeadline] = useState('')
  const [files, setFiles] = useState([])
  const [sections, setSections] = useState([]);
  const [trainer, setTrainer] = useState([]);


    const getSection = async () => {
      try {
        const response = await fetch(`${BASE_URL}/auth/section`, {
          method: "GET",
        });
        const result = await response.json();
        if (response.ok) {
          setSections(result.section);
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

     useEffect(() => {
        getTrainers();
      }, []);
    
      useEffect(() => {
        getSection();
      },[]);

  const onDrop = (acceptedFiles) => {
    setFiles(acceptedFiles[0]);
  };
  
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
  })



  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
        assignmentName,
            assignmentGroup,
            description,
            responsible,
            deadline,
            files
    )
    let uploadImgurl = '';
    if (files) {
        const data = new FormData();
        data.append("file", files); // Directly append the file
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
      const response = await fetch("http://localhost:3000/trainerdata/assigment", {
        method: "POST", 
         headers: {
        "Content-Type": "application/json", 
      },
        body: JSON.stringify({
            assignmentName,
            assignmentGroup,
            description,
            responsible,
            deadline,
         files: uploadImgurl, // Only upload the first selected file
         }), 
      });
  
      const result = await response.json(); 
      if (response.ok) {
        console.log("Course Added:", result);
        setAssignmentName('')
        setAssignmentGroup('')
        setDescription('')
        setResponsible('')
        setDeadline('')
        setFiles('')
     
        } else {
        console.error("Failed to add course");
      }
  
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-center text-xl font-semibold mb-4">Add New Assignment</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="assignmentName" className="block text-gray-700">
            Assignment Name
          </label>
          <input
            type="text"
            id="assignmentName"
            className="w-full mt-1 p-2 border rounded"
            placeholder="Enter assignment name"
            value={assignmentName}
            onChange={(e) => setAssignmentName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="assignmentGroup" className="block text-gray-700">
            Sections
          </label>
          <div className="relative">
            <select
              id="assignmentGroup"
              className="w-full mt-1 p-2 border rounded appearance-none"
              value={assignmentGroup}
              onChange={(e) => setAssignmentGroup(e.target.value)}
            >
              <option>Group 1</option>
              <option>Group 2</option>
              <option>Group 3</option>
            </select>
            <i className="fas fa-chevron-down absolute right-3 top-3 text-gray-500" />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700">
            Description
          </label>
          <input
            type="text"
            id="description"
            className="w-full mt-1 p-2 border rounded"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="responsible" className="block text-gray-700">
            Responsible
          </label>
          <div className="flex items-center mt-1">
            <input
              type="text"
              id="responsible"
              className="w-full p-2 border rounded"
              placeholder="Enter name"
              value={responsible}
              onChange={(e) => setResponsible(e.target.value)}
            />
            <i className="fas fa-user ml-2 text-gray-500" />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="deadline" className="block text-gray-700">
            Deadline
          </label>
          <input
            type="date"
            id="deadline"
            className="w-full mt-1 p-2 border rounded"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="assignmentImage" className="block text-gray-700">
            Upload Assignment Image
          </label>
          <div className="relative">
              <div {...getRootProps()} className="border-dashed border-2 border-gray-300 rounded-lg p-4 text-center">
                <input {...getInputProps()} />
                <p className="text-gray-500">Drag & drop an image, or click to select</p>
                {files && <p className="mt-2 text-sm">{files?.name}</p>}
              </div>
            </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-teal-700 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
