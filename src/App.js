import React from 'react'

import Architecture from './components/Architecture'
import Contractors from './components/Contractors'
import NotFound from './components/NotFound'
import Gallery from './components/Gallery'

import { BrowserRouter as Router, Route, Routes ,Navigate } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Architecture />} />
          <Route exact path="/contractors" element={<Contractors />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </Router>
    </>
  )
}

export default App