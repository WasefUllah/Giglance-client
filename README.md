# Freelancing Platform

A responsive full-stack React freelancing platform that allows users to post tasks, place bids, and manage their posted or assigned tasks.

## 🚀 Features

- 🔐 User Authentication (with context)
- 📝 Post a Task (title, category, budget, deadline, etc.)
- 🔍 Browse and Bid on Tasks
- 🗃️ Task Filtering and Sorting by Deadline
- 🧠 Tooltip UI and CountUp Animation
- 🌗 Dark/Light Theme Support with DaisyUI
- ✅ Task Details Page with Conditional UI
- 🔧 Task Update Feature for Owners
- 📦 REST API integration (localhost:3000/tasks)

---

## 🛠️ Tech Stack

- **Frontend:** React, Tailwind CSS, DaisyUI
- **State Management:** React Context API
- **Routing:** React Router DOM
- **Backend:** Custom API (Node.js/Express assumed)
- **Authentication:** Firebase (or custom backend)
- **Deployment:** (Optional) Vercel, Netlify, Firebase Hosting

---

## 📦 NPM Packages Used

| Package              | Description                                 |
|----------------------|---------------------------------------------|
| `react-router-dom`   | Client-side routing                         |
| `daisyui`            | UI library built on top of Tailwind         |
| `sweetalert2`        | Elegant alert popups                        |
| `react-tooltip`      | Tooltips for React elements                 |
| `react-countup`      | Animated number counter                     |
| `axios`              | (Optional) HTTP requests                    |
| `classnames`         | Conditional class names (optional)          |

---

## 📁 Folder Structure

/src
├── Components/
│   ├── AddTask.jsx
│   ├── BrowseTask.jsx
│   ├── Error.jsx
│   ├── Faq.jsx
│   ├── Footer.jsx
│   ├── Home.jsx
│   ├── Loader.jsx
│   ├── Login.jsx
│   ├── MyTasks.jsx
│   ├── Navbar.jsx
│   ├── Signup.jsx
│   ├── Success.jsx
│   ├── TaskCard.jsx
│   ├── TaskDetails.jsx
│   └── UpdateTask.jsx
│
├── Firebase/
│   └── (Firebase config files)
│
├── Layouts/
│   └── (Main layout files)
│
├── PrivateRoute/
│   └── PrivateRoute.jsx
│
├── Provider/
│   └── AuthProvider.jsx
│
├── Routes/
│   └── (All route setup files)
│
├── App.jsx
└── main.jsx
🌈 Theming
Using DaisyUI, you can toggle between light and dark themes. Themes are configured in tailwind.config.js.

🤝 Contributions
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.