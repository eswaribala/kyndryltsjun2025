import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreateVehicle from "./pages/CreateVehicle";
import "./App.css";

const App: React.FC = () => (
  <Router>
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <Link to="/">Home</Link> | <Link to="/create">Create Customer</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateVehicle />} />
    </Routes>
  </Router>
);

export default App;