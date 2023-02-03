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
import DashboardMenu from "../components/DashboardMenu";
import Leaderboard from "../pages/Leaderboard";
import Account from "../pages/Account";
import Faqs from "../pages/Faqs";
import GamePage from "../pages/GamePage";

function App() {
  return (
    <Router>
      <DataProvider>
        <GlobalNav />
        <Routes>
          {/* Public Routes */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/faq" element={<Faqs />} />

          {/* Protected Routes */}
          <Route element={<RequiredAuth />}>
            <Route path="/" element={<HomePage />} />
            <Route element={<DashboardMenu />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/leaders" element={<Leaderboard />} />
              <Route path="/account" element={<Account />} />
            </Route>
            <Route path="/:id/game" element={<GamePage />} />
          </Route>

          {/* Catch all routes */}
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </DataProvider>
    </Router>
  );
}

export default App;
