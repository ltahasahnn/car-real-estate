'use client'

import Image from 'next/image'
import Link from 'next/link'
// Types
import { CommunicationProps } from '@/@types/types'

const Communication: React.FC<CommunicationProps> = ({ communication }) => {
  return (
    <div className="flex gap-5">
      <div className="shrink-0">
        <Image
          src={communication.icon}
          alt={communication.alt}
          className="size-8"
        />
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-bold">{communication.title}</h2>

        <div className="max-w-sm text-zinc-700 dark:text-gray-400 max-lg:max-w-md max-sm:text-sm">
          <p>
            {communication.description}
            <Link
              href={communication.href}
              className="pl-1 text-blue-500 underline duration-200 hover:no-underline"
            >
              {communication.link}
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Communication
