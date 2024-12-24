import { VerificationProvider } from "./context/VerificationContext";
import { VerificationContextProvider } from "./context/verifyToken";
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
import ForgotPsswd from "./components/User/ForgotPsswd";
import Verify from "./components/User/Verify";
import ResetPsswd from "./components/User/ResetPsswd";
import GroupsHome from "./components/Groups/Home";
import AboutGroup from "./components/Groups/AboutGroup";
import GroupJoined from "./components/Groups/GroupJoined";
import AllGroups from "./components/Groups/AllGroups";
import AddGroup from "./components/Groups/AddGroup/AddGroup";
import EditGroup from "./components/Groups/EditGroup/EditGroup"
import AllGroupCategories from "./components/Groups/AllGroupCategories";
import AccountHome from "./components/AccountSettings/Home";
import TherapistDetails from "./components/AccountSettings/Therapist/TherapistDetails"
import Doctors from "./containers/Doctors";
import DoctorDetails from "./components/Doctors/DoctorDetails";
import BookingHome from "./components/BookTherapy/BookingHome"
import AdminHome from "./components/Admin/AdminHome";
import DoctorSignup from "./components/Doctors/Doctor Authentication/Signup";
import DoctorsLogin from "./components/Doctors/Doctor Authentication/Login";

// export const url = "http://localhost:3000";
export const url = "https://betterhelpclonebackend.onrender.com";
// 
function App() {
  return (
    <VerificationProvider>
      <VerificationContextProvider>
        <main className="w-full min-h-screen bg-slate-100 overflow-hidden">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/user/signin" element={<SignIn />} />
            <Route path="/user/AccountSettings" element={<AccountHome />} />
            <Route path="/user/AccountSettings/myTherapist" element={<TherapistDetails />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/groups" element={<GroupsHome />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/user/signup" element={<SignUp />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/adminsignup" element={<AdminSignup />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/createblog" element={<CreateBlog />} />
            <Route path="/admin/addGroup" element={<AddGroup />} />
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
            <Route path="/user/resetPsswd" element={<ForgotPsswd />} />
            <Route path="/user/verifyPsswd" element={<Verify />} />
            <Route path="/user/changePsswd" element={<ResetPsswd />} />
            <Route path="/groups/visit/:id" element={<AboutGroup />} />
            <Route path="/groups/join/:id" element={<GroupJoined />} />
            <Route path="/groups/allGroups" element={<AllGroups />} />
            <Route path="/groups/allGroupCategories" element={<AllGroupCategories />} />
            <Route path="/admin/editGroup/:id" element={<EditGroup />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/doctors/:id" element={<DoctorDetails />} />
            <Route path="/doctors/signup" element={<DoctorSignup />} />
            <Route path="/doctors/login" element={<DoctorsLogin />} />
            <Route path="/bookDoctor/:id" element={<BookingHome />} />
            <Route path="/admin" element={<AdminHome />}></Route>
          </Routes>
        </main>
      </VerificationContextProvider>
    </VerificationProvider>
  );
}

export default App;
