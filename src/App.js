import React from 'react'

import Architecture from './components/Architecture'
import Contractors from './components/Contractors'
import NotFound from './components/NotFound'
import Gallery from './components/Gallery'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Architecture />} />
          <Route exact path="/contractors" element={<Contractors />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App