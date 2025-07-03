import clsx from 'clsx'
import React, { ReactNode } from 'react'

interface BadgeProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

const Badge: React.FC<BadgeProps> = ({ className, size = 'md', children }) => {
  return (
    <div
      className={clsx('w-fit rounded-md text-white', className, {
        'p-0.5 text-xs': size === 'sm',
        'px-2 py-1 text-xs': size === 'md',
        'px-4 py-2 text-sm': size === 'lg',
      })}
    >
      {children}
    </div>
  )
}

export default Badge
