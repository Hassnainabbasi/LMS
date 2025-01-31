{/* <div className="flex flex-1 w-full">
  <div
    className={`bg-black text-white w-64 min-h-screen fixed md:static z-50 transform ${
      isSidebarOpen ? "translate-x-0" : "-translate-x-full"
    } md:translate-x-0 transition-transform duration-300 ease-in-out`}
  >
    <nav className="mt-5">
      <div className=" p-5 text-2xl font-bold">Admin</div>

      <div className="flex flex-col">
        <button
          className="flex items-center text-lg font-semibold p-2  hover:text-black hover:bg-white  focus:bg-white focus:text-black rounded-md transition px-4 mb-4 duration-300"
          onClick={() => handleLinkClick("default")}
        >
          <Home className="mr-2"> </Home> Overview
        </button>
        <button
          onClick={() => handleLinkClick("departmentstaff")}
          className="flex items-center text-lg font-semibold focus:bg-white p-2 focus:text-black rounded-md hover:text-black hover:bg-white transition px-4 mb-4 duration-300"
        >
          <i className="fa fa-th-large mr-2" />
          Department Staff
        </button>
        <button
          className="flex items-center text-lg font-semibold focus:bg-white p-2 focus:text-black rounded-md hover:text-black hover:bg-white transition px-4 mb-4 duration-300"
          onClick={() => handleLinkClick("reception")}
        >
          <CalendarIcon className="mr-2" /> Receptions
        </button>

        <button
          className="flex items-center text-lg font-semibold focus:bg-white p-2 focus:text-black rounded-md hover:text-black hover:bg-white transition px-4 mb-4 duration-300"
          onClick={() => handleLinkClick("manageusers")}
        >
          <UserPlus className="mr-2" /> Manage Users
        </button>
        <button
          className="flex items-center text-lg font-semibold focus:bg-white p-2 focus:text-black rounded-md hover:text-black hover:bg-white transition px-4 mb-4 duration-300"
          onClick={() => handleLinkClick("report")}
        >
          <MdOutlineAnnouncement className="mr-2" /> Reports
        </button>
        <button
          className="flex items-center text-lg font-semibold focus:bg-white p-2 focus:text-black rounded-md hover:text-black hover:bg-white transition px-3 mb-4 duration-300"
          onClick={() => handleLinkClick("announcement")}
        >
          <Mic className="mr-2" />
          Announcement
        </button>
        <button
          className="flex items-center text-lg font-semibold focus:bg-white p-2 focus:text-black rounded-md hover:text-black hover:bg-white transition px-3 mb-4 duration-300"
          onClick={() => handleLinkClick("comments")}
        >
          <MessageCircleCode className="mr-2" />
          Comments
        </button>
      </div>
    </nav>
  </div>

  {activeComponent === "default" && (
    <div className="flex-1 p-6">
      <div className="flex items-center mb-6 w-full justify-between">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <button
          className="md:hidden flex justify-end p-4 text-white bg-blue-500 top-4  rounded-full shadow-lg"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <BsList size={24} />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <div className="flex items-center">
            <i className="fas fa-chart-bar text-4xl text-green-500"></i>
            <div className="ml-4">
              {ActiverUserDetail ? (
                <div className="text-2xl text-center font-bold">
                  {ActiverUserDetail.length > 0
                    ? ActiverUserDetail.length
                    : 0}
                </div>
              ) : (
                <div className="text-gray-500">Loading...</div>
              )}
              <p className="text-gray-500">Daily Visits</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <div className="flex items-center">
            <i className="fas fa-shopping-cart text-4xl text-blue-500"></i>
            <div className="ml-4">
              <p className="text-2xl font-semibold">52,160</p>
              <p className="text-gray-500">Sales</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <div className="flex items-center">
            <i className="fas fa-comments text-4xl text-red-500"></i>
            <div className="ml-4">
              <p className="text-2xl font-semibold">15,823</p>
              <p className="text-gray-500">Comments</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <div className="flex items-center">
            <i className="fas fa-users text-4xl text-yellow-500"></i>
            <div className="ml-4">
              <p className="text-2xl font-semibold">36,752</p>
              <p className="text-gray-500">No. of Visits</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <img
            alt="Bar chart showing data from 2006 to 2012 with varying values"
            src="https://cms.boardmix.com/images/articles/percentage-bar-graph-example-01.png"
          />
        </div>
        <div className="bg-white p-4 rounded shadow">
          <img
            alt="Donut chart showing in-store sales with a value of 30"
            src="https://cbx-prod.b-cdn.net/COLOURBOX53781029.jpg?width=800&height=800&quality=70"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 shadow rounded-lg">
          <div className="text-lg font-bold mb-4">Users Table</div>
          <div className="overflow-x-auto overflow-y-auto">
            <table className="min-w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 text-left text-gray-700">
                    Name
                  </th>
                  <th className="py-3 px-4 text-left text-gray-700">
                    CNIC
                  </th>
                  <th className="py-3 px-4 text-left text-gray-700">
                    Phone
                  </th>
                  <th className="py-3 px-4 text-left text-gray-700">
                    Address
                  </th>
                  <th className="py-3 px-4 text-left text-gray-700">
                    Purpose
                  </th>
                  <th className="py-3 px-4 text-left text-gray-700">
                    Token
                  </th>
                </tr>
              </thead>
              <tbody>
                {detail.length > 0 ? (
                  detail.map((user, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">{user.name}</td>
                      <td className="py-3 px-4">{user.cnic}</td>
                      <td className="py-3 px-4">{user.phone}</td>
                      <td className="py-3 px-4">{user.address}</td>
                      <td className="py-3 px-4">{user.purpose}</td>
                      <td className="py-3 px-4">{user.tokenNo}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="py-4 text-center">
                      No data found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold p-2 mb-4">Tasks Panel</h2>
          <ul>
            <li className="flex justify-between items-center mb-4 py-2 border-b">
              <div className="flex items-center">
                <i className="fas fa-comment text-gray-500 mr-2"></i>
                <span>Commented on a post</span>
              </div>
              <span className="text-gray-500 text-sm">7 minutes ago</span>
            </li>
            <li className="flex justify-between items-center mb-4 py-2 border-b">
              <div className="flex items-center">
                <i className="fas fa-truck text-gray-500 mr-2"></i>
                <span>Order 392 shipped</span>
              </div>
              <span className="text-gray-500 text-sm">16 minutes ago</span>
            </li>
            <li className="flex justify-between items-center mb-4 py-2 border-b">
              <div className="flex items-center">
                <i className="fas fa-file-invoice-dollar text-gray-500 mr-2"></i>
                <span>Invoice 653 has paid</span>
              </div>
              <span className="text-gray-500 text-sm">36 minutes ago</span>
            </li>
            <li className="flex justify-between items-center mb-4 py-2 border-b">
              <div className="flex items-center">
                <i className="fas fa-user-plus text-gray-500 mr-2"></i>
                <span>A new user has been added</span>
              </div>
              <span className="text-gray-500 text-sm">1 hour ago</span>
            </li>
            <li className="flex justify-between items-center mb-4 py-2 border-b">
              <div className="flex items-center">
                <i className="fas fa-user-plus text-gray-500 mr-2"></i>
                <span>A new user has added</span>
              </div>
              <span className="text-gray-500 text-sm">1.23 hour ago</span>
            </li>
            <li className="flex justify-between items-center py-2">
              <div className="flex items-center">
                <i className="fas fa-globe text-gray-500 mr-2"></i>
                <span>Saved the world</span>
              </div>
              <span className="text-gray-500 text-sm">yesterday</span>
            </li>
          </ul>
          <a className="text-blue-500 mt-4 inline-block" href="#">
            More Tasks
          </a>
        </div>
      </div>
      <footer className="mt-6 text-center text-gray-500">
        ©2015 Inventory Management System Inc. All rights reserved.
      </footer>
    </div>
  )}
  {activeComponent === "report" && (
    <div className="bg-gray-50 flex flex-1 items-center justify-center">
      <Reports />
    </div>
  )}
  {activeComponent === "announcement" && <Announcement />}
  {activeComponent === "comments" && <CommentSection />}
  {/* {activeComponent === "searchcutomer" && <SearchCustomer />} */}
