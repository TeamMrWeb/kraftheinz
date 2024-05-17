import { useEffect } from "react"
import { useState } from "react"

const useReadyContent = () => {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setReady(true)
    }, 4800)
  }, [])

  return { ready }
}
export default useReadyContent
