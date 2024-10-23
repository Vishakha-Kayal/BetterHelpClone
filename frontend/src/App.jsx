import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";
import SignupPage from "./containers/SignupPage";
import FaqPage from "./containers/FaqPage";
import BlogPage from "./containers/BlogPage";
import AdminSignup from "./components/Admin/AdminSIgnup";
import { Route, Routes } from "react-router-dom";
import AdminLogin from "./components/Admin/AdminLogin";
import CreateBlog from "./components/Blog/CreateBlog";
import BlogDesc from "./components/Blog/BlogDesc";
import MoreBlogs from "./components/Blog/MoreBlogs";
import ProgramPage from "./containers/ProgramPage";
import Home from "./components/Farmers/Home/Home";
import StudentHome from "./components/Students/Home/Home";
import Register from "./components/Farmers/Authentication/Register";
import StudentRegister from "./components/Students/Authentication/Register";
import StudentLogin from "./components/Students/Authentication/StudentLogin";
import FarmerLogin from "./components/Farmers/Authentication/FarmerLogin";
import SignUp from "./components/User/SignUp";
import SignIn from "./components/User/SignIn";
// export const url = "http://localhost:3000";
export const url = "https://betterhelpclonebackend.onrender.com";

function App() {
  console.log(localStorage.getItem("userType"))
  return (
    <>
      <main className="w-full min-h-screen bg-slate-100 overflow-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/signin" element={<SignIn />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/user/signup" element={<SignUp />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/adminsignup" element={<AdminSignup />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/createblog" element={<CreateBlog />} />
          <Route path="/blog/:title" element={<BlogDesc />} />
          <Route path="/allBlogs" element={<MoreBlogs />} />
          <Route path="/programs" element={<ProgramPage />} />
          <Route path="/programs/farmers" element={<Home />} />
          <Route path="/programs/students" element={<StudentHome />} />
          <Route path="/programs/farmers/signup" element={<Register />} />
          <Route
            path="/programs/students/signup"
            element={<StudentRegister />}
          />
          <Route path="/programs/students/signin" element={<StudentLogin />} />
          <Route path="/programs/farmers/signin" element={<FarmerLogin />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
