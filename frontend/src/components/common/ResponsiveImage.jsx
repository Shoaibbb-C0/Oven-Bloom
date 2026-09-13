export default function ResponsiveImage({ alt, className = '', ...props }) {
  return <img className={className} alt={alt} decoding="async" {...props} />
}
