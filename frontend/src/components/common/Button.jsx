export default function Button({ children, className = '', variant = 'primary', ...props }) {
  return <a className={`button button--${variant} ${className}`} {...props}>{children}</a>
}
