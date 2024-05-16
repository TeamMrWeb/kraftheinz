export default function Image({ className, src, alt, ...props }) {
  return <img src={src} alt={alt} {...props} className={className} />
}
