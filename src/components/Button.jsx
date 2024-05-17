export default function Button({ className, children, props, type }) {
  return (
    <button
      className={className}
      {...props}
      type={type}
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      {children}
    </button>
  )
}
