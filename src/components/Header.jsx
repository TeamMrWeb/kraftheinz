export default function Header() {
  return (
    <header className="flex w-full py-10 flex-col gap-10 items-center">
      <h1 className="tracking-wide uppercase text-5xl">
        ¡GRAN SORTEO SEMANAL!
      </h1>
      <div className="flex items-end gap-1">
        <h2 className="uppercase text-2xl font-normal leading-none">
          SOBRE
          <div className="flex gap-1 text-crimson leading-normal">
            <small className="text-3xl">$</small>
            <span className="text-6xl">6,500</span>
          </div>
        </h2>
        <span className="font-bold text-4xl mb-1">EN PREMIOS</span>
      </div>
    </header>
  )
}
