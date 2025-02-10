
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import * as XLSX from "xlsx";

export default function AdStudent() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cnic, setCnic] = useState("");
  const [phone, setPhone] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [city, setCity] = useState("");
  const [status, setStatus] = useState("Pending");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/students/students", {
        method: "POST",
        body: JSON.stringify({ id,
            name,
            rollno,
            phoneno,
            email,
            status,
            created }),
      });
      const result = await response.json();
      if (response.ok) {
        alert("Student Added Successfully");
        navigate("/students");
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
      setShowModal(false);
    }
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(students);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Students");
    XLSX.writeFile(workbook, "students_data.xlsx");
  };

  const importFromExcel = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsBinaryString(file);

    reader.onload = (e) => {
      const binaryStr = e.target.result;
      const workbook = XLSX.read(binaryStr, { type: "binary" });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      let data = XLSX.utils.sheet_to_json(worksheet);

      data = data.map((row) => ({
        id: row["Roll Number"] || "N/A",
        name: row["Name"] || "N/A",
        rollno: row["CNIC"] || "N/A",
        phoneno: row["Phone Number"] || "N/A",
        email: row["Email"] || "N/A",
        status: row["Status"] || "N/A",
        created: row["Course Name"] || "N/A",
        lastLogin: "N/A",
      }));

      setStudents([...data, ...students]);
    };
  };

  const getStudents = async() =>{
    try {
        const response = await fetch("http://localhost:3000/students/import-students", {
          method: "GET",
        });
        const result = await response.json()
        if (response.ok) {
          console.log(result.students)
          setStudents(result.students)
        } else {
        }
      } catch (error) {
        console.error("Error:", error);
      }  
  }

  const saveToDatabase = async () => {
    if (students.length === 0) {
      alert("No students data to save.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/students/import-students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(students),
      });

      if (response.ok) {
        alert("Students imported successfully!");
      } else {
        alert("Failed to import students.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error.");
    }
  };

 useEffect(()=>{
    getStudents()
 },[])

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Students</h1>
        <div className="flex items-center space-x-2">
          {/* Import Button */}
          <input type="file" accept=".xlsx, .xls" onChange={importFromExcel} className="hidden" id="uploadExcel"/>
          <label htmlFor="uploadExcel" className="bg-purple-500 text-white px-4 py-2 rounded cursor-pointer">
            Import Excel
          </label>

          {/* Export Button */}
          <button onClick={exportToExcel} className="bg-blue-500 text-white px-4 py-2 rounded">
            Export to Excel
          </button>
          <button onClick={() => setShowModal(true)} className="bg-teal-500 text-white px-4 py-2 rounded">
            Add Student
          </button>
          <button onClick={saveToDatabase} className="bg-green-500 text-white px-4 py-2 rounded">
            Save to DB
          </button>
        </div>
      </div>

      {/* Students Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <tr>
              <th className="py-3 px-6 text-left">#</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">rollno</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Phone No</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Created</th>
              <th className="py-3 px-6 text-left">Last Login</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {students.map((student, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">{index + 1}</td>
                <td className="py-3 px-6 text-left">{student.name}</td>
                <td className="py-3 px-6 text-left">{student.rollno}</td>
                <td className="py-3 px-6 text-left">{student.email}</td>
                <td className="py-3 px-6 text-left">{student.phoneno}</td>
                <td className="py-3 px-6 text-left">{student.status}</td>
                <td className="py-3 px-6 text-left">{student.created}</td>
                <td className="py-3 px-6 text-left">{student.lastLogin}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
          >
            <h2 className="text-2xl font-semibold text-center mb-4">Add Student</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Student Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border rounded mb-3"
                required
              />
              <input
                type="email"
                placeholder="Student Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded mb-3"
                required
              />
              <input
                type="text"
                placeholder="CNIC (XXXXX-XXXXXXX-X)"
                value={cnic}
                onChange={(e) => setCnic(e.target.value)}
                className="w-full p-2 border rounded mb-3"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-500 text-white py-2 rounded-lg"
                disabled={loading}
              >
                {loading ? "Adding..." : "Add Student"}
              </motion.button>
            </form>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg"
            >
              Cancel
            </button>
          </motion.div>
        </div>
      )} */}
            {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
          >
            <h2 className="text-2xl font-semibold text-center mb-4">Add Student</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Roll Number" value={rollNo} onChange={(e) => setRollNo(e.target.value)} className="w-full p-2 border rounded mb-3" required />
              <input type="text" placeholder="Student Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border rounded mb-3" required />
              <input type="email" placeholder="Student Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded mb-3" required />
              <input type="text" placeholder="CNIC (XXXXX-XXXXXXX-X)" value={cnic} onChange={(e) => setCnic(e.target.value)} className="w-full p-2 border rounded mb-3" required />
              <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full p-2 border rounded mb-3" required />
              <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} className="w-full p-2 border rounded mb-3" required />
              <select value={status} onChange={(e) => setStatus(e.target.value)} className="w-full p-2 border rounded mb-3">
                <option value="Enroll">Enroll</option>
                <option value="Pending">Pending</option>
              </select>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full bg-blue-500 text-white py-2 rounded-lg" disabled={loading}>
                {loading ? "Adding..." : "Add Student"}
              </motion.button>
            </form>
            <button onClick={() => setShowModal(false)} className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg">
              Cancel
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
