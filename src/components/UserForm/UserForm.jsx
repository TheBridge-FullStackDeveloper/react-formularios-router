import React, { useState } from "react";
import "./UserForm.css";
import { useNavigate } from "react-router-dom";
const UserForm = () => {
  const initialValue = {
    name: "",
    email: "",
  };
  const [data, setData] = useState(initialValue);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const navigate = useNavigate()
  const handleInputChange = (event) => {
    if (data.name.length + 1 < 3) {
      setMessage("Name must be at least 3 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Bienvenid@ " + data.name);
    setData(initialValue);
    navigate("/")
  };
  return (
    <div className="flex-container">
      <div className="form-container">
        <h1>UserForm</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="name"
            onChange={handleInputChange}
            name="name"
            value={data.name}
          />
          <input
            type="email"
            placeholder="email"
            onChange={handleInputChange}
            name="email"
            value={data.email}
          />
          <button type="submit" disabled={btnDisabled}>
            Enviar
          </button>
        </form>
        <span className="alertinchi"> {message}</span>
      </div>
    </div>
  );
};

export default UserForm;
