# 🧠 Mindwell Health Application
### A comprehensive platform for mental well-being, AI chatbot support, and doctor consultations.

---

## 📌 Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 📖 Introduction
Mental Health Application is a **full-featured** mental well-being platform that offers:
✔ AI-powered **mental health chatbot**  
✔ **Find & book appointments** with mental health professionals  
✔ **Mood & journal tracking**  
✔ Secure **user authentication & profile management**  
✔ **Community support** through shared experiences  

Our mission is to provide **accessible, supportive, and interactive mental health resources** for users seeking self-care and professional help.

---

## 🚀 Features
✔ **AI Chatbot** – Intelligent chatbot for mental health support  
✔ **Find a Doctor** – Locate & book nearby specialists  
✔ **Mood & Journal Tracking** – Monitor emotional well-being  
✔ **Secure Authentication** – User login with Firebase  
✔ **Personal Dashboard** – Track wellness progress  
✔ **Community Engagement** – Share experiences & interact  

---

## 🛠 Tech Stack
| **Technology**   | **Usage** |
|------------------|----------|
| **React.js**     | Frontend UI |
| **Firebase**     | Authentication & Firestore database |
| **React Router** | Client-side navigation |
| **Compromise.js** | NLP-based chatbot |
| **Google Places API** | Finding nearby doctors |
| **Bootstrap / Tailwind** | Styling & responsiveness |

---

## 📥 Installation
### 1️⃣ Clone the repository  
```sh
git clone https://github.com/gpradeep7898/MentalHealthApplication.git
cd MentalHealthApplication 
```
2️⃣ Install dependencies
```sh
npm install
```
3️⃣ Start the application
```sh
npm start
```
🔑 Environment Variables

Before running the project, create a .env.local file inside the frontend/ folder.

Example: .env.local
```sh
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
````
💻 Usage

1️⃣ User Authentication
Users can register/login securely with Firebase.
User details are stored in Firebase Firestore.
2️⃣ AI Chatbot (Mental Health Support)
Users can chat with an NLP-powered chatbot that provides mental health responses.
Uses compromise.js for natural language processing.
3️⃣ Find a Doctor
Users can search for mental health professionals.
Google Places API fetches nearby hospitals/clinics.
Users can book appointments via the app.
4️⃣ Mood & Journal Tracking
Users can log their mood and thoughts daily.
Tracks mental health trends over time.
5️⃣ Personal Dashboard
A summary page displaying mood trends, journal logs, and community updates.
📂 Project Structure


🏠 Home Page
🤖 AI Chatbot
🏥 Find a Doctor
📊 Dashboard
🛠 Contributing

Contributions are welcome!
To contribute:

Fork the repo
Create a new branch (feature-branch)
Commit your changes (git commit -m "Added a new feature")
Push to GitHub (git push origin feature-branch)
Create a Pull Request
📜 License

This project is open-source and available under the MIT License.

📞 Contact

For any questions or suggestions, feel free to reach out:
📧 Email: gpradeep7898@gmail.com
🐙 GitHub: https://github.com/gpradeep7898

🚀 Ready to Deploy?
We can deploy this app on Firebase Hosting or Vercel. Let me know if you need help setting that up! 🚀🔥
