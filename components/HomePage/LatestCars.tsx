'use client'
import clsx from 'clsx'
import { useState } from 'react'

// Images
import NissanImage from '@assets/images/examples/nissan.jpeg'
import { ArrowRight } from 'lucide-react'
// Components
import ProductCard from '@/components/HomePage/ProductCard'
import { Button } from '@components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
// Types
import { ProductType } from '@/@types/types'
import { useTranslation } from '@/app/i18n/client'

interface LatestCarsProps {
  lng: string
}

const LatestCars: React.FC<LatestCarsProps> = ({ lng }) => {
  const [carType, setCarType] = useState<'new' | 'used'>('new')
  const buttonClass1: string =
    'bg-slate-200 border border-zinc-300 dark:border-main-600 text-blue-500 hover:bg-slate-200 dark:bg-main-600 dark:text-blue-500'
  const buttonClass2: string =
    'bg-slate-100 border border-slate-100 dark:border-main-600 hover:bg-slate-200 text-gray-500 hover:text-blue-500 dark:bg-main-600 dark:text-white dark:hover:bg-main-600 dark:hover:text-blue-500'

  const { t } = useTranslation(lng, 'translation')
  const product: ProductType = {
    images: [
      {
        src: NissanImage,
        alt: 'nissan-image',
      },
      {
        src: NissanImage,
        alt: 'nissan-image',
      },
      {
        src: NissanImage,
        alt: 'nissan-image',
      },
    ],
    produceDate: 2023,
    situation: 'used',
    certified: true,
    name: 'Mercedes Benz Convertible Coupe',
    price: 25000,
    location: 'Los Angeles, CA',
    mileage: 50000,
    gearType: t('LatestCarsProductCard.gearType'),
    fuelType: t('LatestCarsProductCard.fuelType'),
  }

  const navigationButtonClasses =
    'absolute z-20 h-10 w-10 border-none bg-white bg-opacity-40 shadow-md hover:bg-opacity-100 hover:text-blue-500'

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
        {/* Title */}
        <h2 className=" text-2xl font-semibold text-zinc-700 dark:text-white max-sm:text-xl">
          {t('LatestCars.title')}
        </h2>

        {/* Car situation switcher */}
        <div className="flex items-center gap-3">
          <Button
            onClick={() => setCarType('new')}
            className={clsx(carType === 'new' ? buttonClass1 : buttonClass2)}
          >
            {t('typeSwitcher.situation1')}
          </Button>

          <Button
            onClick={() => setCarType('used')}
            className={clsx(carType === 'used' ? buttonClass1 : buttonClass2)}
          >
            {t('typeSwitcher.situation2')}
          </Button>

          <p className="ml-4 flex cursor-pointer items-center gap-2 text-sm font-normal text-zinc-700 transition-all hover:text-zinc-400 dark:text-slate-400 dark:hover:text-white">
            {t('LatestCars.link')} <ArrowRight className="h-4 w-4" />
          </p>
        </div>
      </div>

      {/* Products Slider */}
      <Carousel className="w-full !border-none">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <ProductCard lng={lng} galleryType="static" product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className={clsx(navigationButtonClasses, 'left-2')} />
        <CarouselNext className={clsx(navigationButtonClasses, 'right-2')} />
      </Carousel>
    </div>
  )
}

export default LatestCars
