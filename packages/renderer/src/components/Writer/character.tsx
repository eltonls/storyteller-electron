import React from "react"
import Writer from "./writer"

function Character(props: { characterName: string }) {
  return (
    <div className="pl-5 h-full">
      <h2 className="font-bold text-xl text-purple-700">
        {props.characterName}
      </h2>
      <div className="flex flex-row">
        <Writer compTitle="Fantasma" />
        <Writer compTitle="Crença" />
        <Writer compTitle="Necessidade" />
        <Writer compTitle="Querer" />
      </div>
    </div>
  )
}

export default Character
