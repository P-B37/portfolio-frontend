import Link from 'next/link'
import { cn } from '@/lib/utils'
import { navigation } from './nav-config'

interface NavLinksProps {
  direction?: 'row' | 'column'
  onClick?: () => void
}

export function NavLinks({
  direction = 'row',
  onClick,
}: NavLinksProps) {
  const isColumn = direction === 'column'

  return (
    <nav
      className={cn(
        'flex',
        isColumn
          ? 'flex-col space-y-3'
          : 'items-center space-x-6 text-sm font-medium'
      )}
    >
      {navigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClick}
          className={cn(
            'transition-colors',
            isColumn
              ? 'text-muted-foreground hover:text-primary'
              : 'text-foreground/60 hover:text-foreground/80'
          )}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}
