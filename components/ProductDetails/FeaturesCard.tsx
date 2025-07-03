'use client'

// Images
import SteeringWheelImage from '@assets/images/steering-wheel.svg'
import DrivingTestImage from '@assets/images/driving-test.svg'
import AccidentImage from '@assets/images/accident.svg'
import CheckImage from '@assets/images/check.svg'
import Image from 'next/image'
// Types
import { featuresCard } from '@/@types/types'
// Utils
import { useTranslation } from '@/app/i18n/client'

interface FeaturesCardProps {
  lng: string
}

const FeaturesCard: React.FC<FeaturesCardProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'translation')
  const featuresCard: featuresCard[] = [
    {
      description: t('ProductDetails.featuresCardDescription1'),
      image: CheckImage,
      alt: '/',
    },
    {
      description: t('ProductDetails.featuresCardDescription2'),
      image: SteeringWheelImage,
      alt: '/',
    },
    {
      description: t('ProductDetails.featuresCardDescription3'),
      image: DrivingTestImage,
      alt: '/',
    },
    {
      description: t('ProductDetails.featuresCardDescription4'),
      image: AccidentImage,
      alt: '/',
    },
  ]

  return (
    <div>
      <div className="grid grid-cols-4 gap-3 rounded-xl border border-zinc-200 bg-slate-100 p-6 dark:border-none dark:bg-main-600 max-sm:grid-cols-2 max-sm:gap-3">
        {featuresCard.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 text-center text-sm"
          >
            <div className="flex h-20 w-20 rounded-xl bg-slate-300 dark:bg-main-700">
              <Image
                className="m-auto object-cover"
                src={item.image}
                alt={item.alt}
              />
            </div>

            <div className="max-w-40 font-medium text-zinc-700 dark:text-white dark:opacity-75">
              <span>{item.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default FeaturesCard
