import "./App.css";

import Login from "./components/Login";

import Movie from "./components/Movie";
import Homepage from "./components/Homepage";
import Dashboard from "./components/Dashboard";
import Actors from "./components/Actors";
import Genre from "./components/Genre";
import Register from "./components/Register";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App bg-gray-50 ">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/movies/genre/:genretype" element={<Genre />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
