// Components
import FilterCheckbox from '@components/Catalog/FilterCheckbox'
// Types
import { FilterCheckboxProps } from '@/@types/types'
// Utils
import { useTranslation } from '@/app/i18n/client'

interface FuelTypeProps {
  lng: string
}

const FuelType: React.FC<FuelTypeProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'translation')
  const fuelTypeList: FilterCheckboxProps = {
    title: t('Catalog.fuelTypeTitle'),
    items: [
      { value: t('Catalog.fuelTypeItem1') },
      { value: t('Catalog.fuelTypeItem2') },
      { value: t('Catalog.fuelTypeItem3') },
      { value: t('Catalog.fuelTypeItem4') },
      { value: t('Catalog.fuelTypeItem5') },
      { value: t('Catalog.fuelTypeItem6') },
    ],
  }

  return (
    <div className="space-y-5 py-6">
      <h2 className="text-lg font-semibold">{fuelTypeList.title}</h2>

      <div className="space-y-2 text-zinc-700 dark:text-zinc-400">
        {fuelTypeList.items.map((item, index) => (
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
export default FuelType
