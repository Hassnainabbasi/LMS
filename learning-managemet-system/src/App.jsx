import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./pages/admin/Admin";
import Teacher from "./pages/teacher/Teacher";
import Student from "./pages/student/Student";
import LandingPage from "./pages/landingpage/LandingPage";
import AddCourse from "./pages/admin/AddCourse";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/adcourse" element={<AddCourse />} />

        <Route path="/teacher" element={<Teacher />} />
        <Route path="/student" element={<Student />} />
      </Routes>
    </BrowserRouter>
  );
}
