export default function SocialMedia() {
  return (
    <section className="w-full flex justify-center items-center flex-col">
      <h2 className="font-bebasNeue text-[44.89px]">
        SÍGUENOS EN NUESTRAS REDES
      </h2>
      <div className="flex items-center gap-5">
        <img
          className="w-16"
          src="/assets/images/facebook-logo.png"
          alt="Logo de Facebook"
        />
        <img
          className="w-16"
          src="/assets/images/instagram-logo.png"
          alt="Logo de Instagram"
        />
        <img
          className="w-[74px]"
          src="/assets/images/youtube-logo.png"
          alt="Logo de Youtube"
        />
      </div>
    </section>
  )
}
