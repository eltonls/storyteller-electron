import React from "react"
import Styles from "./nav.module.css"

const Nav: React.FC = () => {
  return (
    <nav className={Styles["nav"]}>
      <button className="btn btn--primary">Escrever!</button>
      <ul className={Styles["nav__menu"]}>
        <li className={Styles["nav__item"]}>
          Enredo
        </li>
        <li className={Styles["nav__item"]}>
          Personagens
        </li>
        <li className={Styles["nav__item"]}>
          Notas
        </li>
      </ul>
    </nav>
  )
}

export default Nav
