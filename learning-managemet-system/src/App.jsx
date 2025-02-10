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
import Quiz from "./pages/admin/Quiz";
import StartQuiz from "./pages/admin/StartQuizLPage";
import AssignmentSend from "./pages/teacher/AssigmentSend";
import Auth from "./auth/Auth";
import AdStudent from "./pages/admin/AdStudent";

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/adcourse" element={<AddCourse />} />
        <Route path="/admin/adtrainer" element={<AddTrainer />} />
        <Route path="/admin/adsection" element={<AdSection />} />
        <Route path="/admin/adbatch" element={<AdBatch />} />
        <Route path="/admin/adstudent" element={<AdStudent />} />
        <Route path="/admin/quiz" element={<Quiz />} />
        <Route path="/admin/startquiz" element={<StartQuiz />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/teacher/assigment" element={<AssignmentSend />} />
        <Route path="/student" element={<Student />} />
      </Routes>
    </BrowserRouter>
  );
}
