import Link from 'next/link'

// Components
import { Button } from '@components/ui/button'
// Images
import CarImage from '@assets/images/about-hero-img.jpeg'
import { SearchIcon } from 'lucide-react'
import Image from 'next/image'
// Types
import { SearchCarList } from '@/@types/types'
// Utils
import { useTranslation } from '@/app/i18n/client'

interface SearchCarProps {
  lng: string
}

const SearchCar: React.FC<SearchCarProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'translation')
  const searchCarList: SearchCarList = {
    title: t('About.searchCarTitle'),
    description: t('About.searchCarDescription'),
    href: '',
    buttonText: t('About.searchCarButton'),
    alt: 'car-image',
  }

  return (
    <div className="text-md relative flex items-center py-8 max-lg:flex-col max-lg:gap-4 max-lg:text-center">
      <div className="w-full lg:w-9/12">
        <Image
          src={CarImage}
          className="h-full w-full rounded-2xl"
          alt={searchCarList.alt}
        />
      </div>

      <div className="right-0 max-w-xl lg:absolute lg:max-w-96">
        {/* Title */}
        <h2 className="text-4xl font-bold text-blue-500 dark:text-white max-sm:text-2xl">
          {searchCarList.title}
        </h2>

        {/* Description */}
        <div className="mb-9 mt-7 leading-6 text-zinc-500 drop-shadow-xl dark:text-zinc-400 max-lg:text-lg max-sm:mb-7 max-sm:mt-5 max-sm:text-sm">
          <p>{searchCarList.description}</p>
        </div>

        {/* Link */}
        <div>
          <Link href={searchCarList.href}>
            <Button className="gap-2 bg-blue-500 px-5 py-6 font-medium text-white max-sm:px-3 max-sm:py-4 max-sm:text-xs">
              <SearchIcon className="size-5" />
              {searchCarList.buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default SearchCar
