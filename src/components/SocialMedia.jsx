export default function SocialMedia({ className }) {
  return (
    <section
      className={`w-full flex justify-center items-center flex-col gap-5 ${className}`}
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <h2 className="font-bebasNeue text-[26px] md:text-[34px]">
        SÍGUENOS EN NUESTRAS REDES
      </h2>
      <div className="flex items-center gap-5">
        <a
          href="https://www.facebook.com/KraftHeinzPR/"
          target="_blank"
          rel="noreferrer"
          className="group"
        >
          <img
            className="w-9 md:w-16"
            src="/assets/images/facebook-logo.png"
            alt="Logo de Facebook"
          />
        </a>
        <a
          href="https://www.instagram.com/kraftheinzpr/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="w-9 md:w-16"
            src="/assets/images/instagram-logo.png"
            alt="Logo de Instagram"
          />
        </a>
        <a href="/#" target="_blank" rel="noreferrer">
          <img
            className="w-11 md:w-[74px]"
            src="/assets/images/youtube-logo.png"
            alt="Logo de Youtube"
          />
        </a>
      </div>
    </section>
  )
}
