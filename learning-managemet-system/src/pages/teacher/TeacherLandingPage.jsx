
import { useEffect, useState } from "react";

export default function TeacherLandingPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [teacherData , setTeacherData] = useState([])
  const getTeacherData = async () => {
    const token = localStorage.getItem("token");
  
    try {
      const response = await fetch("http://localhost:3000/tokenteacher/teacher-data", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });
  
      const result = await response.json();
      console.log(result);
      setTeacherData(result)
    } catch (error) {
      console.error("Error fetching teacher data:", error);
    }
  };
  
  useEffect(()=>{
    getTeacherData()
  },[])

  return (
   <div>
 {teacherData?.teacher &&(
      <div className="flex flex-col md:flex-row">
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
                className="mr-2 rounded-full"
                height={40}
                src={teacherData.teacher.teacherImage}
                width={40}
              />
              <span className="text-blue-200">{teacherData.teacher.teacherName}</span>
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
      {/* Mobile Menu Button */}
      <button className="md:hidden p-4" onClick={() => setSidebarOpen(true)}>
        ☰
      </button>

      {/* Main Content */}
      <div className="flex-1 p-6 mt-12 md:mt-0">
        <h1 className="text-2xl font-semibold">Welcome to Teacher Dashboard!</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold">Performance Indicator</h2>
            <img src="https://placehold.co/400x200" alt="Performance chart" className="mt-4" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold">Sessions By Channel</h2>
            <img src="https://placehold.co/200x200" alt="Sessions by channel chart" className="mt-4" />
          </div>
        </div>
    
<div className="bg-gradient-to-r from-orange-400 to-yellow-400 p-6 rounded-lg shadow mt-6">
<h2 className="text-lg font-semibold text-white">Quick Actions</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
  <button className="bg-white p-4 rounded-lg shadow flex items-center justify-center">
    <i className="fas fa-user-plus text-gray-500" />
    <span className="ml-2">Add Client</span>
  </button>
  <button className="bg-white p-4 rounded-lg shadow flex items-center justify-center">
    <i className="fas fa-file-alt text-gray-500" />
    <span className="ml-2">Create Quote</span>
  </button>
  <button className="bg-white p-4 rounded-lg shadow flex items-center justify-center">
    <i className="fas fa-credit-card text-gray-500" />
    <span className="ml-2">Enter Payment</span>
  </button>
  <button className="bg-white p-4 rounded-lg shadow flex items-center justify-center">
    <i className="fas fa-file-invoice text-gray-500" />
    <span className="ml-2">Create Invoice</span>
  </button>
</div>
</div>
        {/* Responsive Table */}
        <div className="bg-white p-6 rounded-lg shadow mt-6 overflow-x-auto">
          <table className="w-full min-w-max">
            <thead>
              <tr>
                <th className="py-2">Store ID</th>
                <th className="py-2">Amount</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="py-2">Katie Holmes</td>
                <td className="py-2">$3621</td>
                <td className="py-2 text-green-600">Paid</td>
              </tr>
              <tr className="border-t">
                <td className="py-2">Minnie Copeland</td>
                <td className="py-2">$6245</td>
                <td className="py-2 text-red-600">Pending</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    )}
   </div>
   
   
  );
}
