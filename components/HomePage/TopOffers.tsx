'use client'

// Images
import MercedesImage from '@assets/images/examples/mercedes.jpeg'
import MercedesImage2 from '@assets/images/examples/mercedes2.jpeg'
import MercedesImage3 from '@assets/images/examples/mercedes3.jpeg'
import { ArrowRight } from 'lucide-react'
// Components
import ProductCard from '@/components/HomePage/ProductCard'
// Types
import { ProductType } from '@/@types/types'
// Utils
import { useTranslation } from '@/app/i18n/client'

interface TopOffersProps {
  lng: string
}

const TopOffers: React.FC<TopOffersProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'translation')
  const product: ProductType = {
    images: [
      {
        src: MercedesImage,
        alt: 'Image description for the first image',
      },
      {
        src: MercedesImage2,
        alt: 'Image description for the second image',
      },
      {
        src: MercedesImage3,
        alt: 'Image description for the second image',
      },
    ],
    produceDate: 2023,
    situation: 'used',
    certified: true,
    name: 'Mercedes Benz Convertible Coupe',
    price: 25000,
    location: 'Los Angeles, CA',
    mileage: 50000,
    gearType: t('TopOffersProductCard.gearType'),
    fuelType: t('TopOffersProductCard.fuelType'),
  }

  return (
    <div>
      <div className="items mb-6 flex justify-between">
        <h2 className="text-2xl font-semibold text-zinc-700 dark:text-white max-sm:text-xl">
          {t('TopOffers.title')}
        </h2>

        <p className="ml-4 flex cursor-pointer items-center gap-2 text-sm font-normal text-zinc-700 transition-all hover:text-zinc-400 dark:text-slate-400 dark:hover:text-white">
          {t('TopOffers.link')} <ArrowRight className="h-4 w-4" />
        </p>
      </div>

      <div className="flex items-center gap-6 max-lg:flex-col">
        <ProductCard lng={lng} product={product} />

        <div className="w-full space-y-6 ">
          <ProductCard lng={lng} variant="horizontal" product={product} />
          <ProductCard lng={lng} variant="horizontal" product={product} />
        </div>
      </div>
    </div>
  )
}

export default TopOffers
