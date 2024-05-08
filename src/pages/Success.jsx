import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdCheckmarkCircle } from "react-icons/io";

export const Success = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer =
      countdown > 0
        ? setTimeout(() => {
            setCountdown(countdown - 1);
          }, 1000)
        : navigate("/");
    localStorage.removeItem("isRegistration");
    return () => clearTimeout(timer);
  }, [countdown, navigate]);

  return (
    <div className="success-container">
      <IoMdCheckmarkCircle />
      <div className="heading">Success Submitted</div>
      <div className="subHeading">Congratulations</div>
      <div className="content">
        Your request has been successfully submitted to us. We will validate
        your information and reach out to you shortly with updates.
      </div>
      <div className="redirect">
        Redirecting you to Homepage in <span>{countdown} Seconds</span>
      </div>
    </div>
  );
};
