import clsx from 'clsx'

// Images
import { DotIcon } from 'lucide-react'
// Types
import { FeaturesProps } from '@/@types/types'
// Components
import FeaturesCard from '@components/ProductDetails/FeaturesCard'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@components/ui/accordion'
// Utils
import { useTranslation } from '@/app/i18n/client'

interface Features {
  lng: string
}

const Features: React.FC<Features> = ({ lng }) => {
  const { t } = useTranslation(lng, 'translation')

  const features: FeaturesProps = {
    title: t('ProductDetails.featuresTitle1'),
    item: [
      {
        title: t('ProductDetails.featuresSubTitle1'),
        description: [
          { value: t('ProductDetails.featuresItem1') },
          { value: t('ProductDetails.featuresItem1') },
        ],
      },
      {
        title: t('ProductDetails.featuresSubTitle2'),
        description: [
          { value: t('ProductDetails.featuresItem1') },
          { value: t('ProductDetails.featuresItem1') },
        ],
      },
      {
        title: t('ProductDetails.featuresSubTitle3'),
        description: [
          { value: t('ProductDetails.featuresItem1') },
          { value: t('ProductDetails.featuresItem1') },
        ],
      },
      {
        title: t('ProductDetails.featuresSubTitle4'),
        description: [
          { value: t('ProductDetails.featuresItem1') },
          { value: t('ProductDetails.featuresItem1') },
        ],
      },
    ],
  }

  return (
    <div className="space-y-10 py-12">
      <FeaturesCard lng={lng} />

      <div className="space-y-5">
        <h2 className="text-2xl font-bold">{features.title}</h2>

        <Accordion
          type="single"
          collapsible
          className="rounded-lg border border-zinc-200 bg-slate-100 text-white dark:border-zinc-500 dark:bg-transparent dark:text-zinc-700"
        >
          {features.item.map((item, index) => (
            <AccordionItem
              key={index}
              value={clsx('item-', index)}
              className="border-b border-zinc-200 text-zinc-700 last:border-none dark:border-zinc-500 dark:text-white"
            >
              <AccordionTrigger className="p-4 ">{item.title}</AccordionTrigger>

              <div
                className={clsx(
                  'grid pl-4 max-md:grid-cols-1',
                  item.description.length > 5 ? 'grid-cols-2' : 'grid-cols-1',
                  item.description.length > 10
                    ? 'max-md:!grid-cols-2 md:grid-cols-3'
                    : 'grid-cols-1',
                )}
              >
                {item.description.map((itm, idx) => (
                  <AccordionContent
                    className="flex items-center p-1 pb-2 opacity-75"
                    key={idx}
                  >
                    <DotIcon className="size-6" />
                    <p className="line-clamp-1">{itm.value}</p>
                  </AccordionContent>
                ))}
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
export default Features
