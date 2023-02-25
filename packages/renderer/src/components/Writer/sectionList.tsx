import React from "react"

const SectionList:React.FC = () => {
  return (
    <div className="border-2 rounded w-48 h-full">
      <ul className="flex flex-col items-center font-serif">
        <li className="w-full h-full text-center p-2 hover:bg-gray-200 hover:cursor-pointer">
          Gandalf
        </li>
        <li className="w-full h-full text-center p-2 hover:bg-gray-200 hover:cursor-pointer">
          Kelsier
        </li>
        <li className="w-full h-full text-center p-2 hover:bg-gray-200 hover:cursor-pointer">
          Amelie Poulain
        </li>
      </ul>
    </div>
  )
}

export default SectionList
