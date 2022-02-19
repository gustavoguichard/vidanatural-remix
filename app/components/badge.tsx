import { Link } from 'remix'
import { cx } from '~/lib/utils'

type BProps = { children: React.ReactNode; href?: string; className?: string }
const Badge = ({ children, className, href }: BProps) => {
  let classes = cx(
    'inline-flex items-center rounded bg-secondary-100 px-2 py-0.5 text-xs font-medium text-secondary-800 !no-underline',
    href && 'hover:bg-secondary-200 hover:ring-2 hover:ring-secondary-300',
    className,
  )
  let content = (
    <>
      <svg
        className="mr-1.5 h-2 w-2 text-secondary-400"
        fill="currentColor"
        viewBox="0 0 8 8"
      >
        <circle cx={4} cy={4} r={3} />
      </svg>
      <span className="first-letter:uppercase">{children}</span>
    </>
  )
  return href ? (
    <Link to={href} className={classes}>
      {content}
    </Link>
  ) : (
    <span className={classes}>{content}</span>
  )
}

export default Badge
