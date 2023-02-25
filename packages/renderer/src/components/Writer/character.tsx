import React from "react"
import Writer from "./writer"

const Character:React.FC = (props: React.ComponentProps) => {
  return (
    <div className="pl-5 h-full">
      <h2 className="font-bold text-xl text-purple-700">
        {props.characterName}
      </h2>
      <div className="flex flex-row">
        <Writer />
        <Writer compTitle="Características" />
        <Writer compTitle="Corpo" />
      </div>
    </div>
  )
}

export default Character
