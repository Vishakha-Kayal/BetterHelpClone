import { useState } from "react";
import axios from "axios";
import { url } from "../../App";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${url}/api/admin/register`, {
        email,
        password,
      });
      setSuccess("Admin registered successfully!");
      setError("");
    } catch (error) {
      setError(error.response.data.message || "Registration failed");
      setSuccess("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f5f7f5]">
      <div className="w-full max-w-2xl h-[50vh] p-8 space-y-6 bg-white rounded-lg shadow">
      <h2
          className={`text-5xl font-bold text-center font-overpass ${
            success || error ? "mb-0" : "mb-[2.3rem]"
          }`}
        >
          Admin Register
        </h2>
        {error && <p className="text-red-500 text-2xl">{error}</p>}
        {success && <p className="text-green-500 text-2xl">{success}</p>}
        <form className="space-y-4" onSubmit={handleRegister}>
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
            Register
          </button>
        </form>
        <h4 className="text-center text-xl font-semibold underline cursor-pointer">
          {" "}
          <Link to="/">Back To HomePage</Link>
        </h4>
      </div>
    </div>
  );
};

export default Register;
