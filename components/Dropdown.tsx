import { ReactElement } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

// Images
import { ChevronDownIcon } from 'lucide-react'
// Components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@components/ui/dropdown-menu'
// Types
import { DropdownItem } from '@/@types/types'

interface DropdownProps {
  items: DropdownItem[] | { title: string; href: string }[]
  className?: string
  icon?: ReactElement
  title: string
}

const Dropdown: React.FC<DropdownProps> = ({
  items,
  icon,
  title,
  className,
}) => {
  return (
    <div className={clsx('border-gray-500')}>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger
            className={clsx(
              'flex h-full cursor-pointer items-center justify-center gap-2 text-gray-500 transition-all hover:text-black dark:text-gray-400 dark:hover:text-white',
              className,
            )}
            asChild
          >
            <div>
              {icon}
              <p>{title}</p>
              <ChevronDownIcon className="h-4 w-4" />
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="min-w-40 rounded-lg text-zinc-700 dark:border-gray-500 dark:bg-main-700 dark:text-slate-400">
            <DropdownMenuGroup>
              {items &&
                items.map((item, index) => (
                  <Link href={item.href ? item.href : '#'} key={index}>
                    <DropdownMenuItem className="cursor-pointer text-gray-400 hover:text-black dark:hover:bg-main-600 dark:hover:text-white">
                      {item.title}
                    </DropdownMenuItem>
                  </Link>
                ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
export default Dropdown
