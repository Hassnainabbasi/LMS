// export default function TeacherLandingPage(){
//     return(
//         <div className="flex flex-col md:flex-row">
//     {/* Sidebar */}
//     <div className="bg-gray-900 text-white w-full md:w-64 h-screen">
//       <div className="flex items-center justify-center mt-10">
//         <img
//           src="https://placehold.co/40x40"
//           alt="Logo"
//           className="h-10 w-10"
//         />
//         <span className="ml-2 text-xl font-bold">Stellar</span>
//       </div>
//       <div className="mt-10">
//         <div className="flex items-center px-4 py-2">
//           <img
//             src="https://placehold.co/40x40"
//             alt="User profile picture"
//             className="h-10 w-10 rounded-full"
//           />
//           <div className="ml-2">
//             <p className="text-sm font-semibold">Henry Klein</p>
//             <p className="text-xs text-gray-400">Administrator</p>
//           </div>
//         </div>
//         <nav className="mt-10">
//           <a
//             href="#"
//             className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 hover:text-white"
//           >
//             <i className="fas fa-tachometer-alt" />
//             <span className="ml-2">Dashboard</span>
//           </a>
//           <div className="mt-4">
//             <p className="px-4 py-2 text-xs text-gray-500">LAYOUTS</p>
//             <a
//               href="#"
//               className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 hover:text-white"
//             >
//               <i className="fas fa-columns" />
//               <span className="ml-2">Page Layouts</span>
//             </a>
//             <a
//               href="#"
//               className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 hover:text-white"
//             >
//               <i className="fas fa-bars" />
//               <span className="ml-2">Sidebar Layouts</span>
//             </a>
//           </div>

//         </nav>
//       </div>
//     </div>
//     {/* Main Content */}
//     <div className="flex-1 p-6">
//       <div className="flex justify-between items-center">
//         <h1 className="text-2xl font-semibold">Welcome stellar dashboard!</h1>
//         <div className="flex items-center space-x-4">
//           <i className="fas fa-search text-gray-500" />
//           <i className="fas fa-shopping-cart text-gray-500" />
//           <i className="fas fa-chart-line text-gray-500" />
//           <i className="fas fa-file-alt text-gray-500" />
//           <div className="flex items-center space-x-2">
//             <img
//               src="https://placehold.co/20x20"
//               alt="Flag"
//               className="h-5 w-5"
//             />
//             <span>English</span>
//           </div>
//           <img
//             src="https://placehold.co/40x40"
//             alt="User profile picture"
//             className="h-10 w-10 rounded-full"
//           />
//           <span>Henry Klein</span>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
//         <div className="bg-white p-6 rounded-lg shadow">
//           <h2 className="text-lg font-semibold">Performance Indicator</h2>
//           <div className="flex justify-between items-center mt-4">
//             <div className="flex items-center space-x-2">
//               <span className="bg-blue-400 h-2 w-2 rounded-full" />
//               <span>Complaints (2098)</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <span className="bg-purple-400 h-2 w-2 rounded-full" />
//               <span>Task Done (1123)</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <span className="bg-red-400 h-2 w-2 rounded-full" />
//               <span>Attends (876)</span>
//             </div>
//           </div>
//           <img
//             src="https://placehold.co/400x200"
//             alt="Performance chart"
//             className="mt-4"
//           />
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow">
//           <h2 className="text-lg font-semibold">Sessions By Channel</h2>
//           <img
//             src="https://placehold.co/200x200"
//             alt="Sessions by channel chart"
//             className="mt-4"
//           />
//         </div>
//       </div>
//       <div className="bg-gradient-to-r from-orange-400 to-yellow-400 p-6 rounded-lg shadow mt-6">
//         <h2 className="text-lg font-semibold text-white">Quick Actions</h2>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
//           <button className="bg-white p-4 rounded-lg shadow flex items-center justify-center">
//             <i className="fas fa-user-plus text-gray-500" />
//             <span className="ml-2">Add Client</span>
//           </button>
//           <button className="bg-white p-4 rounded-lg shadow flex items-center justify-center">
//             <i className="fas fa-file-alt text-gray-500" />
//             <span className="ml-2">Create Quote</span>
//           </button>
//           <button className="bg-white p-4 rounded-lg shadow flex items-center justify-center">
//             <i className="fas fa-credit-card text-gray-500" />
//             <span className="ml-2">Enter Payment</span>
//           </button>
//           <button className="bg-white p-4 rounded-lg shadow flex items-center justify-center">
//             <i className="fas fa-file-invoice text-gray-500" />
//             <span className="ml-2">Create Invoice</span>
//           </button>
//         </div>
//       </div>
//       <div className="bg-white p-6 rounded-lg shadow mt-6">
//         <div className="flex justify-between items-center">
//           <h2 className="text-lg font-semibold">Products Inventory</h2>
//           <a href="#" className="text-blue-500">
//             View all Products
//           </a>
//         </div>
//         <div className="mt-4">
//           <table className="min-w-full bg-white">
//             <thead>
//               <tr>
//                 <th className="py-2">Store ID</th>
//                 <th className="py-2">Amount</th>
//                 <th className="py-2">Gateway</th>
//                 <th className="py-2">Created at</th>
//                 <th className="py-2">Paid at</th>
//                 <th className="py-2">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="border-t">
//                 <td className="py-2 flex items-center">
//                   <img
//                     src="https://placehold.co/40x40"
//                     alt="User profile picture"
//                     className="h-10 w-10 rounded-full"
//                   />
//                   <span className="ml-2">Katie Holmes</span>
//                 </td>
//                 <td className="py-2">$3621</td>
//                 <td className="py-2">
//                   <img
//                     src="https://placehold.co/20x20"
//                     alt="Alipay logo"
//                     className="h-5 w-5"
//                   />
//                 </td>
//                 <td className="py-2">04 Jun 2019</td>
//                 <td className="py-2">18 Jul 2019</td>
//                 <td className="py-2">
//                   <span className="bg-green-200 text-green-800 py-1 px-3 rounded-full text-xs">
//                     Paid
//                   </span>
//                 </td>
//               </tr>
//               <tr className="border-t">
//                 <td className="py-2 flex items-center">
//                   <img
//                     src="https://placehold.co/40x40"
//                     alt="User profile picture"
//                     className="h-10 w-10 rounded-full"
//                   />
//                   <span className="ml-2">Minnie Copeland</span>
//                 </td>
//                 <td className="py-2">$6245</td>
//                 <td className="py-2">
//                   <img
//                     src="https://placehold.co/20x20"
//                     alt="Paypal logo"
//                     className="h-5 w-5"
//                   />
//                 </td>
//                 <td className="py-2">25 Sep 2019</td>
//                 <td className="py-2">07 Oct 2019</td>
//                 <td className="py-2">
//                   <span className="bg-red-200 text-red-800 py-1 px-3 rounded-full text-xs">
//                     Pending
//                   </span>
//                 </td>
//               </tr>
//               {/* Repeat for each product */}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   </div>
//     )
// }
import { useState } from "react";

export default function TeacherLandingPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row">
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
      {/* Mobile Menu Button */}
      <button className="md:hidden p-4" onClick={() => setSidebarOpen(true)}>
        ☰
      </button>

      {/* Main Content */}
      <div className="flex-1 p-6 mt-12 md:mt-0">
        <h1 className="text-2xl font-semibold">Welcome to Trainer Dashboard!</h1>
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
  );
}
