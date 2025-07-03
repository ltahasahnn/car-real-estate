'use client'

// Images
import GooglePlayImage from '@assets/images/google-play-badge-logo-black-and-white.png'
import AppleStoreImage from '@assets/images/available-on-the-app-store-logo-black-and-white.png'
import CarImage from '@assets/images/mobile-app.png'
import Image from 'next/image'
import Link from 'next/link'
// Utils
import { useTranslation } from '@/app/i18n/client'
// Types
import { TopRatedListProps } from '@/@types/types'

interface TopRatedProps {
  lng: string
}

const TopRated: React.FC<TopRatedProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'translation')

  const topRatedList: TopRatedListProps = {
    title: t('TopRated.title'),
    description: t('TopRated.description'),
    items: [
      {
        image: AppleStoreImage,
        alt: 'app-store-image',
        href: '',
      },
      {
        image: GooglePlayImage,
        alt: 'google-play-image',
        href: '',
      },
    ],
  }
  return (
    <div className="mx-auto flex max-w-6xl items-center max-md:flex-col max-md:gap-8 md:justify-between">
      <div className="max-w-lg max-lg:max-w-md max-md:max-w-full max-md:text-center">
        <h2 className="text-3xl font-bold tracking-wider text-zinc-700 dark:text-white max-sm:text-2xl">
          {topRatedList.title}
        </h2>

        <p className="mb-10 mt-6 tracking-wide text-zinc-700 dark:text-white dark:opacity-70">
          {topRatedList.description}
        </p>

        <div className="flex items-center gap-4 max-md:flex-col max-md:justify-center">
          {topRatedList.items.map((item, index) => (
            <div
              key={index}
              className="w-40 gap-4 rounded-lg bg-[rgb(69_64_86)] px-3 py-1 text-zinc-700 dark:text-white max-md:w-full"
            >
              <Link href={item.href} className="h-full w-full">
                <Image
                  src={item.image}
                  className="mx-auto h-12 w-fit object-cover"
                  alt={item.href}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-lg max-lg:max-w-md">
        <Image src={CarImage} className="w-full" alt="car-image" />
      </div>
    </div>
  )
}
export default TopRated
