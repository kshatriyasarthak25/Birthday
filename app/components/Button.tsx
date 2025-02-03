import type React from "react"

interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors duration-300"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

