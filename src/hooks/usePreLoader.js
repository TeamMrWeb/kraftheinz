import { useEffect } from "react"
import { useState } from "react"

export default function usePreLoader() {
  const [loading, setLoading] = useState(true)

  const handleFetch = () => {
    fetch("https://kraftheinz-kappa.vercel.app/")
      .then(response => response.json())
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    handleFetch()
  }, [])

  return { loading }
}
