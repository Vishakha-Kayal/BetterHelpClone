import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";
import SignupPage from "./containers/SignupPage";
import FaqPage from "./containers/FaqPage";
import BlogPage from "./containers/BlogPage";
import AdminSignup from "./components/Admin/AdminSIgnup";
import "./assets/images/teen_movement.png";
import { Route, Routes } from "react-router-dom";
import AdminLogin from "./components/Admin/AdminLogin";
import CreateBlog from "./components/Blog/CreateBlog";
import BlogDesc from "./components/Blog/BlogDesc";
export const url = "http://localhost:3000";

function App() {
  return (
    <>
      <main className="w-full min-h-screen bg-slate-100 overflow-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/adminsignup" element={<AdminSignup />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/createblog" element={<CreateBlog />} />
          <Route path="/blog/:title" element={<BlogDesc />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
