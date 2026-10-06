# Packasia - Full-Stack Eco-Industrial Packaging Website

This project is a pixel-perfect recreation of the Packasia premium corporate website, built with a complete React frontend and a Node.js + Express backend.

## Tech Stack
- **Frontend:** React (Vite), Tailwind CSS v4, Framer Motion (for smooth hover/scroll animations)
- **Backend:** Node.js, Express, MongoDB (Mongoose)
- **Authentication:** JSON Web Tokens (JWT)

---

## File Structure

```
packasia_app/
├── backend/
│   ├── .env                 # API configuration and secrets
│   ├── server.js            # Express server entry point
│   ├── config/              # MongoDB connection configuration
│   ├── controllers/         # Authentication & business logic controllers
│   ├── middleware/          # JWT protection and authorization
│   ├── models/              # Mongoose database models
│   └── routes/              # Express API endpoints
│
└── frontend/
    ├── .env                 # Frontend API endpoint variables
    └── src/
        ├── App.jsx          # Routing & animation coordination
        ├── index.css        # Tailwind v4 theme specifications
        ├── components/      # Reusable navigation, footer, & UI elements
        ├── context/         # AuthContext state management
        ├── hooks/           # useAuth custom authentication hook
        └── pages/           # Pages (Home, About, Manufacturing, Products, Login, Quote, Admin)
```

---

## How to Get Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

### 1. MongoDB Setup
You can use a local MongoDB instance, or a free **MongoDB Atlas** cloud database:
1. Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Get your connection string.
3. Open `packasia_app/backend/.env` and paste it as the `MONGODB_URI` value:
   ```env
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxx.mongodb.net/packasia
   ```

*Note: If you run a local MongoDB, it will automatically connect to `mongodb://localhost:27017/packasia`.*

### 2. Install & Run

#### Run the Backend
```bash
cd backend
npm install
node server.js
```
The server will start on `http://localhost:5000`.

#### Run the Frontend
```bash
cd frontend
npm install
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

---

## Environment Variables

### Backend (`backend/.env`)
- `PORT`: Port the server runs on (default: `5000`)
- `MONGODB_URI`: Your MongoDB connection string
- `JWT_SECRET`: Secret key used for signing authentication tokens
- `JWT_EXPIRE`: Token expiration limit (default: `24h`)

### Frontend (`frontend/.env`)
- `VITE_API_URL`: Backend API url endpoint (`http://localhost:5000/api`)
