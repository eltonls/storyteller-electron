import React from "react"
import Nav from "./nav"

const Header: React.FC = () => {
  return (
    <header className="p-4 bg-gray-900 text-white flex flex-row justify-between items-center" >
      <h1 className="text-white font-cursive text-4xl">Story
        <span className="text-purple-700">teller</span>
      </h1>
      <Nav />
    </header>
  )
}

export default Header
