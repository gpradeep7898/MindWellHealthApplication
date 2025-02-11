import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={{ width: "250px", height: "100vh", background: "#f4f4f4", padding: "20px" }}>
      <h2>Menu</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/find-doctor">Find a Doctor</Link></li>
        <li><Link to="/chatbot">AI Chatbot</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
