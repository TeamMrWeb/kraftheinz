import Textarea from "./Textarea"

export default function TextareaGroup({
  containerClassName,
  label,
  textareaProps,
  textareaClassName,
  htmlFor
}) {
  return (
    <div className={`flex flex-col gap-1 ${containerClassName}`}>
      <label htmlFor={htmlFor}>{label}</label>
      <Textarea props={textareaProps} className={textareaClassName} />
    </div>
  )
}
