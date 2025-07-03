import clsx from 'clsx'

// Types
import { SpecificationsProps } from '@/@types/types'
// Images
import { AlertCircleIcon } from 'lucide-react'
// Utils
import { useTranslation } from '@/app/i18n/client'

interface Specifications {
  lng: string
}

const Specifications: React.FC<Specifications> = ({ lng }) => {
  const { t } = useTranslation(lng, 'translation')
  const specifications: SpecificationsProps = {
    title: t('ProductDetails.specificationsTitle'),
    specifications: [
      {
        text: t('ProductDetails.specificationsText1'),
        value: 2018,
      },
      {
        text: t('ProductDetails.specificationsText2'),
        value: t('ProductDetails.specificationsValue1'),
      },
      {
        text: t('ProductDetails.specificationsText3'),
        value: t('ProductDetails.specificationsValue2'),
      },
      {
        text: t('ProductDetails.specificationsText4'),
        value: 20,
        icon: AlertCircleIcon,
        situation: 'Alert',
      },
      {
        text: t('ProductDetails.specificationsText5'),
        value: t('ProductDetails.specificationsValue3'),
      },
      {
        text: t('ProductDetails.specificationsText6'),
        value: 29,
        icon: AlertCircleIcon,
        situation: 'Alert',
      },
      {
        text: t('ProductDetails.specificationsText7'),
        value: t('ProductDetails.specificationsValue4'),
      },
      {
        text: t('ProductDetails.specificationsText8'),
        value: t('ProductDetails.specificationsValue5'),
      },
      {
        text: t('ProductDetails.specificationsText9'),
        value: t('ProductDetails.specificationsValue6'),
      },
      {
        text: t('ProductDetails.specificationsText10'),
        value: t('ProductDetails.specificationsValue7'),
      },
      {
        text: t('ProductDetails.specificationsText11'),
        value: t('ProductDetails.specificationsValue8'),
      },
      {
        text: t('ProductDetails.specificationsText12'),
        value: '2VW821AU9JM754284',
      },
    ],
  }

  const firstHalf = specifications.specifications.filter(
    (_, index) => index % 2 === 0,
  )
  const secondHalf = specifications.specifications.filter(
    (_, index) => index % 2 === 1,
  )

  return (
    <div className="space-y-6 py-12 text-zinc-700 dark:text-white">
      <h2 className="text-2xl font-bold">{specifications.title}</h2>

      <div className="flex flex-wrap gap-6">
        <div className="space-y-1.5">
          {firstHalf.map((item, index) => (
            <div key={index} className="flex items-center gap-1.5">
              <span className="font-bold dark:font-semibold">{item.text}:</span>
              <span className="font-medium text-gray-400 dark:text-white dark:opacity-50">
                {item.value}
              </span>

              {item.icon && (
                <item.icon
                  className={clsx(
                    'size-5',
                    item.situation === 'Alert' && 'text-rose-500',
                    item.situation === 'Warning' && 'text-amber-500',
                  )}
                />
              )}
            </div>
          ))}
        </div>

        <div className="space-y-1.5">
          {secondHalf.map((item, index) => (
            <div key={index} className="flex items-center gap-1.5">
              <span className="font-bold dark:font-semibold">{item.text}:</span>
              <span className="font-medium text-gray-400 dark:text-white dark:opacity-50">
                {item.value}
              </span>

              {item.icon && (
                <item.icon
                  className={clsx(
                    'size-5',
                    item.situation === 'Alert' && 'text-rose-500',
                    item.situation === 'Warning' && 'text-amber-500',
                  )}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Specifications
