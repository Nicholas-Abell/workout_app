import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import Home from './Pages/Home';
import ExerciseDetail from './Pages/ExerciseDetail';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <Box width='400px' sx={{ width: { xl: '1448px' } }} m='auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' elemen={<ExerciseDetail />} />
      </Routes>
    </Box>
  );
}

export default App;
