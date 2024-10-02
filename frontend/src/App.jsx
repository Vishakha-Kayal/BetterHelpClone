import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";
import "./assets/images/teen_movement.png";
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <>
      <main className="w-full min-h-screen bg-slate-100 overflow-hidden">
       <Routes>
        <Route path="/" element={ <HomePage />}/>
        <Route path="/login" element={ <LoginPage />}/>
       </Routes>
      </main>
    </>
  );
}

export default App;
