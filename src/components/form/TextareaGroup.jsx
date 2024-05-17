import Textarea from "../Textarea"

export default function TextareaGroup({
  containerClassName,
  label,
  textareaProps,
  textareaClassName,
  name,
  children
}) {
  return (
    <div
      className={`flex flex-col gap-1${
        containerClassName ? containerClassName : ""
      }`}
      data-aos="fade-up"
      data-aos-offset="50"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <label htmlFor={name}>{label}</label>
      <Textarea
        name={name}
        props={textareaProps}
        className={textareaClassName}
      />
      {children}
    </div>
  )
}
