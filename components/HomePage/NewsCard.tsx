// Images
import { Calendar, MessageCircle } from 'lucide-react'
// Components
import Image from 'next/image'
// Types
import { News } from '@/@types/types'
// Helper Functions
import dateFormatter from '@/lib/dateFormatter'
// Utils
import { useTranslation } from '@/app/i18n/client'
interface NewsCardProps {
  news: News
  lng: string
}

const NewsCard: React.FC<NewsCardProps> = ({ news, lng }) => {
  const { t } = useTranslation(lng, 'translation')
  return (
    <div className="w-full cursor-pointer rounded-xl text-start">
      <Image
        className="h-48 w-full rounded-xl bg-center object-cover"
        src={news.image}
        alt={news.alt}
      />

      <p className="mt-4 text-sm font-medium uppercase text-blue-600 dark:font-light">
        {news.tag}
      </p>

      <h3 className="mt-0.5 line-clamp-1 font-semibold text-zinc-700 transition-all dark:text-gray-300 dark:hover:text-white">
        {news.title}
      </h3>

      <div className="mt-2  w-fit items-center justify-start ">
        <div className="flex items-center gap-2">
          <Image
            src={news.reporter.image}
            alt={news.reporter.fullName}
            className="col-span-1 row-span-2 h-12 w-12 rounded-full object-cover"
          />

          <div className="flex flex-col items-start gap-1">
            <p className="col-span-1 row-span-1 text-sm font-semibold text-zinc-500 dark:text-white">
              {news.reporter.fullName}
            </p>

            <div className="col-span-1 row-span-1 flex items-center gap-2 text-xs font-medium text-zinc-700 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3 text-zinc-700 dark:text-gray-400" />
                <p>{dateFormatter(news.date)}</p>
              </div>

              <div className="flex items-center gap-1">
                <MessageCircle className="h-3 w-3 text-gray-400 dark:text-zinc-400" />
                <p>
                  {news.comments ? news.comments.length : 'No'}{' '}
                  {t('NewsCard.comments')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsCard
