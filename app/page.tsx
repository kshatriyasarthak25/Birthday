"use client"

import { useState, useEffect, useRef } from "react"
import dynamic from "next/dynamic"

const Envelope = dynamic(() => import("./components/Envelope"), { ssr: false })
const Message = dynamic(() => import("./components/Message"), { ssr: false })
const Button = dynamic(() => import("./components/Button"), { ssr: false })
const Balloons = dynamic(() => import("./components/Balloons"), { ssr: false })
const Banner = dynamic(() => import("./components/Banner"), { ssr: false })

interface HeartProps {
  left: string
  top: string
  animationDelay: string
}

export default function BirthdayProgram() {
  const [step, setStep] = useState(0)
  const [showBalloons, setShowBalloons] = useState(false)
  const [showBanner, setShowBanner] = useState(false)
  const [hearts, setHearts] = useState<HeartProps[]>([])

  useEffect(() => {
    const newHearts = Array.from({ length: 20 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
    }))
    setHearts(newHearts)
  }, [])

  useEffect(() => {
    if (step === 1) {
      const timer = setTimeout(() => setStep(2), 6000)
      return () => clearTimeout(timer)
    }
    if (step === 2) {
      const timer = setTimeout(() => setStep(3), 5000)
      return () => clearTimeout(timer)
    }
  }, [step])

  const handleYes = () => {
    setStep(4)
  }

  const handleNo = () => {
    setStep(5)
  }

  const handleDecorate = () => {
    setShowBalloons(true)
    setShowBanner(true)
  }

  const handleSurprise = () => {
    window.location.href = "/S/index.html";
  }

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center overflow-hidden">
      {hearts.map((heart, i) => (
        <div
          key={i}
          className="absolute heart"
          style={{
            left: heart.left,
            top: heart.top,
            animationDelay: heart.animationDelay,
          }}
        />
      ))}
      {showBalloons && <Balloons />}
      {showBanner && <Banner />}
      <div className="relative z-10">
        <Envelope>
          {step === 0 && <Message onOpen={() => setStep(1)}>Click to open</Message>}
          {step === 1 && <Message>Hey, it's your special day!!!</Message>}
          {step === 2 && <Message>To make it special, I have made something for you madam!</Message>}
          {step === 3 && (
            <div className="text-center">
              <Message>Do you want to see what I made for you?</Message>
              <div className="mt-4 space-x-4">
                <Button onClick={handleYes}>Yes</Button>
                <Button onClick={handleNo}>No</Button>
              </div>
            </div>
          )}
          {step === 4 && (
            <div className="text-center space-y-4">
              {!showBalloons && <Button onClick={handleDecorate}>Decorate</Button>}
              {showBalloons && <Button onClick={handleSurprise}>Surprise!!</Button>}
            </div>
          )}
          {step === 5 && (
            <div className="text-center">
              <Message>Are you sure?</Message>
              <div className="mt-4 space-x-4">
                <Button onClick={() => setStep(4)}>Definitely Yes</Button>
                <Button onClick={() => setStep(4)}>Yes</Button>
              </div>
            </div>
          )}
        </Envelope>
      </div>
      {showBanner && (
        <div className="mt-8 text-center">
          <p className="text-2xl font-bold text-pink-600">Enjoy your day madam!!</p>
        </div>
      )}
    </div>
  )
}
