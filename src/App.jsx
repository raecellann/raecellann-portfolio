import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Switch from "./components/button";
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/switch" element={<Switch />} />
        </Routes>
      </main>
      <Analytics />
    </Router>
  );
}
