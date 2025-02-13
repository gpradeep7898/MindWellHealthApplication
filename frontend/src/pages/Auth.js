import React, { useState } from "react";
import { auth } from "../services/firebaseConfig";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"; // Import Google Icon
import "./Auth.css";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSignUp, setIsSignUp] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleAuth = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            if (isSignUp) {
                await createUserWithEmailAndPassword(auth, email, password);
            } else {
                await signInWithEmailAndPassword(auth, email, password);
            }
            navigate("/"); // Redirect to home after login/signup
        } catch (err) {
            setError(err.message);
        }
    };

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            navigate("/"); // Redirect after Google sign-in
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>{isSignUp ? "Create an Account" : "Welcome Back!"}</h2>
                <form onSubmit={handleAuth}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {error && <p className="error">{error}</p>}
                    <button type="submit">
                        {isSignUp ? "Sign Up" : "Login"}
                    </button>
                </form>
                <p className="toggle-auth" onClick={() => setIsSignUp(!isSignUp)}>
                    {isSignUp ? "Already have an account? Login" : "Don't have an account? Sign up"}
                </p>
                <button className="google-btn" onClick={handleGoogleSignIn}>
                    <FcGoogle className="google-icon" /> Continue with Google
                </button>
            </div>
        </div>
    );
};

export default Auth;
