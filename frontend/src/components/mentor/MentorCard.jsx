import { Link } from "react-router-dom";

export default function MentorCard({ mentor }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition">
      <h2 className="text-lg font-semibold">{mentor.name}</h2>
      <p className="text-gray-600">{mentor.domain}</p>
      <p className="text-sm text-gray-500 mt-2">{mentor.experience}</p>
      <Link
        to={`/mentor/${mentor.id}`}
        className="inline-block mt-4 text-blue-600 font-medium"
      >
        View Profile →
      </Link>
    </div>
  );
}