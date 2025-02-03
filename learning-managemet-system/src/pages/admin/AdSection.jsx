import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../constant';
import Select from 'react-select';

const AddSection = () => {
  const [sectionNo, setsectionNo] = useState('');
  const [sectionTiming, setSectionTiming] = useState({ startTime: '', endTime: '' });
  const [courseId, setCourseId] = useState('');
  const [course, setCourse] = useState([]);
  const [trainer, setTrainer] = useState([]);
  const [batch, setBatch] = useState([]);
  const [trainerId, setTrainerId] = useState('');
  const [batchId, setBatchId] = useState('');
  const [status, setStatus] = useState('pending');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [selectedTrainerId, setSelectedTrainerId] = useState("");
  const [selectedTrainerName, setSelectedTrainerName] = useState("Select Trainer");
  const [selectedcourseName, setSelectedcourseName] = useState("Select Course");
  const [selectedcourseId, setSelectedcourseId] = useState("Select Course");
  const [selectedbatchName, setSelectedbatchName] = useState("Select Batch");
  const [selectedbatchId, setSelectedbatchId] = useState("Select Course");

  const handleStartTimeChange = (selectedOption) => {
    setSectionTiming((prev) => ({ ...prev, startTime: selectedOption.value }));
  };

  const handleEndTimeChange = (selectedOption) => {
    setSectionTiming((prev) => ({ ...prev, endTime: selectedOption.value }));
  };

  const timeOptions = [
    { value: '9:00 a.m.', label: '9:00 a.m.' },
    { value: '10:00 a.m.', label: '10:00 a.m.' },
    { value: '11:00 a.m.', label: '11:00 a.m.' },
    { value: '12:00 p.m.', label: '12:00 p.m.' },
    { value: '1:00 p.m.', label: '1:00 p.m.' },
    { value: '2:00 p.m.', label: '2:00 p.m.' },
    { value: '3:00 p.m.', label: '3:00 p.m.' },
    { value: '4:00 p.m.', label: '4:00 p.m.' },
    { value: '5:00 p.m.', label: '5:00 p.m.' },
    { value: '6:00 p.m.', label: '6:00 p.m.' },
    { value: '7:00 p.m.', label: '7:00 p.m.' },
    { value: '8:00 p.m.', label: '8:00 p.m.' },
    { value: '9:00 p.m.', label: '9:00 p.m.' },
    { value: '10:00 p.m.', label: '10:00 p.m.' },
    { value: '11:00 p.m.', label: '11:00 p.m.' },
    { value: '12:00 p.m.', label: '12:00 p.m.' },
    { value: '1:00 a.m.', label: '1:00 a.m.' },
    { value: '2:00 a.m.', label: '2:00 a.m.' },
    { value: '3:00 a.m.', label: '3:00 a.m.' },
    { value: '4:00 a.m.', label: '4:00 a.m.' },
    { value: '5:00 a.m.', label: '5:00 a.m.' },
    { value: '6:00 a.m.', label: '6:00 a.m.' },
    { value: '7:00 a.m.', label: '7:00 a.m.' },
    { value: '8:00 a.m.', label: '8:00 a.m.' },
   
];
  
  const handleBatchChange = (e) => {
    const batchId = e.target.value;
    setSelectedbatchId(batchId);

    const selectedbatch = batch.find((t) => t._id === batchId);
    if (selectedbatch) {
      setSelectedbatchName(selectedbatch.batchNo);
    }
  }

  const handleCourseChange = (e) => {
    const courseId = e.target.value;
    setSelectedcourseId(courseId);

    const selectedcourse = course.find((t) => t._id === courseId);
    if (selectedcourse) {
      setSelectedcourseName(selectedcourse.courseName);
    }
  }

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
    setLoading(true);
    const sectionData = {
      sectionNo,
      sectionTiming: `${sectionTiming.startTime} - ${sectionTiming.endTime}`,
      course: selectedcourseId,
      trainer: selectedTrainerId,
      batch: selectedbatchId,
      status,
    };

    console.log(sectionData)
    try {
      const response = await fetch(`${BASE_URL}/auth/section`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sectionData),
      });
      const data = await response.json();
      if (data.message === 'Section registered successfully') {
        setMessage('Section Added Successfully!');
        setsectionNo('');
        setSectionTiming({ startTime: '', endTime: '' });
        setSelectedcourseId('');
        setSelectedTrainerId('');
        setSelectedbatchId('');
        setStatus('pending');
      } else {
        setMessage('Error: ' + data.message);
      }
    } catch (error) {
      setMessage('Error: Server issue');
    } finally {
      setLoading(false);
    }
  };

  const getBatch = async () => {
    try {
      const response = await fetch(`${BASE_URL}/auth/batch`, {
        method: "GET",
      });
      const result = await response.json();
      if (response.ok) {
        setBatch(result.batch); // Assuming result contains the array of courses
        console.log(result.batch);

      } else {
        console.error("Failed to fetch courses");
      }
    } catch (error) {
      console.error("Error fetching course data:", error);
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

  const getTrainers = async () => {
     try {
       const response = await fetch(`${BASE_URL}/auth/trainer`, {
         method: "GET",
       });
       const result = await response.json();
       if (response.ok) {
         setTrainer(result.trainer);
         console.log(result.trainer);
       } else {
         console.error("Failed to fetch users");
       }
     } catch (error) {
       console.error("Error fetching user data:", error);
     }
   };
 
 
useEffect(() => {
      setSelectedcourseId(""); // Default value reset
  }, [course],[batch],[trainer]);

   useEffect(() => {
     getTrainers();
   }, []);

   useEffect(() => {
    getBatch();
  }, []);

   useEffect(() => {
    getCourse();
  }, []);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg mt-10 animate__animated animate__fadeIn">
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Add Section</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="sectionNo" className="block text-sm font-medium text-gray-600">Section No</label>
          <input
            type="text"
            id="sectionNo"
            value={sectionNo}
            onChange={(e) => setsectionNo(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>
       
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">Time</label>
          <div className="flex space-x-4">
            <Select
              id="start-time"
              options={timeOptions}
              onChange={handleStartTimeChange}
              value={timeOptions.find((option) => option.value === sectionTiming.startTime)}
              className="flex-1 text-base border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              placeholder="Start Time"
              required
            />
            <Select
              id="end-time"
              options={timeOptions}
              onChange={handleEndTimeChange}
              value={timeOptions.find((option) => option.value === sectionTiming.endTime)}
              className="flex-1 text-base border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              placeholder="End Time"
              required
            />
          </div>
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
          <label htmlFor="trainerId" className="block text-sm font-medium text-gray-600">Trainer</label>
          <select
                id="trainer"
                value={selectedTrainerId}
                onChange={handleTrainerChange}
                className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="" disabled>Select Trainer</option>
                {trainer.map((t) => (
                  <option key={t._id} value={t._id}>{t.trainerName}</option>
                ))}
              </select>
        </div>
        <div className="mb-4">
          <label htmlFor="batchId" className="block text-sm font-medium text-gray-600">Batch</label>
          <select
                id="batch"
                value={selectedbatchId}
                onChange={handleBatchChange}
                className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="" disabled>Select Batch</option>
                {batch.map((batches) => (
                  <option key={batches._id} value={batches._id}>{batches.batchNo}</option>
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
            <option value="merged">Merged</option>
            <option value="finished">Finished</option>
          </select>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 mt-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 disabled:bg-gray-400"
        >
          {loading ? 'Adding...' : 'Add Section'}
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

export default AddSection;
