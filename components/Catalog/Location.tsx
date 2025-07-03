// Types
import { FilterCheckboxProps } from '@/@types/types'
// Components
import Selectbox from '@components/Selectbox'
// Utils
import { useTranslation } from '@/app/i18n/client'

interface LocationProps {
  lng: string
}

const Location: React.FC<LocationProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'translation')
  const locationList: FilterCheckboxProps = {
    title: t('Catalog.locationTitle'),
    items: [
      { value: 'Chicago' },
      { value: 'Dallas' },
      { value: 'Los Angales' },
      { value: 'New York' },
      { value: 'San Diego' },
    ],
  }

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">{locationList.title}</h2>

      <Selectbox
        placeholder={String(locationList.items[0].value)}
        items={locationList.items}
        classContent="dark:bg-main-600 bg-slate-200 border border-zinc-300 dark:border-gray-500"
        classContentItem="text-zinc-700 !bg-slate-200 dark:hover:!bg-main-700 dark:!bg-main-600 cursor-pointer hover:!bg-slate-300 dark:text-white dark:hover:bg-main-700"
        className="w-full border border-zinc-300 bg-slate-200 font-medium text-zinc-700 focus:ring-0 focus:ring-offset-0 dark:border-gray-500 dark:bg-main-600 dark:text-white"
      />
    </div>
  )
}
export default Location
