import "bootstrap/dist/css/bootstrap.min.css";
import HeaderSite from "./components/HeaderSite";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect, useMemo, useContext } from "react";
import Home from "./Pages/Home";
import Contacts from "./Pages/Contacts";
import About from "./Pages/About";
import Blog from "./Pages/Blog";

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ marginTop: "55px" }}></div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
