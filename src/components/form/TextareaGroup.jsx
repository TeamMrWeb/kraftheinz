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
