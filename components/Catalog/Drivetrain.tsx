// Components
import FilterCheckbox from '@components/Catalog/FilterCheckbox'
// Types
import { FilterCheckboxProps } from '@/@types/types'
// Utils
import { useTranslation } from '@/app/i18n/client'

interface DrivetrainProps {
  lng: string
}

const Drivetrain: React.FC<DrivetrainProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'translation')
  const drivetrainList: FilterCheckboxProps = {
    title: t('Catalog.drivetrainTitle'),
    items: [
      { value: t('Catalog.drivetrainItem1') },
      { value: t('Catalog.drivetrainItem2') },
      { value: t('Catalog.drivetrainItem3') },
    ],
  }

  return (
    <div className="space-y-5 py-6">
      <h2 className="text-lg font-semibold">{drivetrainList.title}</h2>

      <div className="space-y-2 text-zinc-700 dark:text-zinc-400">
        {drivetrainList.items.map((item, index) => (
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
export default Drivetrain
