export default function Header() {
  return (
    <header className="flex w-full flex-col gap-10 items-center">
      <h1 className="tracking-wide uppercase text-[108px]">
        ¡GRAN SORTEO SEMANAL!
      </h1>
      <div className="flex items-end gap-1">
        <h2 className="uppercase text-[51px] font-normal leading-none">
          SOBRE
          <div className="flex gap-1 text-crimson leading-normal">
            <small className="text-[73px] leading-snug">$</small>
            <span className="text-[147px] leading-none">6,500</span>
          </div>
        </h2>
        <span className="font-bold text-[73px] mb-1">EN PREMIOS</span>
      </div>
    </header>
  )
}
