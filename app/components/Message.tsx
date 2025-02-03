import type React from "react"

interface MessageProps {
  children: React.ReactNode
  onOpen?: () => void
}

export default function Message({ children, onOpen }: MessageProps) {
  return (
    <div className="text-xl text-center cursor-pointer" onClick={onOpen}>
      {children}
    </div>
  )
}

