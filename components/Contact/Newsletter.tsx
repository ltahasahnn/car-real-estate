'use client'
import { useState } from 'react'
import clsx from 'clsx'

// Components
import { Textarea } from '@components/ui/textarea'
import { Button } from '@components/ui/button'
import Selectbox from '@components/Selectbox'
import { Input } from '@components/ui/input'
import { Label } from '@components/ui/label'
// Types
import { NewsletterListProps } from '@/@types/types'
// Utils
import { useTranslation } from '@/app/i18n/client'

interface NewsletterProps {
  lng: string
}

const Newsletter: React.FC<NewsletterProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'translation')

  const newsletterList: NewsletterListProps = {
    buttonText: t('Contact.contactButton'),
    title: t('Contact.contactLabel4'),
    placeholder: t('Contact.contactPlaceholder3'),
    inputItems: [
      {
        title: t('Contact.contactLabel1'),
        placeholder: t('Contact.contactPlaceholder1'),
      },
      {
        title: t('Contact.contactLabel2'),
        placeholder: t('Contact.contactPlaceholder2'),
      },
    ],
    subjectItems: {
      title: t('Contact.contactLabel3'),
      items: [
        { value: t('Contact.contactItem1') },
        { value: t('Contact.contactItem2') },
        { value: t('Contact.contactItem3') },
        { value: t('Contact.contactItem4') },
      ],
    },
  }
  const [newsletter, setNewsletter] = useState<string | number>(
    newsletterList.subjectItems.items[0].value,
  )
  const handleNewsletterChange = (items: string | number) => {
    setNewsletter(items.toString())
  }

  return (
    <div className="space-y-6">
      {/* Inputs */}
      {newsletterList.inputItems.map((item, index) => (
        <div key={index} className="flex w-full flex-col gap-2">
          <Label
            htmlFor={clsx(item.title, '-', index)}
            className="text-md font-medium"
          >
            {item.title}
          </Label>

          <Input
            type="text"
            placeholder={item.placeholder}
            className="border border-zinc-200 bg-slate-100 !py-6 text-zinc-700 caret-zinc-700 !outline-none !ring-0 !ring-offset-0 placeholder:text-zinc-500 dark:border-zinc-700 dark:bg-main-600 dark:text-white dark:caret-white"
            name=""
            id={clsx(item.title, '-', index)}
          />
        </div>
      ))}

      {/* Dropdown */}
      <div className="w-full space-y-2">
        <h2 className="text-md font-medium">
          {newsletterList.subjectItems.title}
        </h2>

        <Selectbox
          placeholder={String(newsletterList.subjectItems.items[0].value)}
          items={newsletterList.subjectItems.items}
          classContent="dark:bg-main-600 bg-slate-100 border border-zinc-300 dark:border-gray-500"
          classContentItem="text-zinc-700 !bg-slate-100 dark:hover:!bg-main-700 dark:!bg-main-600 cursor-pointer hover:!bg-slate-200 dark:text-white dark:hover:bg-main-700"
          className="w-full border border-zinc-200 bg-slate-100 py-6 font-medium text-zinc-700 focus:ring-0 focus:ring-offset-0 dark:border-zinc-700 dark:bg-main-600 dark:text-white"
        />
      </div>

      {/* Textares */}
      <div className="w-full space-y-2">
        <Label htmlFor="textarea" className="text-md font-medium">
          {newsletterList.title}
        </Label>

        <Textarea
          className="w-full rounded-lg border border-zinc-200 bg-slate-100 p-4 text-zinc-700 !ring-0 !ring-offset-0 focus:!outline-none dark:border-zinc-700 dark:bg-main-600 dark:text-white dark:caret-white dark:placeholder:text-white"
          placeholder={newsletterList.placeholder}
        />
      </div>

      <Button className="text-md bg-blue-500 !px-8 !py-6 text-white hover:bg-blue-600 hover:text-white">
        {newsletterList.buttonText}
      </Button>
    </div>
  )
}
export default Newsletter
