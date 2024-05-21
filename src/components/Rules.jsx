import rulesDoc from "/assets/docs/reglas.pdf"

export default function Rules() {
  return (
    <section className="w-full flex md:justify-center">
      <button
        className="font-arial uppercase text-lg md:text-[24px] font-bold underline flex items-center gap-3 text-white hover:text-dark-crimson"
        data-aos="fade-up"
        data-aos-offset="0"
        data-aos-duration="1000"
        data-aos-once="true"
        onClick={() => window.open(rulesDoc, "_blank")}
      >
        <img src="/assets/images/arrow-icon.png" alt="rules icon" />
        Ver reglas
      </button>
    </section>
  )
}
