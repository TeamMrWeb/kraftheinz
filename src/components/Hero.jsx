export default function Hero() {
  return (
    <div className="w-full flex relative">
      <div
        className="w-full h-[256px] md:h-[400px] bg-local md:bg-[center_top_-10vw] xl:bg-[center_top_-35vw] bg-no-repeat bg-cover relative flex justify-center items-center"
        style={{
          backgroundImage: `url(${"/assets/images/kh-heroes-poster.webp"})`
        }}
      >
        <div className="absolute m-auto flex flex-col justify-center items-center w-full md:mb-10">
          <div className="relative m-auto flex justify-center items-center h-min">
            <img
              className="w-[200px] md:w-[300px] object-cover bg-center bg-no-repeat bg-cover m-auto inset-0 z-10 logo"
              src="/assets/images/los-heroes-del-verano-logo.png"
              alt="Logo de Los Heroes del Verano"
            />
            <img
              className="w-[150px] md:w-[190px] absolute object-cover"
              src="/assets/images/sun-background.webp"
              alt=""
            />
          </div>
          <img
            className="w-[150px] md:w-[190px] object-cover"
            src="/assets/images/kraftheinz-logo.png"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
