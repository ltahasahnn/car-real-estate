// Components
import OTPSelectbox from '@components/Catalog/OTPSelectbox'
// Types
import { YearListProps } from '@/@types/types'
// Utils
import { useTranslation } from '@/app/i18n/client'

interface YearProps {
  lng: string
}

const Year: React.FC<YearProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'translation')
  const yearList: YearListProps = {
    title: t('Catalog.yearTitle'),
    fromList: [
      { value: 2024 },
      { value: 2023 },
      { value: 2022 },
      { value: 2021 },
      { value: 2020 },
      { value: 2019 },
      { value: 2018 },
      { value: 2017 },
      { value: 2016 },
      { value: 2015 },
    ],
    toList: [
      { value: 2024 },
      { value: 2023 },
      { value: 2022 },
      { value: 2021 },
      { value: 2020 },
      { value: 2019 },
      { value: 2018 },
      { value: 2017 },
      { value: 2016 },
      { value: 2015 },
    ],
  }

  return (
    <div className="space-y-4 py-4">
      <h2 className="text-lg font-semibold">{yearList.title}</h2>

      <OTPSelectbox to={yearList.toList} from={yearList.fromList} />
    </div>
  )
}
export default Year
