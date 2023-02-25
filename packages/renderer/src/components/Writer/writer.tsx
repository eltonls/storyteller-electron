import React, { ChangeEvent, useState } from "react"

function Writer(props: {compTitle:string}) {
  const [text, setText] = useState("")
  const [title, setTitle] = useState("Título")

  function changeTextHandler(evt: ChangeEvent) {
    setText((evt.target as HTMLInputElement).value)
  }

  function changeTitleHandler(evt: ChangeEvent) {
    setTitle((evt.target as HTMLInputElement).value)
  }

  return (
    <div className="h-full flex flex-col m-2">
      {props.compTitle ? (
        <h3 className="p-2 text-black text-xl font-bold mb-2 border-2 border-transparent">
          {props.compTitle}
        </h3>
      ) : (
        <input
          className="w-64 p-2 text-xl font-bold text-black border-2 mb-2"
          onChange={changeTitleHandler}
          value={title}
        />
      )}

      <textarea
        className="p-2 border-2 rounded w-64 h-2/4 resize-none"
        value={text}
        onChange={changeTextHandler}
      ></textarea>
    </div>
  )

}

export default Writer
