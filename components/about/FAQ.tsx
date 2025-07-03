import Link from 'next/link'
import clsx from 'clsx'

// Images
import CarImage from '@assets/images/hero-img.png'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
// Components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@components/ui/accordion'
import { Button } from '@components/ui/button'
// Types
import { FAQListProps } from '@/@types/types'
// Utils
import { useTranslation } from '@/app/i18n/client'

interface FAQProps {
  lng: string
}

const FAQ: React.FC<FAQProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'translation')
  const FAQList: FAQListProps = {
    title: t('About.faqTitle'),
    description: t('About.faqDescription'),
    href: '',
    buttonText: t('About.faqButton'),
    src: CarImage,
    alt: 'car-image',
    items: [
      {
        subTitle: t('About.faqSubTitle1'),
        description: t('About.faqSubDescription1'),
      },
      {
        subTitle: t('About.faqSubTitle2'),
        description: t('About.faqSubDescription1'),
      },
      {
        subTitle: t('About.faqSubTitle3'),
        description: t('About.faqSubDescription1'),
      },
      {
        subTitle: t('About.faqSubTitle4'),
        description: t('About.faqSubDescription1'),
      },
      {
        subTitle: t('About.faqSubTitle5'),
        description: t('About.faqSubDescription1'),
      },
      {
        subTitle: t('About.faqSubTitle6'),
        description: t('About.faqSubDescription1'),
      },
      {
        subTitle: t('About.faqSubTitle7'),
        description: t('About.faqSubDescription1'),
      },
    ],
  }

  return (
    <div className="grid grid-cols-2 gap-4 py-12 max-lg:grid-cols-1 max-lg:gap-7">
      <div className="flex flex-col space-y-5">
        <div className="flex flex-col gap-5 max-lg:order-1 max-lg:text-center">
          {/* Title */}
          <h2 className="text-4xl font-bold text-zinc-700 dark:text-white max-sm:text-2xl">
            {FAQList.title}
          </h2>

          {/* Description */}
          <div className="max-w-lg text-lg text-zinc-500 dark:text-zinc-400 max-lg:mx-auto max-sm:text-sm">
            <p>{FAQList.description}</p>
          </div>

          {/* Link */}
          <div>
            <Link href={FAQList.href}>
              <Button className="gap-2 bg-blue-500 px-5 py-6 font-medium text-white max-sm:px-3 max-sm:py-4 max-sm:text-xs">
                {FAQList.buttonText}
                <ChevronRight className="size-5" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="p-8">
          <Image
            className="max-lg:object-contain md:max-lg:aspect-[2/1]"
            style={{ transform: 'rotateY(180deg)' }}
            src={FAQList.src}
            alt={FAQList.alt}
          />
        </div>
      </div>

      {/* Accordion */}
      <div>
        <Accordion
          className="rounded-xl border border-zinc-200 bg-slate-100 text-zinc-700 dark:border-zinc-500 dark:bg-transparent dark:text-white"
          type="single"
          collapsible
        >
          {FAQList.items.map((item, index) => (
            <AccordionItem
              key={index}
              className="bor border-zinc-200 px-3 last:border-none dark:border-zinc-500"
              value={clsx('item-', index)}
            >
              {/* SubTitle */}
              <AccordionTrigger className="!text-start opacity-75">
                {item.subTitle}
              </AccordionTrigger>

              {/* Description */}
              <AccordionContent className="opacity-75 dark:opacity-50">
                {item.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
export default FAQ
