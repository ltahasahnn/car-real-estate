'use client'

// Images
import CarImage from '@assets/images/hero-img.png'
import Image from 'next/image'
// Utils
import { useTranslation } from '@/app/i18n/client'

interface HeroProps {
  lng: string
}

const Hero: React.FC<HeroProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'translation')

  return (
    <div className="flex items-center justify-center max-md:flex-col max-md:gap-8">
      <div>
        <h2 className="text-6xl font-bold leading-[70px] tracking-wide text-zinc-700 dark:text-white max-xl:text-5xl max-md:font-semibold max-sm:text-4xl">
          {t('hero.title')}
        </h2>
        <p className="text-md mt-6 text-zinc-700 opacity-70 dark:text-white md:max-w-sm">
          {t('hero.description')}
        </p>
      </div>
      <div className="relative h-full w-full lg:top-20">
        <Image src={CarImage} alt="car-image" />
      </div>
    </div>
  )
}
export default Hero
