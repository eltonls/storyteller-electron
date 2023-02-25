import React from "react"
import Header from "./components/Header/header"
import Writer from "./components/Writer/writer"
import Character from "./components/Writer/character"
import SectionList from "./components/Writer/sectionList"

const App: React.FC = () => {
  function changeCharacterHandler(characterName:string) {

  }

  return (
    <div className="font-sans w-screen h-screen overflow-hidden">
      <Header />
      <div className="p-2 flex flex-row w-full h-96">
        <SectionList changeCharacter={changeCharacterHandler} />
        <Character characterName="Gandalf" />
      </div>
    </div>
  )
}

export default App
