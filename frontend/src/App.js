import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import FindDoctor from "./pages/FindDoctor";
import ChatBot from "./pages/ChatBot";
import Auth from "./pages/Auth"; // Import Auth page
import Sidebar from "./components/Sidebar";
import { auth } from "./services/firebaseConfig"; // Ensure correct import
import { useAuthState } from "react-firebase-hooks/auth"; // Ensure it's installed
import Dashboard from "./pages/Dashboard"; // Import the dashboard
import "./App.css"; 

function ProtectedRoute({ children }) {
    const [user, loading] = useAuthState(auth); // Track authentication state

    if (loading) return <p>Loading...</p>; // Prevent undefined errors while loading

    return user ? children : <Navigate to="/auth" />;
}

function App() {
    const [user, loading] = useAuthState(auth);

    if (loading) return <p>Loading...</p>; // Prevent app from breaking before auth initializes

    return (
        <Router>
            <div style={{ display: "flex" }}>
                {user && <Sidebar />} {/* Show Sidebar only if user is logged in */}
                <div style={{ flexGrow: 1, padding: "20px" }}>
                    <Routes>
                        <Route path="/auth" element={<Auth />} />
                        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                        <Route path="/find-doctor" element={<ProtectedRoute><FindDoctor /></ProtectedRoute>} />
                        <Route path="/ChatBot" element={<ProtectedRoute><ChatBot /></ProtectedRoute>} />
                        <Route path="/Dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} /> {/* Added Dashboard Route */}
                    </Routes>
                    {user && (
                        <button className="logout-btn" onClick={() => auth.signOut()}>
                            Logout
                        </button>
                    )}
                </div>
            </div>
        </Router>
    );
}

export default App;
