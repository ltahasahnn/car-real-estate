// Components
import FilterCheckbox from '@components/Catalog/FilterCheckbox'
// Types
import { FilterCheckboxProps } from '@/@types/types'
// Utils
import { useTranslation } from '@/app/i18n/client'

interface ColorProps {
  lng: string
}

const Color: React.FC<ColorProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'translation')
  const colorList: FilterCheckboxProps = {
    title: t('Catalog.colorTitle'),
    items: [
      { value: t('Catalog.colorItem1') },
      { value: t('Catalog.colorItem2') },
      { value: t('Catalog.colorItem3') },
      { value: t('Catalog.colorItem4') },
      { value: t('Catalog.colorItem5') },
      { value: t('Catalog.colorItem6') },
      { value: t('Catalog.colorItem7') },
      { value: t('Catalog.colorItem8') },
      { value: t('Catalog.colorItem9') },
      { value: t('Catalog.colorItem10') },
      { value: t('Catalog.colorItem11') },
      { value: t('Catalog.colorItem12') },
    ],
  }

  return (
    <div className="space-y-6 py-6">
      <h2 className="text-lg font-semibold">{colorList.title}</h2>

      <div className="customScroll h-40 space-y-2 overflow-y-scroll text-zinc-700 dark:text-zinc-400">
        {colorList.items.map((item, index) => (
          <FilterCheckbox
            key={index}
            value={String(item.value)}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}
export default Color
