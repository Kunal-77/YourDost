# YourDOST SDE Intern Assignment - Frontend

## Project Title
**User Directory Table**

This React + TailwindCSS web app fetches and displays user data from the [ReqRes API](https://reqres.in/api/users).  
It supports searching, sorting, filtering, and pagination — along with a responsive, professional UI.

---

## Features Implemented

Fetch user list from ReqRes API  
Display users in responsive card format  
Search by name or email  
Filter by email domain  
Sort by name or email (A → Z / Z → A)  
Pagination (with previous & next page controls)  
Loading spinner while fetching data  
Error handling for invalid pages  
Responsive design for all devices  
Built with React (Vite) + TailwindCSS  

---

##  Tech Stack

- **Frontend:** React (Vite)
- **Styling:** TailwindCSS
- **API:** [ReqRes](https://reqres.in/)
- **Deployment:** Vercel

---

## ⚙️ Setup Instructions

Follow these steps to run the project locally 👇  

### 1️ Clone this repository
```bash
git clone https://github.com/<your-username>/yourdost-assignment.git
2️ Navigate to the frontend folder
bash
Copy code
cd yourdost-assignment/frontend
3️ Install dependencies
bash
Copy code
npm install
4️ Run the development server
bash
Copy code
npm run dev
Now open your browser and visit 
http://localhost:5173

 Testing the App
 Search
Type any name or email in the search box — results update instantly.

 Filter
Enter a domain (e.g. reqres.in) to filter users by email.

 Sort
Use the dropdown to sort users by:

First Name (A → Z / Z → A)

Email (A → Z / Z → A)

 Pagination
Navigate between pages using Prev / Next buttons.
You can’t move beyond available pages — it’s safely handled.

 UI Preview
(Add your app screenshot here after deployment)

 Deployment (Vercel)