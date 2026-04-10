import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import Interests from "../pages/Interests";
import Mentors from "../pages/Mentors";
import MentorDetail from "../pages/MentorDetail";
import Booking from "../pages/Booking";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Create from "../pages/Create";
import CreateTask from "../pages/CreateTask";
import CreateGroup from "../pages/CreateGroup";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/mentor/:id" element={<MentorDetail />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}