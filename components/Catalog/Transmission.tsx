// Components
import FilterCheckbox from '@components/Catalog/FilterCheckbox'
// Types
import { TransmissionListProps } from '@/@types/types'
// Utils
import { useTranslation } from '@/app/i18n/client'

interface TransmissionProps {
  lng: string
}

const Transmission: React.FC<TransmissionProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'translation')
  const transmissionList: TransmissionListProps = {
    title: t('Catalog.transmissionTitle'),
    items: [
      { value: t('Catalog.transmissionItem1') },
      { value: t('Catalog.transmissionItem2') },
    ],
  }

  return (
    <div className="space-y-5 py-6">
      <h2 className="text-lg font-semibold">{transmissionList.title}</h2>

      <div className="space-y-2 text-zinc-700 dark:text-zinc-400">
        {transmissionList.items.map((item, index) => (
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
export default Transmission
