export default function SectionHeading({ eyebrow, title, copy, align = 'left' }) {
  return (
    <header className={`section-heading section-heading--${align}`} data-reveal>
      {eyebrow && <p className="section-heading__eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {copy && <p className="section-heading__copy">{copy}</p>}
    </header>
  )
}
