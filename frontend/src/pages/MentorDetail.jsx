import Navbar from "../components/common/Navbar";

export default function MentorDetail() {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="bg-white shadow rounded-2xl p-8">
          <h1 className="text-3xl font-bold">Rahul Sharma</h1>
          <p className="text-gray-600 mt-2">Senior Web Developer at Microsoft</p>
          <p className="mt-4">Skills: React, Node.js, System Design</p>
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl">
            Request Mentorship
          </button>
        </div>
      </div>
    </>
  );
}