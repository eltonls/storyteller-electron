import React from "react"
import "./app.css"
import Writer from "./components/Writer/Writer"
import Header from "./components/Header/header"

const App:React.FC = () => {
  return (
    <div className="theme-fantasy">
      <Header />
      <Writer />
    </div>

  )
}

export default App
