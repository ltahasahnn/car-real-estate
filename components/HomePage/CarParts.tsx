'use client'
import React, { useState } from 'react'
import clsx from 'clsx'

/* Images */
import HandshakeImage from '@assets/images/handshake.svg'
import BuyersImage from '@assets/images/buyers.svg'
import ChildSeatImage from '@assets/images/04.png'
import ToolsImage from '@assets/images/tools.svg'
import { ChevronRightIcon } from 'lucide-react'
import SeatImage from '@assets/images/01.png'
import TireImage from '@assets/images/02.png'
import DiskImage from '@assets/images/03.png'
import Image from 'next/image'
/* Components */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@components/ui/carousel'
import { Button } from '@components/ui/button'
import { Card, CardContent } from '@components/ui/card'
// Types
import { MarketListProps } from '@/@types/types'
// Utils
import { useTranslation } from '@/app/i18n/client'

interface CarPartProps {
  lng: string
}

const CarParts: React.FC<CarPartProps> = ({ lng }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { t } = useTranslation(lng, 'translation')

  // Carousel Classes
  const CarouselClassName =
    'dark:hover:text-blue-500 hover:text-zinc-800 duration-300 hover:bg-opacity-100 absolute bg-white bg-opacity-10 text-zinc-400 border-none top-[102.5%] translate-y-[0] size-10 border border-zinc-200 !bg-slate-300 dark:border-none dark:!bg-main-500'

  // Market list data
  const MarketList: MarketListProps[] = [
    {
      title: t('CarPart.title1'),
      description: t('CarPart.description1'),
      buttonText: t('CarPart.buttonText1'),
      partList: [
        {
          image: SeatImage,
          description: t('CarPart.subDescription1'),
          alt: t('CarPart.alt1'),
        },
        {
          image: TireImage,
          description: t('CarPart.subDescription2'),
          alt: t('CarPart.alt2'),
        },
        {
          image: DiskImage,
          description: t('CarPart.subDescription3'),
          alt: t('CarPart.alt3'),
        },
        {
          image: ChildSeatImage,
          description: t('CarPart.subDescription4'),
          alt: t('CarPart.alt4'),
        },
      ],
    },
    {
      title: t('CarPart.title2'),
      description: t('CarPart.description2'),
      buttonText: t('CarPart.buttonText2'),
      partList: [
        {
          image: BuyersImage,
          description: t('CarPart.subDescription5'),
          alt: t('CarPart.alt5'),
        },
        {
          image: ToolsImage,
          description: t('CarPart.subDescription6'),
          alt: t('CarPart.alt6'),
        },
        {
          image: HandshakeImage,
          description: t('CarPart.subDescription7'),
          alt: t('CarPart.alt7'),
        },
      ],
    },
  ]

  return (
    <div className="flex text-white max-lg:items-center max-md:flex-col">
      <Carousel className="relative flex w-full flex-col">
        <CarouselContent>
          {MarketList.map((item, index) => (
            <CarouselItem key={index} className="relative">
              <Card className="flex h-fit rounded-xl border border-zinc-200 !bg-slate-100 bg-transparent p-6 text-zinc-600 dark:border-none dark:!bg-main-600 dark:text-white max-md:flex-col max-sm:px-2 max-sm:py-4">
                <CardContent
                  className={clsx(
                    'flex w-full p-6 duration-500 max-md:flex-col max-md:p-4 max-sm:p-2 md:max-h-56 md:min-h-56 md:max-lg:max-h-96 md:max-lg:min-h-96',
                    currentIndex === 1
                      ? 'max-md:!max-h-[24.5rem] max-md:!min-h-[24.5rem]'
                      : '',
                    index === 0
                      ? 'flex items-center gap-10'
                      : 'grid grid-cols-2 items-center max-md:flex max-md:gap-10',
                  )}
                >
                  {/* Title & Description */}
                  <div
                    className={clsx(
                      'w-full max-md:text-center',
                      index === 0
                        ? 'max-xl:max-w-76 h-fit max-w-60'
                        : 'h-fit w-fit',
                    )}
                  >
                    <h2 className="text-3xl font-semibold max-sm:text-2xl">
                      {item.title}
                    </h2>

                    <p className="mb-10 mt-4 opacity-70 max-lg:mb-6 max-sm:mb-4">
                      {item.description}
                    </p>

                    <Button className="w-40 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
                      {item.buttonText}
                      <ChevronRightIcon className="h-6 w-6" />
                    </Button>
                  </div>

                  {/* Part list */}
                  <div
                    className={clsx(
                      'grid w-full',
                      index === 0
                        ? 'grid-cols-4 max-lg:grid-cols-2 max-lg:gap-6 max-sm:gap-x-16'
                        : 'grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-3 max-md:gap-6 max-sm:gap-4',
                    )}
                  >
                    {item.partList.map((part, idx) => (
                      <div
                        key={idx}
                        className="flex h-fit flex-col items-center justify-center gap-5"
                      >
                        <div
                          className={clsx(
                            '',
                            index === 0
                              ? 'h-full max-h-32 min-h-20 w-full min-w-20 cursor-pointer max-md:max-h-36 max-md:max-w-36'
                              : 'h-full w-full rounded-xl border border-zinc-300 bg-slate-200 p-8 dark:border-none dark:bg-main-700 max-sm:max-h-28 max-sm:min-h-16 max-sm:min-w-16 max-sm:max-w-28 max-sm:p-6 sm:max-h-28 sm:max-w-28',
                          )}
                        >
                          <Image
                            src={part.image}
                            className={clsx(
                              'mx-auto h-full max-h-36 w-fit object-cover',
                            )}
                            alt={part.alt}
                          />
                        </div>

                        <h3 className="h-10 text-center font-semibold dark:font-medium max-xl:max-w-28 sm:max-md:max-w-44">
                          {part.description}
                        </h3>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Carousel navigation buttons */}
        <div
          onClick={() =>
            setCurrentIndex((prevIndex) =>
              prevIndex === 0 ? MarketList.length - 1 : prevIndex - 1,
            )
          }
        >
          <CarouselPrevious className={`left-0 ${CarouselClassName}`} />
        </div>
        <div
          onClick={() =>
            setCurrentIndex((prevIndex) => (prevIndex + 1) % MarketList.length)
          }
        >
          <CarouselNext className={`left-12 ${CarouselClassName}`} />
        </div>
      </Carousel>
    </div>
  )
}
export default CarParts
