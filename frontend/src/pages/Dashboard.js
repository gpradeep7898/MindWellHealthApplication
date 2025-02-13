import React, { useState, useEffect } from "react";
import { auth, db } from "../services/firebaseConfig"; // Ensure Firestore is set up
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Dashboard.css";

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [mood, setMood] = useState("");
    const [journal, setJournal] = useState("");
    const [entries, setEntries] = useState([]);

    // Fetch user's previous mood & journal entries
    useEffect(() => {
        if (user) {
            const fetchEntries = async () => {
                const q = query(collection(db, "entries"), where("userId", "==", user.uid));
                const querySnapshot = await getDocs(q);
                setEntries(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            };
            fetchEntries();
        }
    }, [user]);

    // Save mood & journal to Firestore
    const handleSaveEntry = async () => {
        if (!mood.trim() && !journal.trim()) return;
        try {
            await addDoc(collection(db, "entries"), {
                userId: user.uid,
                mood,
                journal,
                timestamp: new Date(),
            });
            setMood("");
            setJournal("");
            alert("Entry saved!");
        } catch (error) {
            console.error("Error saving entry:", error);
        }
    };

    return (
        <div className="dashboard-container">
            <h2>Welcome, {user?.displayName || "User"} 👋</h2>

            <div className="mood-section">
                <h3>How are you feeling today?</h3>
                <select value={mood} onChange={(e) => setMood(e.target.value)}>
                    <option value="">Select Mood</option>
                    <option value="Happy 😊">Happy 😊</option>
                    <option value="Okay 🙂">Okay 🙂</option>
                    <option value="Sad 😔">Sad 😔</option>
                    <option value="Stressed 😟">Stressed 😟</option>
                    <option value="Excited 🤩">Excited 🤩</option>
                </select>
            </div>

            <div className="journal-section">
                <h3>Write Your Thoughts</h3>
                <textarea
                    value={journal}
                    onChange={(e) => setJournal(e.target.value)}
                    placeholder="Write something..."
                ></textarea>
            </div>

            <button className="save-btn" onClick={handleSaveEntry}>Save Entry</button>

            <div className="entries-section">
                <h3>Recent Entries</h3>
                {entries.length > 0 ? (
                    <ul>
                        {entries.map((entry) => (
                            <li key={entry.id}>
                                <strong>{entry.mood}</strong> - {entry.journal}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No entries yet.</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
