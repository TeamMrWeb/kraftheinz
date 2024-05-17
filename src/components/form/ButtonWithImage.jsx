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
      className={`bg-crimson flex justify-center font-normal items-center text-lg gap-3 rounded-full text-center h-[44px] md:h-[68px] md:text-[27px] max-w-[422px] w-full cursor-pointer ${
        className ? className : ""
      }`}
      htmlFor={htmlFor}
      onClick={onClick}
      data-aos="fade-down"
      data-aos-duration="1000"
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
