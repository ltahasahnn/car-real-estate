import clsx from 'clsx'

// Images
import FeaturesImage1 from '@assets/images/about-features-1.svg'
import FeaturesImage2 from '@assets/images/about-features-2.svg'
import FeaturesImage3 from '@assets/images/about-features-3.svg'
import Image from 'next/image'
// Components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@components/ui/carousel'
// Types
import { GrowingFastProps } from '@/@types/types'
// Utils
import { useTranslation } from '@/app/i18n/client'

interface GrowingFast {
  lng: string
}

const GrowingFast: React.FC<GrowingFast> = ({ lng }) => {
  const { t } = useTranslation(lng, 'translation')
  const growingFastList: GrowingFastProps = {
    title: t('About.growingFastTitle'),
    items: [
      {
        image: FeaturesImage1,
        alt: 'features-image',
        title: t('About.growingFastSubTitle1'),
        description: t('About.growingFastDescription1'),
      },
      {
        image: FeaturesImage2,
        alt: 'features-image',
        title: t('About.growingFastSubTitle2'),
        description: t('About.growingFastDescription2'),
      },
      {
        image: FeaturesImage3,
        alt: 'features-image',
        title: t('About.growingFastSubTitle3'),
        description: t('About.growingFastDescription3'),
      },
    ],
  }
  return (
    <div className="w-full space-y-10 py-12 text-center">
      {/* Title */}
      <h2 className="text-4xl font-bold max-lg:text-3xl max-sm:text-2xl">
        {growingFastList.title}
      </h2>

      <Carousel className="w-full !border-none">
        <CarouselContent className="m-0 flex w-full lg:gap-5">
          {growingFastList.items.map((item, index) => (
            <CarouselItem
              key={index}
              className="h-64 rounded-xl border border-zinc-200 pl-0 dark:border-none max-lg:px-1.5 sm:basis-1/2 sm:max-md:h-72 lg:shrink lg:basis-1/3"
            >
              <div
                key={index}
                className="flex h-full flex-col items-center justify-center gap-3 rounded-xl bg-slate-100 p-6 text-zinc-700 dark:bg-main-600 dark:text-white"
              >
                <Image
                  src={item.image}
                  className="size-16 rounded-lg border border-zinc-300 bg-slate-300 p-3.5 dark:border-none dark:bg-main-700"
                  alt={item.alt}
                />

                {/* SubTitle */}
                <div className="mt-1.5 text-2xl font-bold max-sm:text-xl">
                  <h2>{item.title}</h2>
                </div>

                {/* Description */}
                <div className="text-sm text-zinc-500 dark:text-gray-400 max-sm:text-xs">
                  <p>{item.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className={clsx('lg:hidden', '!left-3')} />
        <CarouselNext className={clsx('lg:hidden', '!right-3')} />
      </Carousel>
    </div>
  )
}
export default GrowingFast
