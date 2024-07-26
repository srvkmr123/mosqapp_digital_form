import "./App.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import CustomForm from "./components/Form/CustomForm";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate()
  useEffect(()=>{
  navigate('/mosque/65dc9e818c40d70018da5b1d/member/register')
  },[])

  return (
    <div className="App">
      <Header />
      {/* <Form/> */}
      {/* <CustomForm/> */}
     =
        <Routes>
          <Route path="/mosque/:mosqueId/member/register" element={<CustomForm/>} />
        </Routes>
    </div>
  );
}

export default App;
