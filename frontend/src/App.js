import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FindDoctor from "./pages/FindDoctor";
import ChatBot from "./pages/ChatBot";  // Ensure case matches exactly
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flexGrow: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/find-doctor" element={<FindDoctor />} />
            <Route path="/chatbot" element={<ChatBot />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
