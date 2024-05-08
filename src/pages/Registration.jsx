import React, { useState } from "react";
import { Button } from "../components/Button";
import { IoMdInformationCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const Registration = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      navigate("/success");
      setErrors({});
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="registration-container">
      <div className="heading">Registration Form</div>
      <div className="subHeading">Start your success Journey here!</div>
      <div className="form-container">
        <form>
          <div className="input-field">
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="error-message">
                <IoMdInformationCircle />
                {errors.name}
              </p>
            )}
          </div>
          <div className="input-field">
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="error-message">
                <IoMdInformationCircle />
                {errors.email}
              </p>
            )}
          </div>
          <Button label={"Submit"} onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
};
