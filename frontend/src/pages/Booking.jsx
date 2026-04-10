import Navbar from "../components/common/Navbar";

export default function Booking() {
  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <form className="bg-white shadow rounded-2xl p-8 space-y-4">
          <h1 className="text-2xl font-bold">Book a Session</h1>
          <input className="w-full border p-3 rounded-lg" type="date" />
          <textarea className="w-full border p-3 rounded-lg" rows="4" placeholder="Your goals..." />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
            Send Request
          </button>
        </form>
      </div>
    </>
  );
}