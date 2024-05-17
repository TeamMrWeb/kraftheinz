import BarLoader from "react-spinners/BarLoader"

export default function Loader() {
  return (
    <BarLoader
      color="#ffffff"
      size={200}
      width={300}
      aria-label="Loading Spinner"
      data-testid="loader"
      className="absolute m-auto top-[40%]"
      cssOverride={
        {
          // backgroundColor: "#DF2827"
        }
      }
    />
  )
}
