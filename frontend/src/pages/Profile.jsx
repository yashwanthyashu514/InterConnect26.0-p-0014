// import Navbar from "../components/common/Navbar";

// export default function Profile() {
//   return (
//     <>
//       <Navbar />
//       <div className="max-w-4xl mx-auto px-6 py-10">
//         <div className="bg-white shadow rounded-2xl p-8">
//           <h1 className="text-3xl font-bold">Student Profile</h1>
//           <p className="mt-4">Name: Niharika</p>
//           <p>Email: student@example.com</p>
//           <p>Interests: Web Development, AI</p>
//         </div>
//       </div>
//     </>
//   );
// }


import Navbar from "../components/common/Navbar";

export default function Profile() {
  const student = {
    username: "Preeti",
    profilePic: "https://i.pravatar.cc/150?img=32",
    mentor: "Rahul Sharma",
    email: "preeti@gmail.com",
    phone: "987653xxxx",
    interests: ["Web Development", "AI"],
  };

  const maskedPhone = `${student.phone.slice(0, 6)}xxxx`;

  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="bg-white shadow-lg rounded-3xl p-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={student.profilePic}
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover border-4 border-blue-100"
            />

            <div>
              <h1 className="text-3xl font-bold">{student.username}</h1>
              <p className="text-gray-600 mt-1">
                Guided by {student.mentor}
              </p>
            </div>
          </div>

          {/* Details */}
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="bg-gray-50 rounded-2xl p-5">
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-lg font-medium mt-1">{student.email}</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-5">
              <p className="text-sm text-gray-500">Phone</p>
              <p className="text-lg font-medium mt-1">{maskedPhone}</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-5">
              <p className="text-sm text-gray-500">Assigned Mentor</p>
              <p className="text-lg font-medium mt-1">{student.mentor}</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-5">
              <p className="text-sm text-gray-500">Selected Interests</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {student.interests.map((interest, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action */}
          <div className="mt-8">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
}