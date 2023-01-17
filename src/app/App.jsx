import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import Dashboard from "../pages/Dashboard";
import { DataProvider } from "../context/DataProvider";
import RequiredAuth from "../components/RequiredAuth";
import HomePage from "../pages/HomePage";
import GlobalNav from "../components/GlobalNav";

function App() {
  return (
    <Router>
      <DataProvider>
        <GlobalNav />
        <Routes>
          {/* Public Routes */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />

          {/* Protected Routes */}
          <Route element={<RequiredAuth />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          {/* Catch all routes */}
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </DataProvider>
    </Router>
  );
}

export default App;
