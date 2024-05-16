import Input from "../Input"

export default function InputGroup({
  containerClassName,
  label,
  inputProps,
  inputClassName,
  htmlFor,
  children,
  id
}) {
  return (
    <div
      className={`flex flex-col gap-1${
        containerClassName ? containerClassName : ""
      }`}
    >
      <label htmlFor={htmlFor}>{label}</label>
      <Input props={inputProps} className={inputClassName} id={id} />
      {children}
    </div>
  )
}
