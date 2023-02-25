import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./components/Header/header"
import Home from "./pages/Home"
import Plot from "./pages/Plot"
import Notes from "./pages/Notes"
import Characters from "./pages/Characters"

const App: React.FC = () => {
  return (
    <Router>
      <div className="font-sans w-screen h-screen overflow-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/plot" element={<Plot />}></Route>
          <Route path="/characters" element={<Characters />}></Route>
          <Route path="/notes" element={<Notes />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
