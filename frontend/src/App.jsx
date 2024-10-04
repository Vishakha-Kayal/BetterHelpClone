import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";
import SignupPage from "./containers/SignupPage";
import FaqPage from "./containers/FaqPage";

import "./assets/images/teen_movement.png";
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <>
      <main className="w-full min-h-screen bg-slate-100 overflow-hidden">
       <Routes>
        <Route path="/" element={ <HomePage />}/>
        <Route path="/login" element={ <LoginPage />}/>
        <Route path="/faq" element={<FaqPage />}/>
        <Route path="/signup" element={<SignupPage />}/>
       </Routes>
      </main>
    </>
  );
}

export default App;
