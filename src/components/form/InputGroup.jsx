import Input from "../Input"

export default function InputGroup({
  containerClassName,
  label,
  inputProps,
  inputClassName,
  htmlFor,
  children,
  id,
  required
}) {
  return (
    <div
      className={`flex flex-col gap-1${
        containerClassName ? containerClassName : ""
      }`}
      data-aos="fade-down"
      data-aos-offset="50"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <label htmlFor={htmlFor}>{label}</label>
      <Input
        props={inputProps}
        className={inputClassName}
        id={id}
        required={required}
      />
      {children}
    </div>
  )
}
