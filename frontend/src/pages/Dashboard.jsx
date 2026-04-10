
import Navbar from "../components/common/Navbar";
import MentorCard from "../components/mentor/MentorCard";
import dummyMentors from "../data/dummyMentors";

const tasks = [
  { id: 1, title: "Complete React Portfolio Project", status: "Completed" },
  { id: 2, title: "Finish DSA Arrays Practice", status: "Pending" },
  { id: 3, title: "Attend AI Mentor Session", status: "Completed" },
];

export default function Dashboard() {
  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const progress = Math.round((completedTasks / tasks.length) * 100);

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-8 shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold">
            Welcome back, Preeti 👋
          </h1>
          <p className="mt-2 text-blue-100">
            Keep progressing in Web Development and AI with guided mentorship.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow rounded-2xl p-6">
            <h2 className="text-sm text-gray-500">Selected Interests</h2>
            <p className="text-2xl font-bold mt-2">2</p>
          </div>

          <div className="bg-white shadow rounded-2xl p-6">
            <h2 className="text-sm text-gray-500">Tasks Assigned</h2>
            <p className="text-2xl font-bold mt-2">{tasks.length}</p>
          </div>

          <div className="bg-white shadow rounded-2xl p-6">
            <h2 className="text-sm text-gray-500">Tasks Completed</h2>
            <p className="text-2xl font-bold mt-2">{completedTasks}</p>
          </div>

          <div className="bg-white shadow rounded-2xl p-6">
            <h2 className="text-sm text-gray-500">Mentor Sessions</h2>
            <p className="text-2xl font-bold mt-2">3</p>
          </div>
        </div>

        {/* Progress Tracker */}
        <div className="bg-white shadow rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">Learning Progress</h2>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-blue-600 h-4 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-3 text-gray-600">{progress}% roadmap completed</p>
        </div>

        {/* Upcoming Mentor Session */}
        <div className="bg-white shadow rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">
            Upcoming Mentor Session
          </h2>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-lg font-medium">Rahul Sharma</p>
              <p className="text-gray-600">Senior Web Developer Mentor</p>
              <p className="text-sm text-gray-500 mt-1">
                📅 12 April 2026 • ⏰ 6:00 PM
              </p>
            </div>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
              Join Session
            </button>
          </div>
        </div>

        {/* Assigned Tasks */}
        <div className="bg-white shadow rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">Assigned Tasks</h2>
          <div className="space-y-4">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="flex justify-between items-center border rounded-xl p-4"
              >
                <p>{task.title}</p>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    task.status === "Completed"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {task.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Suggested Mentors */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            Suggested Mentors
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dummyMentors.map((mentor) => (
              <MentorCard key={mentor.id} mentor={mentor} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}