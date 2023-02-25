import React from "react"
import { Link } from "react-router-dom"


const Nav: React.FC = () => {
  return (
    <nav className="flex flex-row items-center">
      <button className="h-fit bg-purple-700 p-2 rounded">Escrever!</button>
      <ul className="border-purple-400 m-2 border-l-2 flex flex-row items-center">
        <li className="m-2">
          <Link to="/plot">Enredo</Link>
        </li>
        <li className="m-2">
          <Link to="/characters">Personagens</Link>
        </li>
        <li className="m-2">
          <Link to="/notes">Notas</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
