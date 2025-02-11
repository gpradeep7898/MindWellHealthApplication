import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FindDoctor from "./pages/FindDoctor";
import Chatbot from "./pages/Chatbot";
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
            <Route path="/chatbot" element={<Chatbot />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
