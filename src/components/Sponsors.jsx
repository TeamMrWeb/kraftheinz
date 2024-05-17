export default function Sponsors({ className }) {
  return (
    <aside
      className={`w-full bg-mustard flex justify-center items-center ${className}`}
    >
      <div className="flex items-center gap-10">
        <img
          className="w-12 md:w-24"
          src="/assets/images/oscar-mayer-logo.webp"
          alt="Logo de Oscar Mayer"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="200"
        />
        <img
          className="w-20 md:w-40"
          src="/assets/images/philadelphia-logo.webp"
          alt="Logo de Philadelphia"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="400"
        />
        <img
          className="w-16 md:w-32"
          src="/assets/images/heinz-logo.webp"
          alt="Logo de Heinz"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="600"
        />
      </div>
    </aside>
  )
}
