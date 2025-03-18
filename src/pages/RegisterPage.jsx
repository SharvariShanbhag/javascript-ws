import React, { useState } from "react";
import formImage from "../assets/formImage.jpg";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleFormData(event) {
    event.preventDefault();
    const payload = { name, email, password };
    localStorage.setItem("user", JSON.stringify(payload));
    navigate("/login");
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img src={formImage} alt="fruit image" className="img-fluid" />
        </div>
        <div className="col">
          <form onSubmit={handleFormData}>
            <legend>Register Form</legend>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
            <Link to="/login">Already Registered? Login Here</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
