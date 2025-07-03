'use client'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import Link from 'next/link'
// Images
import Logo from '@assets/images/logos/promesolutions.svg'
import { Menu, ChevronDown, X } from 'lucide-react'
import Image from 'next/image'
// Components
import LanguageSwitcher from '@components/LanguageSwitcher'
import { Disclosure, Popover } from '@headlessui/react'
import DarkModeToggle from '@components/ThemeSwitcher'
import Container from '@components/Container'
import Dropdown from '@components/Dropdown'
// Types
import { NavigationItem } from '@/@types/types'
import { usePathname } from 'next/navigation'

interface NavbarProps {
  theme?: 'dark' | 'light'
  lng: string
}

const Navbar: React.FC<NavbarProps> = ({ theme = 'dark', lng }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const navigation: NavigationItem[] = [
    {
      name: 'Home',
      href: '/',
      submenu: [
        { href: 'a', title: 'Profile' },
        { href: 'a', title: 'Profile' },
        { href: 'a', title: 'Profile' },
      ],
    },
    {
      name: 'Catalog',
      href: '/about',
      submenu: [
        { href: 'a', title: 'Profile' },
        { href: 'a', title: 'Profile' },
        { href: 'a', title: 'Profile' },
      ],
    },
    { name: 'Pages', href: '/contact' },
    { name: 'Vendor', href: '/blog' },
    {
      name: 'About',
      href: '/search',
      submenu: [
        { href: 'a', title: 'Profile' },
        { href: 'a', title: 'Profile' },
        { href: 'a', title: 'Profile' },
      ],
    },
    { name: 'Contact', href: '/faq' },
  ]

  useEffect(() => {
    if (isMenuOpen) {
      document.getElementsByTagName('body')[0].style.maxHeight = '100dvh'
      document.getElementsByTagName('body')[0].style.overflow = 'hidden'
      window.scrollTo(0, 0)
    } else {
      document.getElementsByTagName('body')[0].style.maxHeight = 'unset'
      document.getElementsByTagName('body')[0].style.overflow = 'unset'
      window.scrollTo(0, 0)
    }
  }, [isMenuOpen])

  return (
    <Container>
      <Popover as="header" className={({ open }) => clsx('bg-transparent ')}>
        {({ open }) => (
          <>
            <div
              className={clsx(
                'bg-white px-2 py-2.5 text-zinc-700 dark:bg-main-700 dark:text-white',
              )}
            >
              <div className="relative flex w-full items-center justify-between gap-2 ">
                {/* Logo */}
                <div className="mr-auto flex flex-shrink-0 items-center">
                  <a href="/">
                    <Image
                      src={Logo}
                      alt="Logo"
                      className="h-16 w-fit object-cover max-sm:h-12"
                    />
                  </a>
                </div>

                {/* Navigation */}
                <div
                  className={clsx(
                    'flex w-full items-center justify-center gap-6 py-4 max-lg:hidden',
                    {
                      'text-zinc-700 dark:text-white': theme === 'light',
                    },
                  )}
                >
                  {navigation.map((item, index) =>
                    item.submenu ? (
                      <Dropdown
                        className="!text-sm !font-bold text-zinc-600 transition-all hover:text-zinc-500 dark:text-gray-400 dark:hover:text-white"
                        items={item.submenu}
                        key={index}
                        title={item.name}
                      />
                    ) : (
                      <Link
                        className="text-zinc-500 transition-all hover:text-black dark:text-gray-400 dark:hover:text-white"
                        key={index}
                        href={item.href}
                      >
                        <p className="!text-sm !font-bold">{item.name}</p>
                      </Link>
                    ),
                  )}
                </div>

                <div className="flex items-center justify-end max-lg:flex-row-reverse max-lg:gap-4 ">
                  {/* Mobile menu button */}
                  <Popover.Button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="relative  inline-flex items-center justify-center rounded-md p-2 text-zinc-700 outline-none transition-all dark:text-gray-400 dark:hover:text-white lg:hidden"
                  >
                    <span className="absolute -inset-0.5" />
                    {open ? (
                      <X className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Menu className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Popover.Button>

                  {/* Account */}
                  <div className="flex items-center gap-6 ">
                    <DarkModeToggle />
                    <LanguageSwitcher className="max-lg:hidden" lng={lng} />
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu*/}
            <div
              className={clsx(
                'absolute z-50 h-full w-full bg-white px-2 text-zinc-500 duration-300 dark:bg-main-700 dark:text-white lg:hidden',
                open ? 'right-0' : '-right-full',
              )}
              aria-label="Global"
            >
              <div className="space-y-2 py-6">
                {navigation.map((item, index) =>
                  item.submenu ? (
                    <Disclosure key={index} as="div">
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg p-2 pl-3 font-semibold leading-7 text-zinc-700 transition-all duration-100 dark:text-gray-400 dark:hover:bg-main-600 dark:hover:text-white">
                            {item.name}
                            <ChevronDown
                              className={clsx(
                                open ? 'rotate-180' : '',
                                'h-5 w-5 flex-none',
                              )}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>

                          <Disclosure.Panel className="mt-2 space-y-2">
                            {item.submenu &&
                              item.submenu.map((item, index) => (
                                <Disclosure.Button
                                  key={index}
                                  as="a"
                                  href={item.href}
                                  className="ml-2 block rounded-lg p-2 text-sm font-semibold leading-7 text-zinc-700 transition-all duration-100 dark:text-gray-400 dark:hover:bg-main-600 dark:hover:text-white"
                                >
                                  {item.title}
                                </Disclosure.Button>
                              ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ) : (
                    <Link
                      className="flex w-full items-center justify-between rounded-lg py-2 pl-3 font-bold leading-7 text-zinc-700 transition-all duration-100 dark:text-gray-400 dark:hover:bg-main-600 dark:hover:text-white"
                      key={item.name}
                      href={item.href}
                    >
                      {item.name}
                    </Link>
                  ),
                )}
              </div>

              {/* Language Switcher */}

              <div className="border-t border-gray-700 py-6">
                <div className="mr-auto flex max-w-3xl items-center px-4 sm:px-6">
                  <div>
                    {/* Language Selector */}
                    <LanguageSwitcher
                      className="!w-56 !justify-start rounded-md "
                      lng={lng}
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Popover>
    </Container>
  )
}

export default Navbar
