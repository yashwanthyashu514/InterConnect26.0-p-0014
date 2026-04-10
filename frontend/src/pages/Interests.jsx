import Navbar from "../components/common/Navbar";

const interests = ["AI", "Web Dev", "Data Science", "Cybersecurity", "Cloud"];

export default function Interests() {
  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-6">Select Your Interests</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {interests.map((item) => (
            <button key={item} className="border rounded-xl p-4 hover:bg-blue-50">
              {item}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}