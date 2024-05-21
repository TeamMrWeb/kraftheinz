import Image from "../Image"

export default function ButtonWithImage({
  text,
  src,
  alt,
  imageProps,
  imageClassName,
  className,
  htmlFor,
  onClick
}) {
  return (
    <label
      className={`bg-crimson flex justify-center font-normal items-center text-lg gap-3 p-4 sm:p-0 rounded-full text-center min-h-[44px] h-max sm:h-[44px] md:h-[68px] md:text-[27px] max-w-[422px] w-full cursor-pointer ${
        className ? className : ""
      }`}
      htmlFor={htmlFor}
      onClick={onClick}
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      {text}
      <Image
        src={src}
        alt={alt}
        props={imageProps}
        className={imageClassName}
      />
    </label>
  )
}
