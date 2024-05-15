export default function Hero() {
  return (
    <div className="w-full flex relative">
      <div
        className="w-full h-[480px] bg-local bg-[center_bottom_-113rem] bg-no-repeat bg-[length:100%] relative"
        style={{
          backgroundImage: `url(${"/assets/images/kh-heroes-poster.webp"})`
        }}
      >
        <img
          className="w-[450px] absolute object-cover bg-center bg-no-repeat bg-cover m-auto inset-0 z-10"
          src="/assets/images/los-heroes-del-verano-logo.png"
          alt="Logo de Los Heroes del Verano"
        />
        <img
          className="w-[290px] absolute object-cover bg-center bg-no-repeat bg-cover m-auto inset-0"
          src="/assets/images/sun-background.webp"
          alt=""
        />
      </div>
    </div>
  )
}
