'use client'
import { useEffect, useState } from 'react'

// Images
import {
  ArrowRightIcon,
  FileText,
  Search,
  SlidersVertical,
  InfoIcon,
  Users,
  Calculator,
} from 'lucide-react'
import RoadLineImage from '@assets/images/road-line.png'
import CarImage from '@assets/images/car.svg'
import Image from 'next/image'
// Utils
import { useTranslation } from '@/app/i18n/client'

interface PromeApartProps {
  lng: string
}

const PromeApart: React.FC<PromeApartProps> = ({ lng }) => {
  const [scrollPosition, setScrollPosition] = useState<number>(0)
  const { t } = useTranslation(lng, 'translation')

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        const scrollTop = window.pageYOffset
        const maxScroll =
          document.documentElement.scrollHeight - window.innerHeight
        let normalizedScrollPosition = 0

        if (scrollTop > 1500) {
          normalizedScrollPosition = Math.max(
            0,
            Math.min(((scrollTop - 1500) * 0.2) / maxScroll, 1),
          )
        }

        setScrollPosition(normalizedScrollPosition)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const maxScroll =
    typeof document !== 'undefined' && typeof window !== 'undefined'
      ? document.documentElement.scrollHeight - window.innerHeight
      : 0

  const transformedValue =
    scrollPosition * maxScroll < 300 && scrollPosition * maxScroll

  const PromeApartList = [
    {
      title: t('PromeApart.subTitle1'),
      text: t('PromeApart.description1'),
      icon: FileText,
    },
    {
      title: t('PromeApart.subTitle2'),
      text: t('PromeApart.description2'),
      icon: Search,
    },
    {
      title: t('PromeApart.subTitle3'),
      text: t('PromeApart.description3'),
      icon: SlidersVertical,
    },
    {
      title: t('PromeApart.subTitle4'),
      text: t('PromeApart.description4'),
      icon: InfoIcon,
    },
    {
      title: t('PromeApart.subTitle5'),
      text: t('PromeApart.description5'),
      icon: Users,
    },
    {
      title: t('PromeApart.subTitle6'),
      text: t('PromeApart.description6'),
      icon: Calculator,
    },
  ]

  return (
    <div className="flex flex-col text-zinc-700 dark:text-white max-md:gap-12">
      <div className="flex flex-wrap justify-between gap-3 max-sm:flex-col max-sm:gap-5">
        <h2 className="text-3xl font-medium max-md:text-2xl">
          {t('PromeApart.title')}
        </h2>

        <div className="ml-auto flex w-fit cursor-pointer items-center gap-2 opacity-70 hover:opacity-100">
          <span className="text-nowrap">{t('PromeApart.link')}</span>
          <ArrowRightIcon className="size-4" />
        </div>
      </div>

      <div className="flex items-center max-md:flex-col max-md:gap-6">
        <div className="flex w-full flex-col gap-6 md:ml-auto md:max-w-md md:text-end">
          {PromeApartList.filter((itm, idx) => idx < 3).map((item, index) => (
            <div
              key={index}
              className="flex h-24 gap-4 max-md:h-fit max-md:flex-row-reverse"
            >
              <div className="w-full">
                <h2 className="mb-1 text-lg font-semibold dark:font-medium">
                  {item.title}
                </h2>
                <p className="text-sm tracking-wide text-zinc-700 opacity-75 dark:font-medium dark:text-white dark:opacity-50">
                  {item.text}
                </p>
              </div>

              <div className="mt-1">
                <item.icon className="h-6 w-6 text-blue-500" />
              </div>
            </div>
          ))}
        </div>

        <div className="relative z-0 h-[30rem] w-full max-w-72 max-xl:max-w-60 max-lg:max-w-44 max-md:hidden">
          <div
            style={{
              transform: `translate3d(0px, ${transformedValue}px, 0px)`,
              left: '50%',
            }}
            className="left-2/4"
          >
            <Image src={CarImage} className="z-5 mx-auto" alt="" />
          </div>

          <Image
            src={RoadLineImage}
            className="absolute left-2/4 top-0 z-[-1] h-full translate-x-[-50%]"
            alt="roadline"
          />
        </div>

        <div className="flex w-full flex-col gap-6 md:mr-auto md:max-w-md">
          {PromeApartList.filter((_, idx) => idx > 2).map((item, index) => (
            <div key={index} className="flex h-24 gap-4 max-md:h-fit">
              <div className="mt-1">
                <item.icon className="h-6 w-6 text-blue-500" />
              </div>

              <div className="w-full">
                <h2 className="mb-1 text-lg font-semibold dark:font-medium">
                  {item.title}
                </h2>
                <p className="text-sm tracking-wide text-zinc-700 opacity-75 dark:font-medium dark:text-white dark:opacity-50">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PromeApart
