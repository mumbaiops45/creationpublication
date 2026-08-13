
export default function Section({
  tone = 'light',
  className = '',
  children,
  as: Tag = 'section',
  ...rest
}) {
  return (
    <Tag data-tone={tone} className={`surface ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
