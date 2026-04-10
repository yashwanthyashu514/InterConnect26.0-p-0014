import Navbar from "../components/common/Navbar";
import MentorCard from "../components/mentor/MentorCard";
import dummyMentors from "../data/dummyMentors";

export default function Mentors() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-6">Explore Mentors</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyMentors.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </div>
      </div>
    </>
  );
}