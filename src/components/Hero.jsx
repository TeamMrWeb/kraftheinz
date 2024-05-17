import { useEffect } from "react"
import { useRef } from "react"

export default function Hero() {
  const logoLosRef = useRef()
  const logoHeroesRef = useRef()
  const logoDelRef = useRef()
  const logoVeranoRef = useRef()

  useEffect(() => {
    setTimeout(() => {
      logoLosRef.current.style.opacity = "1"
    }, 400)
    setTimeout(() => {
      logoHeroesRef.current.style.opacity = "1"
    }, 900)
    setTimeout(() => {
      logoDelRef.current.style.opacity = "1"
    }, 1400)
    setTimeout(() => {
      logoVeranoRef.current.style.opacity = "1"
    }, 1900)
  }, [])

  return (
    <div className="w-full flex relative bg-black h-[256px] md:h-[400px]">
      <div
        className="w-full bg-local bg-[center_bottom_-90vw] md:bg-[center_top_-15vw] lg:bg-[center_top_-25vw] xl:bg-[center_top_-30vw] 2xl:bg-[center_top_-35vw] bg-no-repeat bg-cover relative flex justify-center items-center"
        data-aos="fade-up"
        data-aos-duration="1000"
        style={{
          backgroundImage: `url(${"/assets/images/kh-heroes-poster.webp"})`
        }}
      ></div>
      <div className="h-full absolute m-auto flex flex-col justify-center items-center w-full md:mb-10">
        <div className="relative flex justify-center items-center h-min">
          <div className="flex flex-col items-center relative">
            <img
              className="w-[30px] md:w-[50px] object-cover bg-center bg-no-repeat bg-cover m-auto z-10 absolute top-0 left-[40%] logo-los opacity-0"
              src="/assets/images/los.png"
              alt="Los"
              ref={logoLosRef}
            />
            <img
              className="w-[160px] md:w-[250px] object-cover bg-center bg-no-repeat bg-cover m-auto inset-0 z-20 mt-2 md:mt-4 logo-heroes opacity-0"
              src="/assets/images/heroes.png"
              alt="heroes"
              ref={logoHeroesRef}
            />
            <img
              className="w-[30px] md:w-[50px] object-cover bg-center bg-no-repeat bg-cover m-auto inset-0 z-10 absolute top-[15%] logo-del opacity-0"
              src="/assets/images/del.png"
              alt="del"
              ref={logoDelRef}
            />
            <img
              className="w-[160px] md:w-[250px] object-cover bg-center bg-no-repeat bg-cover m-auto inset-0 z-10 mt-4 md:mt-6 logo-verano opacity-0"
              src="/assets/images/verano.png"
              alt="verano"
              ref={logoVeranoRef}
            />
            <img
              className="w-[150px] md:w-[190px] absolute object-cover"
              src="/assets/images/sun-background.webp"
              alt=""
            />
          </div>
        </div>
        <img
          className="w-[150px] md:w-[190px] object-cover mt-2"
          src="/assets/images/kraftheinz-logo.png"
          alt=""
        />
      </div>
    </div>
  )
}
