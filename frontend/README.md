# 🧠 YourDOST Frontend Assignment

## 🚀 Overview
This project is a **React + Vite + Tailwind CSS** web application built as part of the **YourDOST Frontend Assignment**.  
It displays a list of users fetched from an API with full functionality — **search, filter, sort, and pagination**.

---

## 🎯 Objective
Build a simple user directory that:
- Fetches user data from an API  
- Displays users in a clean, responsive UI  
- Supports filtering, sorting, and pagination  

---

##  Live Demo
🔗 [View Deployed App on Vercel] [text](https://frontend-sigma-sooty-12.vercel.app/)

---

##  Features
 Fetches live user data from API (`https://randomuser.me/api`)  
 Search users by name or email  
 Filter users by email domain  
 Sort users by name or email (A–Z / Z–A)  
 Pagination with multiple pages  
 Loading spinner during data fetch  
 Error handling for failed network requests  
 Fully responsive, mobile-friendly design  

---

##  Tech Stack
- **Frontend Framework:** React (Vite)
- **Styling:** Tailwind CSS
- **API:** RandomUser API
- **Deployment:** Vercel

---

##  Preview
###  Desktop View
A clean, modern, and responsive user directory interface.

###  Mobile View
Fully responsive layout with smooth interactions.

---

##  Setup Instructions

### 1️ Clone the Repository
```bash
git clone (https://github.com/Kunal-77/YourDost)
cd frontend
2️ Install Dependencies
bash
Copy code
npm install
3️ Run Locally
bash
Copy code
npm run dev
Then open:
 http://localhost:5173

# API Used
RandomUser API:
https://randomuser.me/api/?page=1&results=10&nat=us

Used instead of reqres.in to avoid CORS and 401 authentication issues.

. Bonus Features
1. Modern Tailwind-based UI with hover animations
2. Gradient background & soft shadows
3. Animated loader while fetching users
4. Graceful fallback for empty or failed responses

# Folder Structure
arduino
Copy code
frontend/
├── public/
├── src/
│   ├── components/
│   │   └── UserDirectory.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
└── vite.config.js
## Author
 Kunal Narkhede
Frontend Developer | Passionate about clean UI & modern web design 
Contact info:-
Gmail:-(kunalnarkhede777@gmail.com)
Gihub:-(https://github.com/Kunal-77)