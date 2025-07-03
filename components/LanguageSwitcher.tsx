'use client'
import clsx from 'clsx'

// Images
import TrIcon from '@assets/images/icons/turkiye.svg'
import UsIcon from '@assets/images/icons/usa.svg'
// Components
import { Fragment } from 'react'
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import Image from 'next/image'
// Types
import { LanguageSwitcherProps } from '@/@types/types'
import { ChevronDown } from 'lucide-react'
import { usePathname } from 'next/navigation'

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  lng,
  className,
}) => {
  const languages = ['tr', 'en']
  enum Languages {
    tr = 'Turkish',
    en = 'English',
  }

  const path = usePathname()
  const lngPath = path.slice(3)
  return (
    <Menu as="div" className="relative flex-shrink-0 text-left">
      <div>
        <Menu.Button
          className={clsx(
            'inline-flex w-full items-center justify-center gap-x-1.5 transition-all',
            className,
          )}
        >
          {lng === 'tr' ? (
            <Image width={30} height={30} alt="Turkiye Icon" src={TrIcon} />
          ) : (
            <Image width={30} height={30} alt="Us Icon" src={UsIcon} />
          )}

          <p>{Languages[lng as keyof typeof Languages]}</p>

          <ChevronDown className="-mr-1 size-4" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-i "
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md border border-neutral-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div>
            <Menu.Item>
              {({ active }) => (
                <div>
                  {languages
                    .filter((l) => lng !== l)
                    .map((l, index) => {
                      return (
                        <span className="w-full" key={l}>
                          {index > 0 && ' or '}
                          <Link href={`/${l}${lngPath}`}>
                            <button
                              className={clsx(
                                active
                                  ? 'bg-gray-100 text-gray-900 dark:bg-main-600 dark:text-white'
                                  : 'bg-white text-gray-700',
                                ' flex w-full items-center gap-2  rounded-md px-4 py-2.5 text-start text-sm transition-all dark:bg-main-600 dark:text-gray-400',
                              )}
                            >
                              {l === 'tr' ? (
                                <Image
                                  width={30}
                                  height={30}
                                  alt="Turkiye Icon"
                                  src={TrIcon}
                                />
                              ) : (
                                <Image
                                  width={30}
                                  height={30}
                                  alt="Us Icon"
                                  src={UsIcon}
                                />
                              )}
                              {Languages[l as keyof typeof Languages]}
                            </button>
                          </Link>
                        </span>
                      )
                    })}
                </div>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default LanguageSwitcher
