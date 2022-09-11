import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";
import PostDetails from "./PostDetails";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id/posts" element={<Details />} />
        <Route path="/posts/:userId" element={<PostDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
