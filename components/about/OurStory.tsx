'use client'
import { useState } from 'react'
// Types
import { OurStoryListProps } from '@/@types/types'
// Utils
import { useTranslation } from '@/app/i18n/client'

interface OurStoryProps {
  lng: string
}

const OurStory: React.FC<OurStoryProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'translation')
  const [dotCounts, setDotCounts] = useState<number[]>([])

  const ourStoryList: OurStoryListProps = {
    title: t('About.ourStoryTitle'),
    items: [
      {
        number: 1,
        title: 2017,
        description: t('About.ourStoryDescription1'),
      },
      {
        number: 2,
        title: 2018,
        description: t('About.ourStoryDescription2'),
      },
      {
        number: 3,
        title: 2020,
        description: t('About.ourStoryDescription3'),
      },
      {
        number: 4,
        title: 2021,
        description: t('About.ourStoryDescription4'),
      },
    ],
  }

  return (
    <div className="space-y-12 text-center">
      {/* Title */}
      <h2 className="text-4xl font-bold max-lg:text-3xl max-sm:text-2xl">
        {ourStoryList.title}
      </h2>

      {/* Content */}
      <div className="mx-auto w-full max-w-3xl space-y-5 text-start">
        {ourStoryList.items.map((item, index) => (
          <div key={index} className="flex justify-center gap-7">
            <div className="flex flex-col items-center">
              <div className="flex size-8 items-center justify-center rounded-full bg-blue-500 text-sm text-white">
                {item.number}
              </div>
            </div>

            <div className="flex w-full flex-col gap-2">
              {/* SubTitle */}
              <h2 className="text-xl font-bold">{item.title}</h2>

              {/* Description */}
              <p className="pb-2 text-zinc-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurStory
