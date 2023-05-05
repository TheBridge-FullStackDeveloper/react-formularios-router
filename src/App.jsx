import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import UserForm from "./components/UserForm/UserForm";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userForm" element={<UserForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
