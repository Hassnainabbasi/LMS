import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constant";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css"; // Make sure Font Awesome is imported
import { SiCoursera } from "react-icons/si";
import { FileIcon, Folder, Italic } from "lucide-react";
import { PiPlusFill } from "react-icons/pi";

export default function AdminLandingPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // For mobile sidebar toggle
  const [courses, setCourses] = useState([
   
  ]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [activeComponent, setActiveComponent] = useState("default");
  const [detail, setDetail] = useState([]);
  const [originalDetail, setOriginalDetail] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [userData, setUserData] = useState([]);

  const fetchBeneficiaryInfo = async () => {
    try {
      const response = await fetch(`${BASE_URL}/course`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const result = await response.json();
      if (response.ok) {
        setOriginalDetail(result);
        setDetail(result);
        setCourses(result.course)
        console.log('ok',result.course)
      } else {
        console.error("Failed to fetch users");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchBeneficiaryInfo();
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      setDetail(originalDetail);
    } else {
      const filteredData = originalDetail.filter(
        (user) =>
          user.cnic.includes(searchTerm) || user.phone.includes(searchTerm)
      );
      setDetail(filteredData);
    }
  }, [searchTerm, originalDetail]);

  return (
    <div className="flex h-screen">
      <div
        className={`w-64 bg-white shadow-md flex flex-col justify-between transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "block" : "hidden"
        } lg:block`}
      >
        <div className="p-6">
          <img
            src="https://img.freepik.com/free-vector/flat-design-library-logo-template_23-2149326889.jpg"
            alt="Quyl logo"
            className="mb-6"
          />
          <nav>
            <ul>
              <li className="mb-5">
                <a
                  href="#"
                  className="flex items-center text-purple-600 font-semibold"
                >
                  <i className="fas fa-tachometer-alt mr-3" />
                  Dashboard
                </a>
              </li>
              <li className="mb-5">
                <Link to={'/admin/adcourse'} className="flex items-center text-gray-600">
                  <i className="fas fa-book mr-3" />
                  Courses
                </Link>
              </li>
              <li className="mb-5">
                <a href="#" className="flex items-center text-gray-600">
                  <i className="fas fa-list mr-3" />
                  Chapter
                </a>
              </li>
              <li className="mb-4">
                <Link to={'/admin/adtrainer'} className="flex items-center text-gray-600">
                  <i className="fas fa-chalkboard-teacher mr-3" />
                  Trainer
                </Link>
              </li>
              <li className="mb-4">
                <Link to={'/admin/adsection'} className="flex items-center text-gray-600">
                <i className="fa fa-th mr-3" /> Section
                </Link>
              </li>
              <li className="mb-4">
                <Link to={'/admin/adbatch'} className="flex items-center text-gray-600">
                  <i className="fa fa-cogs mr-3" />
                  Batch
                </Link>
              </li>
              <li className="mb-4">
                <a href="#" className="flex items-center text-gray-600">
                  <i className="fas fa-user mr-3" />
                  Students
                </a>
              </li>
              <li className="mb-4">
                <Link to={'/admin/startquiz'} className="flex items-center text-gray-600">
                  <i className="fa fa-graduation-cap mr-2" />
                  Exam
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="p-6">
          <a href="#" className="flex items-center text-gray-600">
            <i className="fas fa-sign-out-alt mr-3" />
            Logout
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <div className="flex items-center">
            <button className="lg:hidden text-gray-600" onClick={toggleSidebar}>
              <i className="fas fa-bars" />
            </button>
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-lg px-4 py-2 mr-4 w-40 md:w-60"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <i className="fas fa-bell text-gray-600 mr-4" />
            <img
              src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
              alt="User avatar"
              className="rounded-full w-10 h-10"
            />
          </div>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">42</h2>
            <p className="text-gray-600">Lessons</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">08</h2>
            <p className="text-gray-600">Assignments</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">03</h2>
            <p className="text-gray-600">Exams</p>
          </div>
        </div>

        {/* My Courses */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-lg font-semibold mb-4">My Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="p-2 border rounded-lg shadow-lg">
              <img src={course.courseImage} alt={course.name} className="w-full h-40 rounded" />
              <h2 className="text-xl font-semibold mt-2">{course.courseName}</h2>
              <p className="text-gray-600">{course.courseDescription}</p>
            </div>
            ))}
          </div>
        </div>

        {/* Upcoming Exams */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Upcoming</h2>
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-600">Practical Exam 1</p>
            <span className="text-gray-600">12/12/2023</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-600">Practical Exam 2</p>
            <span className="text-gray-600">15/12/2023</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-600">Practical Exam 3</p>
            <span className="text-gray-600">18/12/2023</span>
          </div>
        </div>
      </div>
    </div>
  );
}
