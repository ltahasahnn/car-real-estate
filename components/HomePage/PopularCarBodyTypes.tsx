'use client'

// Components
import BodyType from '@/components/HomePage/BodyType'
// Images
import ConvertibleImage from '@assets/images/convertible.svg'
import CrossoverImage from '@assets/images/crossover.svg'
import SportCoupeImage from '@assets/images/sport.svg'
import CompactImage from '@assets/images/compact.svg'
import PickupImage from '@assets/images/pickup.svg'
import FamilyMPVImage from '@assets/images/mpv.svg'
import SedanImage from '@assets/images/sedan.svg'
import WagonImage from '@assets/images/wagon.svg'
import CoupeImage from '@assets/images/coupe.svg'
import SuvImage from '@assets/images/suv.svg'
import { ArrowRight } from 'lucide-react'
// Utils
import { useTranslation } from '@/app/i18n/client'

interface PopularCarBodyTypes {
  lng: string
}

const PopularCarBodyTypes: React.FC<PopularCarBodyTypes> = ({ lng }) => {
  const { t } = useTranslation(lng, 'translation')
  const list = [
    {
      image: SedanImage,
      title: 'Sedan',
      alt: 'sedan',
    },
    {
      image: SuvImage,
      title: 'Suv',
      alt: 'suv',
    },
    {
      image: WagonImage,
      title: 'Wagon',
      alt: 'wagon',
    },
    {
      image: CrossoverImage,
      title: 'Crossover',
      alt: 'crossover',
    },
    {
      image: CoupeImage,
      title: 'Coupe',
      alt: 'coupe',
    },
    {
      image: PickupImage,
      title: 'Pickup',
      alt: 'pickup',
    },
    {
      image: SportCoupeImage,
      title: 'Sport Coupe',
      alt: 'sport-coupe',
    },
    {
      image: CompactImage,
      title: 'Compact',
      alt: 'compact',
    },
    {
      image: ConvertibleImage,
      title: 'Convertible',
      alt: 'covertible',
    },
    {
      image: FamilyMPVImage,
      title: 'Family MPV',
      alt: 'family-mpv',
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between text-zinc-700 dark:text-white max-sm:flex-col max-sm:items-start max-sm:gap-2">
        <h2 className="text-2xl font-semibold max-sm:text-xl">
          {t('PopularCarBodyType.title')}
        </h2>

        <p className="flex cursor-pointer items-center gap-2 text-sm font-normal text-zinc-700 duration-200 hover:text-zinc-400 dark:text-slate-400 dark:hover:text-white">
          {t('PopularCarBodyType.link')} <ArrowRight className="h-4 w-4" />
        </p>
      </div>

      <div className="grid shrink-0 grid-cols-5 gap-6 max-lg:grid-cols-4 max-md:grid-cols-3 max-md:gap-4 max-sm:grid-cols-2">
        {list.map((item, index) => (
          <BodyType
            key={index}
            alt={item.alt}
            title={item.title}
            image={item.image}
          />
        ))}
      </div>
    </div>
  )
}
export default PopularCarBodyTypes
