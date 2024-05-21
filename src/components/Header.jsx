export default function Header() {
  return (
    <header className="flex w-full flex-col gap-5 md:gap-10 items-center text-center z-10">
      <h1
        className="tracking-wide uppercase text-5xl md:text-7xl mt-5"
        data-aos="fade-up"
        data-aos-offset="0"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        ¡GRAN SORTEO SEMANAL!
      </h1>
      <div
        className="flex items-end gap-1 text-start"
        data-aos="fade-up"
        data-aos-offset="0"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <h2 className="uppercase text-2xl md:text-4xl font-normal leading-none">
          <span className="tracking-widest">SOBRE</span>
          <div className="flex gap-1 text-crimson leading-normal">
            <small className="text-[34px] md:text-4xl leading-snug mt-2">
              $
            </small>
            <span className="text-[68px] md:text-8xl leading-none">6,500</span>
          </div>
        </h2>
        <span className="font-bold text-[33px] md:text-6xl mb-1 md:mb-2">
          EN PREMIOS
        </span>
      </div>
    </header>
  )
}
