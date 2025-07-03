import Link from 'next/link'
// Components
import { Button } from '@components/ui/button'
// Images
import HumanImage from '@assets/images/02.jpg'
import { SearchIcon } from 'lucide-react'
import Image from 'next/image'
// Types
import { ConditionsProps } from '@/@types/types'
// Utils
import { useTranslation } from '@/app/i18n/client'

interface Conditions {
  lng: string
}

const Conditions: React.FC<Conditions> = ({ lng }) => {
  const { t } = useTranslation(lng, 'translation')
  const conditionsList: ConditionsProps = {
    image: HumanImage,
    alt: 'hummand-image',
    title: t('About.conditionsTitle'),
    description: t('About.conditionsDescription'),
    buttonText: t('About.conditionsButton'),
    href: '',
  }

  return (
    <div className="grid grid-cols-2 gap-10 py-20 max-lg:grid-cols-1 max-lg:text-center">
      <div className="max-lg:aspect-[4/2] lg:order-1">
        <Image
          className="h-full w-full rounded-xl object-cover"
          src={conditionsList.image}
          alt={conditionsList.alt}
        />
      </div>

      <div className="m-auto flex max-w-lg flex-col gap-6 max-lg:max-w-3xl max-lg:gap-8">
        {/* Title */}
        <h2 className="text-4xl font-bold text-zinc-700 dark:text-white max-lg:text-3xl max-sm:text-2xl">
          {conditionsList.title}
        </h2>

        {/* Description */}
        <div className="text-zinc-500 dark:text-gray-400 max-lg:text-lg max-sm:text-sm">
          <p>{conditionsList.description}</p>
        </div>

        {/* Link */}
        <div>
          <Link href={conditionsList.href}>
            <Button className="gap-2 bg-blue-500 px-5 py-6 font-medium text-white max-sm:px-3 max-sm:py-4 max-sm:text-xs">
              <SearchIcon className="size-5" />
              {conditionsList.buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Conditions
