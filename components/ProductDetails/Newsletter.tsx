// Components
import { Checkbox } from '@components/ui/checkbox'
import { Button } from '@components/ui/button'
// Types
import { NewsletterItemProps } from '@/@types/types'
// Images
import { MailIcon } from 'lucide-react'
// Utils
import { useTranslation } from '@/app/i18n/client'

interface NewsletterProps {
  lng: string
}

const Newsletter: React.FC<NewsletterProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'translation')
  const newsletter: NewsletterItemProps = {
    title: t('ProductDetails.newsletterTitle'),
    subscribe: t('ProductDetails.newsletterSubscribe'),
    rules: t('ProductDetails.newsletterRules'),
    placeholder: t('ProductDetails.newsletterPlaceholder'),
  }

  return (
    <div className="space-y-5 rounded-xl border border-zinc-200 bg-slate-100 p-5 dark:border-zinc-700 dark:bg-transparent dark:shadow">
      <h2 className="text-xl font-bold text-zinc-600 dark:text-white">
        {newsletter.title}
      </h2>

      <div className="flex items-center gap-2 rounded-lg bg-slate-200 p-3 py-1.5 dark:border dark:border-zinc-600 dark:bg-main-600">
        <MailIcon className="size-5 shrink-0 text-zinc-700 dark:text-zinc-400" />

        <input
          type="text"
          name=""
          className="w-full border-none bg-transparent p-1 text-zinc-700 caret-zinc-700 outline-none placeholder:text-zinc-700 dark:text-white dark:caret-white dark:placeholder:text-gray-400"
          placeholder={newsletter.placeholder}
          id=""
        />

        <Button className="bg-blue-500 text-white hover:bg-blue-500">
          {newsletter.subscribe}
        </Button>
      </div>

      <div>
        <div className="flex space-x-2 text-zinc-600 dark:text-zinc-400">
          <Checkbox
            id="rules"
            className="border border-zinc-700 dark:border-zinc-500"
          />

          <label
            htmlFor="rules"
            className="leadin-6 relative bottom-0.5 cursor-pointer text-sm font-medium peer-disabled:opacity-70"
          >
            {newsletter.rules}
          </label>
        </div>
      </div>
    </div>
  )
}
export default Newsletter
