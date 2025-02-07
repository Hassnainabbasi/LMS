import Modal from "react-modal";  // Import the Modal component
import { useState } from "react";
import AddSection from "../admin/AdSection";
import CreateAssigment from "./CreateAssigment";

export default function AssignmentSend() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading , setLoading] = useState(false);
  
  const openModal = () => {
    console.log("Opening modal");
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    console.log("Closing modal");
    setIsModalOpen(false);
  };
  

  const handleSubmit = (e) =>{
    console.log("Form submitted",e);
  }

    return (
      <div className="flex h-screen">
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 bg-gradient-to-b from-blue-600 to-blue-400 w-64 p-6 flex flex-col transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}
        >
          <button
            className="md:hidden text-white text-2xl self-end mb-4"
            onClick={() => setSidebarOpen(false)}
          >
            ✖
          </button>
          <div className="text-white text-2xl font-bold mb-8">
            <div className="flex items-center">
              <img
                alt="Logo"
                className="mr-2"
                height={40}
                src="https://placehold.co/40x40"
                width={40}
              />
              <span className="text-blue-200">Tasker App</span>
            </div>
          </div>
          <nav className="text-white flex-1">
            <ul>
              {[
                { icon: "fas fa-tasks", label: "Tasks" },
                { icon: "fas fa-users", label: "Members" },
                { icon: "fas fa-folder", label: "File Management" },
                { icon: "fas fa-cog", label: "Settings" },
              ].map((item, index) => (
                <li key={index} className="mb-4">
                  <a className="flex items-center p-2 hover:bg-blue-500 rounded" href="#">
                    <i className={`${item.icon} mr-2`} /> {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        <div className="flex-1 p-6 overflow-auto">
          {/* Navbar */}
          <div className="flex justify-between items-center mb-6">
            <button className="md:hidden text-blue-600 text-2xl" onClick={() => setSidebarOpen(true)}>
              ☰
            </button>
            <h1 className="text-2xl font-bold">Tasks</h1>
            <button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
          onClick={openModal}
        >
        <i className="fas fa-plus mr-2" />Create Assigment
        </button>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
            <div className="flex items-center w-full md:w-auto">
              <input
                className="border border-gray-300 rounded-full px-4 py-2 flex-1 md:w-auto"
                placeholder="Search here"
                type="text"
              />
              <i className="fas fa-search text-gray-500 ml-2" />
            </div>
            <div className="flex items-center">
              <span className="mr-2">Sort by</span>
              <select className="border border-gray-300 rounded-full px-4 py-2">
                <option>My Tasks</option>
              </select>
              <div className="ml-4 flex items-center">
                <img
                  alt="User Avatar"
                  className="rounded-full mr-2"
                  height={40}
                  src="https://placehold.co/40x40"
                  width={40}
                />
                <span>Username</span>
              </div>
            </div>
          </div>
          <div>
        <h2 className="text-xl font-bold mb-4">My Tasks</h2>
        <div className="flex space-x-4 mb-6">
          <div className="bg-white p-4 rounded shadow flex-1">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">UI Elements Design</h3>
              <span className="text-gray-500">- John D.</span>
            </div>
            <div className="flex justify-between items-center">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                View
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded">
                onGoing
              </button>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow flex-1">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">Project Submission</h3>
              <span className="text-gray-500">- Shane Wals &amp; Rudy B.</span>
            </div>
            <div className="flex justify-between items-center">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                View
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded">
                onGoing
              </button>
            </div>
          </div>
        </div>
        <h2 className="text-xl font-bold mb-4">Pending Tasks</h2>
        <div className="flex space-x-4 mb-6">
          <div className="bg-white p-4 rounded shadow flex-1">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">Front End: Vue JS Part:1</h3>
              <span className="text-gray-500">- Max R.</span>
            </div>
            <div className="flex justify-between items-center">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                View
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                Start
              </button>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow flex-1">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">Front End: Form Validation</h3>
              <span className="text-gray-500">- Max R.</span>
            </div>
            <div className="flex justify-between items-center">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                View
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                Start
              </button>
            </div>
          </div>
        </div>
        <h2 className="text-xl font-bold mb-4">All tasks</h2>
        <div className="flex space-x-4 mb-6">
          <div className="bg-white p-4 rounded shadow flex-1">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">UI Elements Design</h3>
              <span className="text-gray-500">- Max R.</span>
            </div>
            <div className="flex justify-between items-center">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                View
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded">
                onGoing
              </button>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow flex-1">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">Laravel: Database Integration</h3>
              <span className="text-gray-500">- Max R.</span>
            </div>
            <div className="flex justify-between items-center">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                View
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                Start
              </button>
            </div>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="bg-white p-4 rounded shadow flex-1">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">BarCode Integration</h3>
              <span className="text-gray-500">- Shane Wals &amp; Rudy B.</span>
            </div>
            <div className="flex justify-between items-center">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                View
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                Start
              </button>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow flex-1">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">PDF Part (Error)</h3>
              <span className="text-gray-500">- Shane Wals &amp; Rudy B.</span>
            </div>
            <div className="flex justify-between items-center">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                View
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded">
                Error
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        <div className="modal-content rounded-lg max-w-lg mx-auto">
          <CreateAssigment />
           <button onClick={closeModal} className="bg-gray-400 text-white py-2 px-4 rounded-lg mt-4 hover:bg-gray-500">Close</button>
        </div>
      </Modal>
        </div>

      </div>
    );
  }