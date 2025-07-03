// Components
import FilterCheckbox from '@components/Catalog/FilterCheckbox'
// Types
import { FilterCheckboxProps } from '@/@types/types'
// Utils
import { useTranslation } from '@/app/i18n/client'

interface BodyTypeProps {
  lng: string
}

const BodyType: React.FC<BodyTypeProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'translation')
  const bodyList: FilterCheckboxProps = {
    title: t('Catalog.bodyTypeTitle'),
    items: [
      { value: 'Sedan' },
      { value: 'SUV' },
      { value: 'Wagon' },
      { value: 'Crossover' },
      { value: 'Coupe' },
      { value: 'Pickup' },
      { value: 'Sport Coupe' },
      { value: 'Compact' },
      { value: 'Convertible' },
      { value: 'Family MPV' },
    ],
  }

  return (
    <div className="space-y-6 py-6">
      <h2 className="text-lg font-semibold">{bodyList.title}</h2>

      <div className="customScroll h-40 space-y-2 overflow-y-scroll text-zinc-700 dark:text-zinc-400">
        {bodyList.items.map((item, index) => (
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
export default BodyType
