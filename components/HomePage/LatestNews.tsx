'use client'
import clsx from 'clsx'

// Images
import NewsExampleImage1 from '@assets/images/examples/newsExampleImage1.jpeg'
import NewsExampleImage2 from '@assets/images/examples/newsExampleImage2.jpeg'
import NewsExampleImage3 from '@assets/images/examples/newsExampleImage3.jpeg'
import ReporterExampleImage1 from '@assets/images/examples/exampleReporterImage1.jpeg'
import ReporterExampleImage2 from '@assets/images/examples/exampleReporterImage2.jpeg'
import ReporterExampleImage3 from '@assets/images/examples/exampleReporterImage3.jpeg'
import { ArrowRight } from 'lucide-react'
// Components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@components/ui/carousel'
import NewsCard from '@components/HomePage/NewsCard'
// Types
import { News } from '@/@types/types'
// Utils
import { useTranslation } from '@/app/i18n/client'

interface LatestNewsProps {
  lng: string
}

const LatestNews: React.FC<LatestNewsProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'translation')
  const latestNews: News[] = [
    {
      image: NewsExampleImage1,
      tag: t('LatestNews.tag1'),
      alt: t('LatestNews.alt1'),
      title: t('LatestNews.subTitle1'),
      date: new Date('2024-03-30'),
      comments: [
        { text: t('LatestNews.comment1') },
        { text: t('LatestNews.comment2') },
      ],
      reporter: {
        image: ReporterExampleImage1,
        fullName: 'Alice Smith',
      },
    },
    {
      image: NewsExampleImage2,
      tag: t('LatestNews.tag2'),
      alt: t('LatestNews.alt2'),
      title: t('LatestNews.subTitle2'),
      date: new Date('2024-03-29'),
      comments: [
        { text: t('LatestNews.comment3') },
        { text: t('LatestNews.comment4') },
      ],
      reporter: {
        image: ReporterExampleImage2,
        fullName: 'Bob Johnson',
      },
    },
    {
      image: NewsExampleImage3,
      tag: t('LatestNews.tag3'),
      alt: t('LatestNews.alt3'),
      title: t('LatestNews.subTitle3'),
      date: new Date('2024-03-28'),
      comments: [
        { text: t('LatestNews.comment5') },
        { text: t('LatestNews.comment6') },
      ],
      reporter: {
        image: ReporterExampleImage3,
        fullName: 'Emily Davis',
      },
    },
  ]

  const navigationButtonClasses =
    'absolute z-20 h-10 w-10 border-none bg-white border border-zinc-200 !bg-slate-300 dark:border-none dark:!bg-main-500 bg-opacity-10 shadow-md hover:bg-opacity-100 hover:text-blue-500'

  return (
    <div className="relative">
      {/* Head */}
      <div className="items mb-6 flex justify-between">
        <h2 className=" text-2xl font-semibold text-zinc-700 dark:text-white max-sm:text-xl">
          {t('LatestNews.title')}
        </h2>

        <p className="ml-4 flex cursor-pointer items-center gap-2 text-sm font-normal text-zinc-700 transition-all hover:text-zinc-400 dark:text-slate-400 dark:hover:text-white">
          {t('LatestNews.link')} <ArrowRight className="h-4 w-4" />
        </p>
      </div>

      <Carousel className="w-full !border-none">
        <CarouselContent>
          {latestNews.map((news, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <NewsCard lng={lng} news={news} />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Carousel navigation buttons */}
        <div className="absolute -bottom-8 left-12 text-zinc-700 dark:text-white">
          <CarouselPrevious
            className={clsx(navigationButtonClasses, '-left-12')}
          />
          <CarouselNext className={clsx(navigationButtonClasses, 'left-0')} />
        </div>
      </Carousel>
    </div>
  )
}

export default LatestNews
