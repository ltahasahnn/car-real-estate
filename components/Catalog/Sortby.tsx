import { useState } from 'react'
import clsx from 'clsx'

// Images
import {
  ArrowRightLeftIcon,
  ArrowUpDownIcon,
  LayoutGridIcon,
  Rows2Icon,
} from 'lucide-react'
// Types
import { SortbyListProps, SortbyProps } from '@/@types/types'
// Components
import Selectbox from '@components/Selectbox'
// Utils
import { useTranslation } from '@/app/i18n/client'

const Sortby: React.FC<SortbyProps> = ({
  switchGrid,
  switchMode,
  onSwitchChange,
  lng,
}) => {
  const { t } = useTranslation(lng, 'translation')
  const sortbyList: SortbyListProps = {
    sortbyTitle: t('Sortby.sortbyTitle'),
    compareTitle: t('Sortby.compareTitle'),
    compareValue: 0,
    sortbyItems: [
      { value: t('Sortby.item1') },
      { value: t('Sortby.item2') },
      { value: t('Sortby.item3') },
      { value: t('Sortby.item4') },
    ],
  }

  const [selectedSortby, setSelectedSortby] = useState<string | number>(
    sortbyList.sortbyItems[0].value,
  )
  const handleSortbyChange = (items: string | number) => {
    setSelectedSortby(items.toString())
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-2">
      {/* Sortby & Compare */}
      <div className="flex flex-wrap items-center gap-4 text-zinc-700 dark:text-zinc-300">
        <ArrowUpDownIcon className="size-5 text-zinc-700 dark:text-white" />
        <span>{sortbyList.sortbyTitle}:</span>

        <Selectbox
          placeholder={String(sortbyList.sortbyItems[0].value)}
          items={sortbyList.sortbyItems}
          classContent="dark:bg-main-600 bg-slate-200 border border-zinc-300 dark:border-gray-500"
          classContentItem="text-zinc-700 !bg-slate-200 dark:hover:!bg-main-700 dark:!bg-main-600 cursor-pointer hover:!bg-slate-300 dark:text-white dark:hover:bg-main-700"
          className="w-fit border border-zinc-300 bg-slate-200 font-medium text-zinc-700 focus:ring-0 focus:ring-offset-0 dark:border-gray-500 dark:bg-main-600 dark:text-white"
        />

        <span className="font-thin text-zinc-500">|</span>

        <ArrowRightLeftIcon className="size-5 text-zinc-700 dark:text-white" />
        <span>
          {sortbyList.compareTitle}: ({sortbyList.compareValue})
        </span>
      </div>

      {/* Switch */}
      {switchGrid && (
        <div className="ml-auto flex items-center gap-2">
          <Rows2Icon
            onClick={() => onSwitchChange(false)}
            className={clsx(
              'size-5 cursor-pointer',
              switchMode ? 'text-zinc-500' : 'text-zinc-700 dark:text-white',
            )}
          />
          <LayoutGridIcon
            onClick={() => onSwitchChange(true)}
            className={clsx(
              'size-5 cursor-pointer',
              switchMode ? 'text-zinc-700 dark:text-white' : 'text-zinc-500',
            )}
          />
        </div>
      )}
    </div>
  )
}
export default Sortby
