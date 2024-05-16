export default function Button({ className, children, props, type }) {
  return (
    <button className={className} {...props} type={type}>
      {children}
    </button>
  )
}
