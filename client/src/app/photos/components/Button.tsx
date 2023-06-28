"use client"

import React from "react"

interface ButtonProps {
  label?: string
  onClick: () => void
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <div className="">
      <button
        onClick={onClick}
        className="w-[300px] bg-blue-500 hover:bg-white text-center p-3 rounded-md transition font-bold uppercase text-white hover:text-black">
        {label}
      </button>
    </div>
  )
}

export default Button