// </div> */}


import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constant";
import {
  CalendarIcon,
  Home,
  MenuIcon,
  MessageCircleCode,
  Mic,
  UserIcon,
  UserPlus,
} from "lucide-react";
import { BsList, BsMenuUp } from "react-icons/bs";
import "font-awesome/css/font-awesome.min.css"; // Make sure Font Awesome is imported
import { Link } from "react-router-dom";
import { CalendarDateRangeIcon } from "@heroicons/react/16/solid";
import { MdOutlineAnnouncement } from "react-icons/md";
import CommentSection from "./CommentSection";
import Reports from "./Reports";
import Announcement from "./Announcement";

export default function AdminLandingPage() {
  const [activeComponent, setActiveComponent] = useState("default");
  const [detail, setDetail] = useState([]); // Filtered data for display
  const [originalDetail, setOriginalDetail] = useState([]); // Backup of original data
  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for mobile sidebar toggle
  const [ActiverUserDetail, setActiverUserDetail] = useState([]);
  const [userData, setUserdata] = useState([]);

  const fetchAllInfo = async () => {
    try {
      const response = await fetch(`${BASE_URL}/auth/onlineUsers`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      const result = await response.json();
      console.log(result);
      setActiverUserDetail(result);
      if (response.ok) {
        setUserdata(result.onlineUsers);
        console.log(result.onlineUsers);
      } else {
        setUserdata(null);
      }
    } catch (error) {
      console.error("Error fetching UserData info:", error);
    }
  };
  const handleLinkClick = (component) => {
    setActiveComponent(component);
  };

  const fetchBeneficiaryInfo = async () => {
    try {
      const response = await fetch(`${BASE_URL}/auth/register`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const result = await response.json();
      if (response.ok) {
        setOriginalDetail(result.users);
        setDetail(result.users);
      } else {
        console.error("Failed to fetch users");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

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

  useEffect(() => {
    fetchBeneficiaryInfo();
  }, []);

  useEffect(() => {
    fetchAllInfo();
  }, []);
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md flex flex-col justify-between">
        <div className="p-6">
          <img
            src="https://img.freepik.com/free-vector/flat-design-library-logo-template_23-2149326889.jpg"
            alt="Quyl logo"
            className="mb-6"
          />
          <nav>
            <ul>
              <li className="mb-4">
                <a
                  href="#"
                  className="flex items-center text-purple-600 font-semibold"
                >
                  <i className="fas fa-tachometer-alt mr-3" />
                  Dashboard
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="flex items-center text-gray-600">
                  <i className="fas fa-book mr-3" />
                  Courses
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="flex items-center text-gray-600">
                  <i className="fas fa-list mr-3" />
                  Chapter
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="flex items-center text-gray-600">
                  <i className="fas fa-cog mr-3" />
                  Add Course
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="flex items-center text-gray-600">
                  <i className="fas fa-cog mr-3" />
                  Add Trainer
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="flex items-center text-gray-600">
                  <i className="fas fa-cog mr-3" />
                  Add Announcment
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="flex items-center text-gray-600">
                  <i className="fas fa-cog mr-3" />
                  Settings
                </a>
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
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-lg px-4 py-2 mr-4"
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
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <span className="w-4 h-4 bg-red-500 rounded-full mr-2" />
              <p className="text-gray-600">Web Design - From Figma to Web</p>
            </div>
            <span className="text-gray-600">Active</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <span className="w-4 h-4 bg-yellow-500 rounded-full mr-2" />
              <p className="text-gray-600">Web Basics</p>
            </div>
            <span className="text-gray-600">Active</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <span className="w-4 h-4 bg-green-500 rounded-full mr-2" />
              <p className="text-gray-600">User can perform</p>
            </div>
            <span className="text-gray-600">Active</span>
          </div>
        </div>
        {/* Upcoming */}
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
      {/* Calendar */}
      <div className="w-80 bg-white p-6 rounded-lg shadow-md hidden lg:block">
        <h2 className="text-lg font-semibold mb-4">Status</h2>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-gray-600">Calendar</p>
          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Sun</span>
              <span className="text-gray-600">Mon</span>
              <span className="text-gray-600">Tue</span>
              <span className="text-gray-600">Wed</span>
              <span className="text-gray-600">Thu</span>
              <span className="text-gray-600">Fri</span>
              <span className="text-gray-600">Sat</span>
            </div>
            <div className="grid grid-cols-7 gap-2">
              <span className="text-gray-600">1</span>
              <span className="text-gray-600">2</span>
              <span className="text-gray-600">3</span>
              <span className="text-gray-600">4</span>
              <span className="text-gray-600">5</span>
              <span className="text-gray-600">6</span>
              <span className="text-gray-600">7</span>
              <span className="text-gray-600">8</span>
              <span className="text-gray-600">9</span>
              <span className="text-gray-600">10</span>
              <span className="text-gray-600">11</span>
              <span className="text-gray-600">12</span>
              <span className="text-gray-600">13</span>
              <span className="text-gray-600">14</span>
              <span className="text-gray-600">15</span>
              <span className="text-gray-600">16</span>
              <span className="text-gray-600">17</span>
              <span className="text-gray-600">18</span>
              <span className="text-gray-600">19</span>
              <span className="text-gray-600">20</span>
              <span className="text-gray-600">21</span>
              <span className="text-gray-600">22</span>
              <span className="text-gray-600">23</span>
              <span className="text-gray-600">24</span>
              <span className="text-gray-600">25</span>
              <span className="text-gray-600">26</span>
              <span className="text-gray-600">27</span>
              <span className="text-gray-600">28</span>
              <span className="text-gray-600">29</span>
              <span className="text-gray-600">30</span>
              <span className="text-gray-600">31</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
