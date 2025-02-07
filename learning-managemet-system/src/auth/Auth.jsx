
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useNavigate } from "react-router-dom";

function AnimatedBackground() {
  const meshRef = useRef();
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.material.displacementScale = Math.sin(clock.elapsedTime) * 0.2;
    }
  });
  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
      <planeGeometry args={[10, 10, 100, 100]} />
      <meshStandardMaterial
        color={"blue"}
        wireframe
        displacementMap={new THREE.TextureLoader().load(
          "https://threejsfundamentals.org/threejs/resources/images/wall.jpg"
        )}
      />
    </mesh>
  );
}

export default function Auth() {
  const [activeComponent, setActiveComponent] = useState(null);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [teacherEmail, setTeacherEmail] = useState("");
  const [teacherData, setTeacherData] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentData, setStudentData] = useState("");

  const navigate = useNavigate();
  
  // let userData = {
  //   name: "Ali",
  //   email: "ali@example.com",
  //   role: "admin"
  // };
  
  // localStorage.setItem("token", JSON.stringify(userData));
  
  const handleAdminSubmit = async(e) => {
    e.preventDefault();
    console.log("Admin Data Submitted:", {
        email,
        password
    });
    try {
        const response = await fetch("http://localhost:3000/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            password
          }),
        });
        const result = await response.json();

        if (response.ok) {
          alert(`logged in successfully`);
          console.log(result)
          localStorage.setItem("token", result.data.token);
          navigate('/admin')
        } else {
          alert(`Error: ${result.message}`);
        }
        if(!localStorage.getItem("token")){
          navigate("/auth")
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong.");
      }
  };
  
  const handleTeacherSubmit = (e) => {
    e.preventDefault();
    console.log("Teacher Data Submitted:", 
       teacherData,
       teacherEmail 
    );
  };
  
  const handleStudentSubmit = (e) => {
    e.preventDefault();
    console.log("Student Data Submitted:", studentData,
        studentEmail
    );
  };
  

  const handleAdminChange = (e) => {
    setemail({ ...email, [e.target.name]: e.target.value });
    // console.log("Admin Data:", email);
  };

  const handleTeacherChange = (e) => {
    setTeacherData({ ...teacherData, [e.target.name]: e.target.value });
    console.log("Teacher Data:", teacherData);
  };

  const handleStudentChange = (e) => {
    setStudentData({ ...studentData, [e.target.name]: e.target.value });
    console.log("Student Data:", studentData);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/admin");
    }
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
      <Canvas className="absolute top-0 left-0 w-full h-full -z-10">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <spotLight position={[0, 5, 5]} angle={0.3} intensity={1} />
        <AnimatedBackground />
      </Canvas>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md p-6 bg-white rounded-lg shadow-lg mt-[-10vh]"
      >
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">
          Choose Account Type
        </h2>

    <div className="flex justify-around mb-6">
          {["Student", "Teacher", "Admin"].map((role) => (
            <motion.div
              key={role}
              whileHover={{ scale: 1.1 }}
              className={`text-center cursor-pointer p-3 rounded-lg border-2 ${
                activeComponent === role ? "border-blue-500" : "border-gray-300"
              }`}
              onClick={() => setActiveComponent(role)}
            >
              <img
                src={`${
                  role === "Student"
                    ? "https://cdn-icons-png.flaticon.com/512/4537/4537019.png"
                    : role === "Teacher"
                    ? "https://cbx-prod.b-cdn.net/COLOURBOX60891292.jpg?width=800&height=800&quality=70"
                    : "https://t4.ftcdn.net/jpg/04/75/00/99/360_F_475009987_zwsk4c77x3cTpcI3W1C1LU4pOSyPKaqi.jpg"
                }`}
                alt={`${role} icon`}
                className="w-20 h-20 mx-auto mb-2"
              />
              <p className="capitalize text-gray-700">{role}</p>
            </motion.div>
 ))}
        </div>
        {activeComponent && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <p className="text-center mb-4 text-gray-600">Enter your credentials as {activeComponent}</p>

            {activeComponent === "Student" && (
              <form handleStudentSubmit>
                <input
                  type="text"
                  name="cnic"
                  value={studentData}
              onChange={(e) => setStudentEmail(e.target.value)}
                  placeholder="CNIC (XXXXX-XXXXXXX-X)"
                  className="w-full px-4 py-2 border rounded-lg mb-4"
                />
                <input
                  type="password"
                  name="password"
                  value={studentEmail}
              onChange={(e) => setStudentData(e.target.value)}
                  placeholder="Password"
                  className="w-full px-4 py-2 border rounded-lg mb-4"
                />
                <button className="w-full py-2 mb-4 text-white bg-purple-500 rounded-lg hover:bg-purple-600">
                LOGIN
              </button>
              </form>
            )}

            {activeComponent === "Admin" && (
              <form onSubmit={handleAdminSubmit}>  
                <input
                  type="email"
                  name="email"
                  value={email}
              onChange={(e) => setemail(e.target.value)}
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded-lg mb-4"
                />
                <input
                  type="password"
                  name="password"
                  value={password}
              onChange={(e) => setpassword(e.target.value)}
                  placeholder="Password"
                  className="w-full px-4 py-2 border rounded-lg mb-4"
                />
              <button className="w-full py-2 mb-4 text-white bg-purple-500 rounded-lg hover:bg-purple-600">
                LOGIN
              </button>
              </form>
            )}

            {activeComponent === "Teacher" && (
              <form onSubmit={handleTeacherSubmit}>
                <input
                  type="email"
                  name="email"
                  value={teacherEmail}
              onChange={(e) => setTeacherEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded-lg mb-4"
                />
                <input
                  type="password"
                  name="password"
                  value={teacherData}
              onChange={(e) => setTeacherData(e.target.value)}
                  placeholder="Password"
                  className="w-full px-4 py-2 border rounded-lg mb-4"
                />
              <button className="w-full py-2 mb-4 text-white bg-purple-500 rounded-lg hover:bg-purple-600">
                LOGIN
              </button>
              <button onSubmit={handleToken}>Token</button>
              </form>
            )}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
