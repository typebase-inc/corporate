'use client'

import { useEffect, useRef, useState } from 'react'
import s from './WaveBackground.module.css'

export const WaveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // フェードインタイミングの制御
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 10)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const drawWave = (
      offset: number,
      amplitude: number,
      frequency: number,
      speed: number,
      color: string,
      yPosition: number,
    ) => {
      ctx.beginPath()
      ctx.moveTo(0, canvas.height)

      for (let x = 0; x <= canvas.width + 100; x += 5) {
        const y =
          canvas.height * yPosition +
          amplitude *
            Math.sin((x * frequency + time * speed + offset) * 0.003) +
          amplitude *
            0.3 *
            Math.sin((x * frequency * 2.5 + time * speed * 0.7) * 0.003)
        ctx.lineTo(x, y)
      }

      ctx.lineTo(canvas.width + 100, canvas.height)
      ctx.lineTo(0, canvas.height)
      ctx.closePath()

      ctx.fillStyle = color
      ctx.fill()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // 最背面の波
      drawWave(0, 200, 0.5, 0.2, 'rgba(0, 82, 163, 0.6)', 0.3)

      // 中間層の波
      drawWave(300, 150, 0.7, 0.3, 'rgba(0, 102, 204, 0.4)', 0.5)

      // 前面の波
      drawWave(150, 100, 0.9, 0.4, 'rgba(0, 123, 255, 0.3)', 0.7)

      time++
      animationId = requestAnimationFrame(animate)
    }

    resize()
    animate()

    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={s.waveCanvas}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
      }}
    />
  )
}
