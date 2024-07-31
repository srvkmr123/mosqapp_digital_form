import "./App.css";
import Header from "./components/Header/Header";
import CustomForm from "./components/Form/CustomForm";
import SuccessPage from "./SuccessPage";
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const navigate = useNavigate()
  const [language, setLanguage] = useState('nl')
  useEffect(()=>{
  navigate('/mosque/65dc9e818c40d70018da5b1d/member/register')
  },[])

  return (
    <div className="App">
      <Header setLanguage={setLanguage} />
        <Routes>
          <Route path="/mosque/:mosqueId/member/register" element={<CustomForm language={language}/>} />
          {/* <Route path="/mosque/:mosqueId/member/register/success" element={<SuccessPage />} /> */}
        </Routes>
    </div>
  );
}

export default App;
