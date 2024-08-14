import React from 'react'
import App from './App.jsx'
import "./index.css";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './../src/Pages/Home.jsx'
import User from './../src/Pages/User.jsx'
import Search from './../src/Pages/Search.jsx'
import Movie from './../src/Pages/Movie.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
