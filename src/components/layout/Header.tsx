import { Hexagon } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { LinkObject } from './types'

const links: LinkObject[] = [
  {
    to: '/projects',
    text: 'Projects',
  },
  {
    to: '/about',
    text: 'About',
  },
  {
    to: '/contact',
    text: 'Contact',
  },
]

function Header() {
  const location = useLocation()

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Hexagon className="h-6 w-6" />
        </Link>
        {links.map(({ to, text }: LinkObject) => {
          const className = `${location.pathname === to ? 'text-foreground' : 'text-muted-foreground'} transition-colors hover:text-foreground`
          return (
            <Link to={to} className={className}>
              {text}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}

export default Header
