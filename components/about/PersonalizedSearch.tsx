import Link from 'next/link'

// Components
import { Button } from '@components/ui/button'
// Images
import CarImage from '@assets/images/01.jpg'
import { SearchIcon } from 'lucide-react'
import Image from 'next/image'
// Types
import { PersonalizedSearchProps } from '@/@types/types'
// Utils
import { useTranslation } from '@/app/i18n/client'

interface PersonalizedSearch {
  lng: string
}

const PersonalizedSearch: React.FC<PersonalizedSearch> = ({ lng }) => {
  const { t } = useTranslation(lng, 'translation')
  const personalizedSearchList: PersonalizedSearchProps = {
    image: CarImage,
    alt: 'car-image',
    title: t('About.personalizedTitle'),
    description: t('About.personalizedDescription'),
    buttonText: t('About.personalizedButton'),
    href: '',
  }

  return (
    <div className="grid grid-cols-2 gap-10 py-20 max-lg:grid-cols-1 max-lg:text-center">
      <div className="max-lg:aspect-[4/2]">
        <Image
          className="h-full w-full rounded-xl object-cover"
          src={personalizedSearchList.image}
          alt={personalizedSearchList.alt}
        />
      </div>

      <div className="m-auto flex max-w-lg flex-col gap-6 max-lg:max-w-3xl max-lg:gap-8">
        {/* Title */}
        <h2 className="text-4xl font-bold text-zinc-700 dark:text-white max-lg:text-3xl max-sm:text-2xl">
          {personalizedSearchList.title}
        </h2>

        {/* Description */}
        <div className="text-zinc-500 dark:text-gray-400 max-lg:text-lg max-sm:text-sm">
          <p>{personalizedSearchList.description}</p>
        </div>

        {/* Link */}
        <div>
          <Link href={personalizedSearchList.href}>
            <Button className="gap-2 bg-blue-500 px-5 py-6 font-medium text-white max-sm:px-3 max-sm:py-4 max-sm:text-xs">
              <SearchIcon className="size-5" />
              {personalizedSearchList.buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default PersonalizedSearch
