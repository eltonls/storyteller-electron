import React from "react"
import Styles from "./header.module.css"
import Nav from "./nav"

const Header: React.FC = () => {
  return (
    <header className={Styles["header"]}>
      <h1 className="heading-primary">Story
        <span className="heading-primary--highlight">teller</span>
      </h1>
      <Nav />
    </header>
  )
}

export default Header
