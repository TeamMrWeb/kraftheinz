import { useEffect } from "react"
import { useState } from "react"

const useReadyContent = () => {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setReady(true)
    }, 2500)
  }, [])

  return { ready }
}
export default useReadyContent
