import Button from "../Button"
import Image from "../Image"

export default function ButtonWithImage({
  text,
  src,
  alt,
  imageProps,
  imageClassName
}) {
  return (
    <Button className="bg-crimson flex justify-center font-normal items-center text-lg gap-3 rounded-full text-center h-[44px] md:h-[68px] md:text-[27px] max-w-[422px] w-full">
      {text}
      <Image
        src={src}
        alt={alt}
        props={imageProps}
        className={imageClassName}
      />
    </Button>
  )
}