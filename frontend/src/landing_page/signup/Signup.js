import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


axios.defaults.withCredentials = true;

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/signup`,
        formData
      );

      toast.success("Signup successful Please login");

      setTimeout(() => {
        navigate("/login");
      }, 1200);

    } catch (error) {
      toast.error(
        error.response?.data?.message || "Signup failed "
      );
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-4">
          <h2 className="mb-4 text-center">Signup</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form-control mb-3"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control mb-3"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-control mb-3"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button type="submit" className="btn btn-primary w-100">
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;