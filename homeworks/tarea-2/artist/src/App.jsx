import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CharacterPage } from './pages/CharacterPage';
import { EpisodesPage } from './pages/EpisodesPage';
import { PageNotFound } from './pages/PageNotFound';

function App() {

  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path='/' exact element={HomePage} />
            <Route path='/characters' element={CharacterPage} />
            <Route path='/episodes' element={EpisodesPage} />
            <Route element={PageNotFound} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;
