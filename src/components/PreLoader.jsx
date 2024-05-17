import BarLoader from "react-spinners/BarLoader"
import usePreLoader from "../hooks/usePreLoader"

export default function PreLoader({ children }) {
  const { ready } = usePreLoader()

  return !ready ? (
    <BarLoader
      color="#ffffff"
      size={200}
      width={300}
      aria-label="Loading Spinner"
      data-testid="loader"
      className="absolute m-auto top-[40%]"
    />
  ) : (
    children
  )
}
