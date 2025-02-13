import React, { useState, useEffect, useRef } from "react";
import nlp from "compromise";
import "./ChatBot.css";

const ChatBot = () => {
    const [messages, setMessages] = useState([
        { text: "Hello! 😊 How can I support your mental health today?", sender: "bot" },
    ]);
    const [input, setInput] = useState("");
    const chatEndRef = useRef(null);

    // Function to process user input using NLP
    const processMessage = (text) => {
        const doc = nlp(text.toLowerCase());

        // Mental Health Support
        if (doc.has("anxiety") || doc.has("anxious")) return "I'm sorry you're feeling this way. Deep breathing and mindfulness can help. You're not alone!";
        if (doc.has("panic attack")) return "Panic attacks can be scary, but they pass. Try grounding techniques: Focus on 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste.";
        if (doc.has("stress")) return "Stress is tough. Take deep breaths, practice meditation, and engage in activities that relax you.";
        if (doc.has("depression") || doc.has("depressed")) return "You're not alone. Reach out to someone you trust or a professional. Small steps each day can make a difference.";
        if (doc.has("lonely") || doc.has("isolation")) return "Feeling lonely is hard. Try connecting with friends, joining online communities, or engaging in a hobby you enjoy.";
        if (doc.has("anger") || doc.has("frustration")) return "Anger is natural, but try deep breathing or journaling your thoughts to process your feelings healthily.";
        if (doc.has("motivate me") || doc.has("inspire me")) return "You are capable of amazing things. Keep pushing forward, one step at a time! 💪";
        if (doc.has("why do I feel this way?")) return "Our emotions can be influenced by stress, environment, or past experiences. It's okay to feel this way, and talking about it can help.";
        if (doc.has("how to be happy?")) return "Happiness is different for everyone, but practicing gratitude, staying active, and connecting with loved ones can help.";

        // Sleep & Relaxation
        if (doc.has("sleep") || doc.has("insomnia")) return "Try maintaining a consistent sleep schedule, reducing screen time before bed, and practicing relaxation techniques.";
        if (doc.has("how to relax")) return "Relaxation techniques include deep breathing, meditation, listening to music, and engaging in activities that bring you joy.";
        if (doc.has("can't sleep") || doc.has("sleep problems")) return "Try dimming the lights, reading a book, or using white noise to relax your mind before bed.";
        if (doc.has("how many hours of sleep do I need?")) return "Most adults need 7-9 hours of sleep per night for optimal mental and physical health.";

        // Exercise & Well-being
        if (doc.has("exercise") || doc.has("workout")) return "Exercise can boost your mood and energy levels. Try yoga, jogging, or even a short walk!";
        if (doc.has("why is exercise important?")) return "Exercise releases endorphins, which improve mood, reduce stress, and enhance overall health.";
        if (doc.has("best time to exercise")) return "The best time to exercise is whenever you feel most energetic! Morning workouts boost metabolism, while evening workouts relieve stress.";
        if (doc.has("how to stay fit")) return "A balanced diet, regular exercise, and good sleep contribute to overall fitness.";

        // Fun & Lighthearted
        if (doc.has("tell me a joke")) return "Why did the scarecrow win an award? Because he was outstanding in his field! 😂";
        if (doc.has("another joke")) return "What do you call fake spaghetti? An impasta! 🍝";
        if (doc.has("fun fact")) return "Did you know? Laughing for 10-15 minutes burns about 40 calories!";
        if (doc.has("quote of the day")) return "“You are stronger than you think, and capable of more than you imagine.” 💪";
        if (doc.has("how are you?")) return "I'm just a chatbot, but I'm here to support you! How are you feeling today?";

        // Default response
        return "I'm here to support you. Can you tell me more about how you're feeling?";
    };

    // Function to handle user input
    const handleSendMessage = () => {
        if (input.trim() === "") return;

        const botResponse = processMessage(input);

        setMessages([...messages, { text: input, sender: "user" }, { text: botResponse, sender: "bot" }]);
        setInput("");

        // Scroll to bottom
        setTimeout(() => chatEndRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
    };

    return (
        <div className="chatbot-container">
            <h2>AI Chatbot</h2>
            <div className="chat-window">
                {messages.map((msg, index) => (
                    <p key={index} className={msg.sender === "user" ? "user-message" : "bot-message"}>
                        <strong>{msg.sender === "user" ? "You" : "Bot"}:</strong> {msg.text}
                    </p>
                ))}
                <div ref={chatEndRef} />
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="chat-input"
            />
            <button onClick={handleSendMessage} className="chat-send-btn">Send</button>
        </div>
    );
};

export default ChatBot;
