import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../constant';

const AddBatch = () => {
  const [batchNo, setBatchNo] = useState('');
  const [status, setStatus] = useState('pending');
  const [course, setCourse] = useState([]); // Array of courses
  const [courseId, setCourseId] = useState(''); // Selected course ID
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [selectedcourseName, setSelectedcourseName] = useState("");
  const [selectedcourseId, setSelectedcourseId] = useState("Select Course");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const batchData = {
      batchNo,
      status,
      course: selectedcourseId,
    };
    try {
      const response = await fetch(`${BASE_URL}/auth/batch`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(batchData),
      });
      const data = await response.json();
      if (data.message === 'Batch registered successfully') {
        setMessage('Batch Added Successfully!');
        setBatchNo('');
        setStatus('pending');
        selectedcourseId('')
      } else {
        setMessage('Error: ' + data.message);
      }
    } catch (error) {
      setMessage('Error: Server issue');
    } finally {
      setLoading(false);
    }
  };

  const getCourse = async () => {
    try {
      const response = await fetch(`${BASE_URL}/course`, {
        method: "GET",
      });
      const result = await response.json();
      if (response.ok) {
        setCourse(result.courses); // Assuming result contains the array of courses
        console.log(result.courses);

      } else {
        console.error("Failed to fetch courses");
      }
    } catch (error) {
      console.error("Error fetching course data:", error);
    }
  };

  const handleCourseChange = (e) => {
    const courseId = e.target.value;
    setSelectedcourseId(courseId);

    const selectedcourse = course.find((t) => t._id === courseId);
    if (selectedcourse) {
      setSelectedcourseName(selectedcourse.courseName);
    }
  }
  useEffect(() => {
    getCourse();
  }, []);

 
useEffect(() => {
  if (course.length > 0) {
    setSelectedcourseId(""); // Default value reset
  }
}, [course]);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg mt-10 animate__animated animate__fadeIn">
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Add Batch</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="batchNo" className="block text-sm font-medium text-gray-600">Batch Number</label>
          <input
            type="text"
            id="batchNo"
            value={batchNo}
            onChange={(e) => setBatchNo(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="courseId" className="block text-sm font-medium text-gray-600">Course</label>
          <select
            id="courseId"
            value={selectedcourseId}
            onChange={handleCourseChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            required
          >
            <option value="" disabled>Select Course</option>
            {Array.isArray(course) && course.map((courseItem) => (
  <option key={courseItem._id} value={courseItem._id}>
    {courseItem.courseName}
  </option>
))}

          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="status" className="block text-sm font-medium text-gray-600">Status</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          >
            <option value="pending">Pending</option>
            <option value="ongoing">Ongoing</option>
            <option value="end">End</option>
          </select>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 mt-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 disabled:bg-gray-400"
        >
          {loading ? 'Adding...' : 'Add Batch'}
        </button>
      </form>
      {message && (
        <div className="mt-4 text-center text-sm text-gray-700">
          {message}
        </div>
      )}
    </div>
  );
};

export default AddBatch;
