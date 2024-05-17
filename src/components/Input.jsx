export default function Input({ required, id, props, className }) {
  return (
    <input {...props} className={className} id={id} required={required}></input>
  )
}
