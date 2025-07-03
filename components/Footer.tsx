'use client'

// Images
import Container from '@components/Container'
import FacebookLogo from '@assets/images/icons/facebook.svg'
import XLogo from '@assets/images/icons/twitter.svg'
import InstagramLogo from '@assets/images/icons/instagram.svg'
import YoutubeLogo from '@assets/images/icons/youtube.svg'
import LightLogo from '@assets/images/logos/promesolutions.svg'
import { Mail, MapPinIcon, Send, Smartphone } from 'lucide-react'
import Image from 'next/image'
// Components

import { Button } from '@components/ui/button'
import Selectbox from '@components/Selectbox'
import { Input } from '@components/ui/input'
// Types
import { SocialMediaLinkType } from '@/@types/types'
// Utils
import { useTranslation } from '@/app/i18n/client'
import LanguageSwitcher from './LanguageSwitcher'

interface FooterProps {
  lng: string
}

interface Direction {
  title: string
  items: { label: string; href: string }[]
}
const Footer: React.FC<FooterProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'translation')
  const directions: Direction[] = [
    {
      title: t('Footer.title2'),
      items: [
        { label: t('Footer.description2'), href: '/' },
        { label: t('Footer.description3'), href: '/contact' },
        { label: t('Footer.description4'), href: '/about' },
        { label: t('Footer.description5'), href: '' },
        { label: t('Footer.description6'), href: '' },
      ],
    },

    {
      title: t('Footer.title3'),
      items: [
        { label: t('Footer.description7'), href: '#blog' },
        { label: t('Footer.description8'), href: '#a' },
        { label: t('Footer.description9'), href: '#a' },
        { label: t('Footer.description10'), href: '#a' },
        { label: t('Footer.description11'), href: '#a' },
      ],
    },
    {
      title: t('Footer.title4'),
      items: [
        { label: t('Footer.description12'), href: '#a' },
        { label: t('Footer.description13'), href: '#a' },
        { label: t('Footer.description14'), href: '#a' },
        { label: t('Footer.description15'), href: '#a' },
      ],
    },
  ]

  const socialMeidas: SocialMediaLinkType[] = [
    {
      name: 'Facebook',
      src: FacebookLogo,
      href: 'https://www.dnp.io',
    },
    {
      name: 'X',
      src: XLogo,
      href: 'https://www.dnp.io',
    },
    {
      name: 'Instagram',
      src: InstagramLogo,
      href: 'https://www.dnp.io',
    },
    {
      name: 'Instagram',
      src: YoutubeLogo,
      href: 'https://www.dnp.io',
    },
  ]

  return (
    <div className="mt-10 w-full bg-slate-200 pb-6 dark:bg-main-600 lg:pt-2 ">
      <Container>
        {/* Head */}
        <div className="flex w-full items-center justify-between gap-6 border-b border-zinc-300 py-6 dark:border-zinc-600">
          <Image src={LightLogo} alt="logo" className="w-32" />
          <div className="flex items-center gap-6 ">
            <LanguageSwitcher
              lng={lng}
              className="py-2 text-zinc-700 dark:text-slate-300 dark:hover:!text-white"
            />
          </div>
        </div>

        <div className="w-full pt-10">
          <div className="flex w-full flex-col items-start justify-between gap-10 lg:flex-row  lg:gap-20">
            {/* Newsletter */}
            <form className=" flex w-full max-w-72 flex-col gap-2 max-lg:max-w-full md:mx-auto">
              <h3 className="text-xl font-semibold text-zinc-700 dark:text-white">
                {t('Footer.title1')}
              </h3>

              <p className="text-sm text-zinc-500 dark:text-gray-400 ">
                {t('Footer.description1')}
              </p>

              <div className="relative mt-2 w-full">
                <Input
                  type="email"
                  className="h-14 border-slate-500 bg-slate-300 pl-9 text-zinc-600 !ring-0 !ring-offset-0 placeholder:text-zinc-600 dark:border-gray-500 dark:bg-main-700 dark:text-gray-400"
                  placeholder={t('Footer.placeholder')}
                />

                <Button className="absolute right-2 top-2 h-10 w-10 bg-blue-600 !px-2 !py-2 hover:bg-blue-700">
                  <Send className="h-5 w-5 text-white" />
                </Button>

                <Mail className="absolute left-3 top-5 size-4 text-zinc-600 dark:text-gray-400" />
              </div>
            </form>

            {/* Links */}
            <div className="grid w-full grid-cols-1 justify-between max-lg:border-t  max-lg:border-gray-700 max-lg:pt-10 max-md:gap-10 max-md:text-start md:flex">
              {directions.map((direction, index) => (
                <div
                  className="w-fit max-w-48 text-start max-lg:col-span-1"
                  key={index}
                >
                  <h3 className="mb-3 font-bold text-zinc-700 dark:text-white">
                    {direction.title}
                  </h3>

                  <div className="flex flex-col justify-start gap-2 text-start text-sm ">
                    {direction.items.map((item, itemIndex) => (
                      <a
                        className="hover:text-dnp-500 inline-block text-zinc-500 transition-all hover:text-zinc-800 hover:opacity-100 dark:text-white dark:opacity-70"
                        key={itemIndex}
                        href={item.href}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              {/* Contact */}
              <div className="w-fit max-w-48 text-start max-lg:col-span-1">
                <div className="flex flex-col justify-start gap-3 text-start text-sm ">
                  <div className="text-whtie flex items-center gap-3 text-zinc-700 dark:text-white">
                    <Smartphone className="h-5 w-5 text-blue-600" /> (552)
                    727-3780
                  </div>

                  <div className="text-whtie flex items-center gap-3  text-zinc-700 dark:text-white">
                    <Mail className="h-5 w-5 text-blue-600" />
                    example@email.com
                  </div>

                  {/* Social Media */}
                  <div className="flex items-center justify-center gap-4 lg:mt-2">
                    {socialMeidas.map((mediaItem, index) => (
                      <a
                        className="rounded-full bg-main-700 p-2 transition-all hover:bg-blue-600"
                        key={index}
                        href={mediaItem.href}
                      >
                        <Image
                          width={30}
                          height={30}
                          src={mediaItem.src}
                          alt={mediaItem.name}
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 flex w-full items-center justify-between max-lg:flex-col max-lg:text-center ">
          <p className="text-sm text-zinc-500 dark:text-gray-500">
            {t('Footer.copyright')}
          </p>

          <p className="text-sm text-zinc-500 dark:text-gray-500">
            {t('Footer.terms')}
          </p>
        </div>
      </Container>
    </div>
  )
}

export default Footer
