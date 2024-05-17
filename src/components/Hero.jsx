export default function Hero() {
  return (
    <div className="w-full flex relative bg-black h-[256px] md:h-[400px]">
      <div
        className="w-full bg-local bg-[center_bottom_-90vw] md:bg-[center_top_-15vw] lg:bg-[center_top_-25vw] xl:bg-[center_top_-30vw] 2xl:bg-[center_top_-35vw] bg-no-repeat bg-cover relative flex justify-center items-center z-0 background"
        style={{
          backgroundImage: `url(${"/assets/images/kh-heroes-poster.webp"})`
        }}
      ></div>
      <div className="h-full absolute m-auto flex flex-col justify-center items-center w-full md:pb-10">
        <div className="relative flex justify-center items-center h-min">
          <div className="flex flex-col items-center relative">
            <img
              className="w-[30px] md:w-[50px] object-cover bg-center bg-no-repeat bg-cover m-auto z-10 absolute top-0 left-[40%] logo-los"
              src="/assets/images/los.png"
              alt="Los"
            />
            <img
              className="w-[160px] md:w-[250px] object-cover bg-center bg-no-repeat bg-cover m-auto inset-0 z-20 mt-2 md:mt-4 logo-heroes"
              src="/assets/images/heroes.png"
              alt="heroes"
            />
            <img
              className="w-[30px] md:w-[50px] object-cover bg-center bg-no-repeat bg-cover m-auto inset-0 z-10 absolute top-[15%] logo-del"
              src="/assets/images/del.png"
              alt="del"
            />
            <img
              className="w-[160px] md:w-[250px] object-cover bg-center bg-no-repeat bg-cover m-auto inset-0 z-10 mt-4 md:mt-6 logo-verano"
              src="/assets/images/verano.png"
              alt="verano"
            />
          </div>
        </div>
        <img
          className="w-[150px] md:w-[190px] absolute object-cover background-sun"
          src="/assets/images/sun-background.webp"
          alt=""
        />
        <img
          className="w-[150px] md:w-[190px] object-cover absolute bottom-10 kraftheninz-logo"
          src="/assets/images/kraftheinz-logo.png"
          alt=""
        />
      </div>
    </div>
  )
}
