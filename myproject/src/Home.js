import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom';

const DisplayPage = () => {
  const [email, setEmail] = useState("");

  const handleLogout = async () => {
    try {
      if (!email) {
        toast.error("Please enter your email before logging out");
        return;
      }

      const punchoutTime = new Date().toLocaleTimeString("en-US", { hour12: false });

      // Make the POST request with updated punchout time
      await axios.post("http://localhost:4000/stuinsert", {
        email: email,
        punchout: punchoutTime,
      });

      alert("Logout successful!");
    } catch (error) {
      console.error("Error during logout:", error);
      toast.error("Error during logout");
    }
  };

  return (
    <>
      <div style={{ width: "500px", margin: "auto" }}>
        <h1>Display Page</h1>
        <div className="form-group">
          <label htmlFor="emailInput" style={{ color: "white" }}>Enter your email:</label>
          <input
            type="email"
            id="emailInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <NavLink to="/display">
          <button type="submit" className="btn btn-primary" onClick={handleLogout}>Logout</button>
        </NavLink>
      </div>
    </>
  );
};

export default DisplayPage;
