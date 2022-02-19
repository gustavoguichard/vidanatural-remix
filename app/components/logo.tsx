import { Link } from 'remix'

const Logo = () => {
  return (
    <Link to="/" className="inline-block">
      <span className="sr-only">Vida Natural</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 107 8.5"
        className="w-32 py-3 opacity-100 duration-700"
      >
        <path
          d="M4.5 7.1L1.2 0h-1l4 8.6h.6l4-8.6h-1zM12 0h.9v8.6H12zm7.6 0h-2.7v8.6h3c2.3-.2 4-2 4-4.3C24 1.9 22 0 19.6 0zm-1.8 7.7V.9h1.8C21.5.9 23 2.4 23 4.3c0 1.7-1.4 3.2-3.2 3.4h-2zM29.9 0L26 8.6h1l1-2.3h4.3l1 2.3h1L30.5 0h-.6zm-1.5 5.4l1.8-4 1.8 4h-3.6zm14.7-.1L38.2.2h-.8v8.1h1.7V3.2l4.8 5.1h.8V.2h-1.6zM51.8.2L48 8.3h1.7l.7-1.6H54l.7 1.6h1.7L52.5.2h-.7zM51 5.3l1.2-2.7 1.2 2.7H51zm7.3-3.6h2.6v6.6h1.7V1.7h2.6V.2h-6.9zm15.9 3c0 1.5-.7 2.3-2 2.3s-2-.7-2-2.3V.2h-1.6v4.9c0 1.9 1.2 3.3 3.6 3.3 2.4 0 3.6-1.5 3.6-3.3V.2h-1.6v4.5zm12.2-1.5c0-1.5-.8-2.9-3.2-2.9h-3.6v8.1h1.6V6.3H83l1.6 2.1h2L84.7 6c1.1-.5 1.7-1.4 1.7-2.8zm-3.6 1.7h-1.4V1.7H83c1.3 0 1.7.8 1.7 1.6 0 .9-.6 1.6-1.9 1.6zM93 .2l-3.9 8.1h1.7l.7-1.6h3.6l.9 1.6h1.7L93.8.2H93zm-.8 5.1l1.2-2.7 1.2 2.7h-2.4zM102.7 7V.2H101v8.1h5.8V7z"
          fill="currentColor"
        />
      </svg>
    </Link>
  )
}

export default Logo
