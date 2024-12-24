import { useState } from "react";
import axios from "axios";
import { url } from "../../App";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/api/admin/login`, {
        email,
        password,
      });
      if (response.data.success) {
        localStorage.setItem("adminToken", response.data.token);
      }
      setSuccess("Admin loggedin successfully!");
      setError("");
    } catch (error) {
        localStorage.removeItem("token")
      setError(error.response.data.message || "Loggedin failed");
      setSuccess("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f5f7f5]">
      <div className="w-full max-w-2xl min-h-[50vh] p-8 space-y-6 bg-white rounded-lg shadow">
        <h2
          className={`text-5xl font-bold text-center font-overpass ${
            success || error ? "mb-0" : "mb-[2.3rem]"
          }`}
        >
          Admin Login
        </h2>
        {error && <p className="text-red-500 text-2xl">{error}</p>}
        {success && <p className="text-green-500 text-2xl">{success}</p>}
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label
              className="block mb-2 text-xl font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-6 border border-gray-300 rounded-lg text-xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              className="block mb-2 text-xl font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full p-6 border border-gray-300 rounded-lg text-xl"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-6 text-white bg-secondary rounded-lg hover:bg-primary text-xl mt-[3.6rem]"
          >
            Login
          </button>
          <h4 className="text-center text-xl font-semibold underline cursor-pointer">
            {" "}
            <Link to="/admin">Back To HomePage</Link>
          </h4>
          <h5 className={`text-center text-xl font-semibold underline cursor-pointer ${success?'block':'hidden'}`}>
            {" "}
            <Link to="/createblog">Create Blog</Link>
          </h5>
          <h5 className={`text-center text-xl font-semibold underline cursor-pointer ${success?'block':'hidden'}`}>
            {" "}
            <Link to="/admin/addGroup">Create Group</Link>
          </h5>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
