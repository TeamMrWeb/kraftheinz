export default function Textarea({ name, props, className }) {
  return (
    <textarea {...props} name={name} className={className} id="postulation" />
  )
}
