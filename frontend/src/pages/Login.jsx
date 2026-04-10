import Navbar from "../components/common/Navbar";

export default function Login() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <form className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md space-y-4">
          <h2 className="text-2xl font-bold">Login</h2>
          <input className="w-full border p-3 rounded-lg" placeholder="Email" />
          <input className="w-full border p-3 rounded-lg" type="password" placeholder="Password" />
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg">Login</button>
        </form>
      </div>
    </>
  );
}