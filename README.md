# Freelancing Platform

A responsive full-stack React freelancing platform that allows users to post tasks, place bids, and manage their posted or assigned tasks.

---

## Repository Description (for GitHub)

A modern full-stack freelancing platform built with React, Tailwind CSS, and Firebase. Users can post tasks, browse and bid on available tasks, and manage their own tasks seamlessly. Features include user authentication, dark/light mode, task filtering, and real-time updates.  
🔗 Live Site: [https://giglance-f9386.web.app/](https://giglance-f9386.web.app/)  
🛠️ Tech Stack: React, Tailwind CSS, DaisyUI, Firebase, Node.js (API)

---

## Server side repo

https://github.com/WasefUllah/Giglance-server

---

## 🚀 Features

- 🔐 User Authentication (React Context + Firebase)
- 📝 Post a Task with details like title, category, budget, deadline
- 🔍 Browse Tasks and place Bids on them
- 🗃️ Filter and Sort Tasks by deadline
- 🧠 Tooltip UI and CountUp animation for better UX
- 🌗 Dark/Light Theme toggle powered by DaisyUI
- ✅ Detailed Task Page with conditional UI based on user role
- 🔧 Task Update feature for task owners
- 📦 REST API integration (localhost:3000/tasks assumed for development)

---

## 🛠️ Tech Stack

- **Frontend:** React, Tailwind CSS, DaisyUI
- **State Management:** React Context API
- **Routing:** React Router DOM
- **Backend:** Custom API (Node.js/Express assumed)
- **Authentication:** Firebase Authentication
- **Deployment:** Firebase Hosting

---

## 📦 Dependencies

```json
{
  "@tailwindcss/vite": "^4.1.7",
  "firebase": "^11.8.1",
  "react": "^19.1.0",
  "react-countup": "^6.5.3",
  "react-dom": "^19.1.0",
  "react-icons": "^5.5.0",
  "react-router": "^7.6.0",
  "react-tooltip": "^5.28.1",
  "sweetalert2": "^11.21.2",
  "tailwindcss": "^4.1.7"
}
```

---

## 📁 Folder Structure & Running Locally

### 📂 Folder Structure

/src  
├── Components/  
│ ├── AddTask.jsx  
│ ├── BrowseTask.jsx  
│ ├── Error.jsx  
│ ├── Faq.jsx  
│ ├── Footer.jsx  
│ ├── Home.jsx  
│ ├── Loader.jsx  
│ ├── Login.jsx  
│ ├── MyTasks.jsx  
│ ├── Navbar.jsx  
│ ├── Signup.jsx  
│ ├── Success.jsx  
│ ├── TaskCard.jsx  
│ ├── TaskDetails.jsx  
│ └── UpdateTask.jsx  
├── Firebase/  
│ └── (Firebase config files)  
├── Layouts/  
│ └── (Main layout files)  
├── PrivateRoute/  
│ └── PrivateRoute.jsx  
├── Provider/  
│ └── AuthProvider.jsx  
├── Routes/  
│ └── (All route setup files)  
├── App.jsx  
└── main.jsx

---

### 🧪 Running Locally

# Clone the repository

git clone https://github.com/WasefUllah/Giglance-client.git

# Navigate to the project directory

cd Giglance-client

# Install dependencies

npm install

# Configure Firebase

# Replace the config object in /src/Firebase/ with your own Firebase project credentials.

# Start the development server

npm run dev

Open your browser:

Navigate to http://localhost:3000 to see the app running locally.

🔗 Live Link
https://giglance-f9386.web.app/

🤝 Contribution
Pull requests are welcome! For major changes, please open an issue first to discuss.

🌈 Theming
Using DaisyUI, you can toggle between light and dark themes. Themes are configured in tailwind.config.js.
