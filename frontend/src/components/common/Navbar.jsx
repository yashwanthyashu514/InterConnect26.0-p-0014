import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">CareerCluster</h1>
        <div className="space-x-4 text-sm md:text-base">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/mentors">Mentors</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/Create">Create</Link>
        </div>
      </div>
    </nav>
  );
}