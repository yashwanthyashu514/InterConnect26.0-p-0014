import Navbar from "../components/common/Navbar";
import { Link } from "react-router-dom";
import homeImage from "../assets/images/homeImage.png";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen flex items-center bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Bridging the Industry Mentorship Gap
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Connect students with the right mentors based on interests and career goals.
            </p>
            <Link
              to="/signup"
              className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl"
            >
              Get Started
            </Link>
          </div>
          <div className="h-80 rounded-3xl overflow-hidden">
            <img 
            src={homeImage}
            alt="Career banner"
            className="w-full h-full object-cover"
            />
        </div>
        </div>
      </section>
    </>
  );
}