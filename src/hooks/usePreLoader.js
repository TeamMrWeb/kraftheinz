import { useEffect } from "react"
import { useState } from "react"

const images = [
  "/assets/images/los.png",
  "/assets/images/heroes.png",
  "/assets/images/del.png",
  "/assets/images/verano.png"
]

export default function usePreLoader() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (images && images.length > 0) {
      const loadImage = src => {
        return new Promise(resolve => {
          const img = new Image()
          img.src = src
          img.onload = () => resolve(src)
          img.onerror = () => resolve(src)
        })
      }
      const loadImages = async () => {
        await Promise.all(images.map(img => loadImage(img)))
        await handleFetch()
        setReady(true)
      }
      loadImages()
    } else {
      setReady(true)
    }
  }, [])

  const handleFetch = async () => {
    await fetch("https://kraftheinz-kappa.vercel.app/")
  }

  return { ready }
}
