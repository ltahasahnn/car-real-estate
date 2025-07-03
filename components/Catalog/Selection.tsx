// Types
import { SelectionListProps } from '@/@types/types'
// Utils
import { useTranslation } from '@/app/i18n/client'
// Images
import { X } from 'lucide-react'

interface SelectionProps {
  lng: string
}

const Selection: React.FC<SelectionProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'translation')
  const selectionList: SelectionListProps = {
    title: t('Catalog.selectedTitle'),
    clear: t('Catalog.selectedLink'),
    items: [
      { value: t('Catalog.selectedItem1') },
      { value: t('Catalog.selectedItem2') },
      { value: t('Catalog.selectedItem3') },
      { value: t('Catalog.selectedItem4') },
      { value: t('Catalog.selectedItem5') },
      { value: t('Catalog.selectedItem6') },
      { value: t('Catalog.selectedItem7') },
    ],
  }

  return (
    <div className="space-y-4 text-zinc-700 dark:text-white">
      {/* Title */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">{selectionList.title}</h2>

        <span className="cursor-pointer text-sm opacity-75 duration-100 hover:opacity-100">
          {selectionList.clear}
        </span>
      </div>

      {/* Items */}
      <div className="flex flex-wrap gap-2.5 text-xs">
        {selectionList.items.map((item, index) => (
          <div
            key={index}
            className="flex cursor-pointer items-center gap-2 rounded-2xl border border-zinc-300 bg-slate-200 px-3 py-2 text-zinc-700 duration-300 dark:border-none dark:bg-main-500 dark:bg-opacity-50 dark:text-white dark:hover:bg-opacity-100"
          >
            <span>{item.value}</span>

            <X className="size-4" />
          </div>
        ))}
      </div>
    </div>
  )
}
export default Selection
