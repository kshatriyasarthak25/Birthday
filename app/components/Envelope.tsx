import type React from "react"

export default function Envelope({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-pink-200 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 max-w-md w-full">
      <div className="bg-white p-6 rounded">{children}</div>
    </div>
  )
}

