import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./pages/admin/Admin";
import Teacher from "./pages/teacher/Teacher";
import Student from "./pages/student/Student";
import LandingPage from "./pages/landingpage/LandingPage";
import AddCourse from "./pages/admin/AddCourse";
import AddTrainer from "./pages/admin/AdTrainer";
import AdSection from "./pages/admin/AdSection";
import AdBatch from "./pages/admin/AdBatch";

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/adcourse" element={<AddCourse />} />
        <Route path="/admin/adtrainer" element={<AddTrainer />} />
        <Route path="/admin/adsection" element={<AdSection />} />
        <Route path="/admin/adbatch" element={<AdBatch />} />
        
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/student" element={<Student />} />
      </Routes>
    </BrowserRouter>
  );
}
