'use client'

// Components
import PrivateSeller from '@components/ProductDetails/PrivateSeller'
import Newsletter from '@components/ProductDetails/Newsletter'
import Badge from '@components/ui/Badge'
// Images
import { CircleGaugeIcon, MapPinIcon } from 'lucide-react'
// Types
import { DetailsProps } from '@/@types/types'
// Utils
import { useTranslation } from '@/app/i18n/client'

const Details: React.FC<DetailsProps> = ({
  certified,
  situation,
  price,
  miles,
  location,
  lng,
}) => {
  const { t } = useTranslation(lng, 'translation')
  return (
    <div className="h-full space-y-6">
      <div className="flex flex-col justify-center gap-6 max-md:hidden">
        {/* Informations */}
        <div className="flex items-center gap-2 *:!text-base">
          {situation === 'new' ? (
            <Badge className="bg-red-600 !py-1 px-3">
              {t('typeSwitcher.situation1')}
            </Badge>
          ) : (
            <Badge className="bg-blue-600 !py-1 px-3">
              {t('typeSwitcher.situation2')}
            </Badge>
          )}
          {certified && (
            <Badge className="bg-emerald-500 !py-1 px-3">
              {t('typeSwitcher.certified1')}
            </Badge>
          )}
        </div>

        {/* Price */}
        <div>
          <h2 className="text-3xl font-bold text-zinc-700 dark:text-white max-lg:text-2xl">
            ${price}
          </h2>
        </div>
      </div>

      {/* Location & Miles */}
      <div className="flex max-md:hidden">
        <div className="flex items-center gap-2 max-lg:text-sm">
          <CircleGaugeIcon className="size-5" />

          <span>
            {miles} {t('ProductDetails.miles')}
          </span>
          <div className="mx-2 h-full rounded-full border border-zinc-700"></div>
          <MapPinIcon className="size-5" />

          <span>{location}</span>
        </div>
      </div>

      {/* PrivateSeller */}
      <PrivateSeller lng={lng} />

      {/* Newsletter */}
      <Newsletter lng={lng} />
    </div>
  )
}
export default Details
