import { ChangeEvent, useState } from 'react'

// Components
import OTPInput from '@components/Catalog/OTPInput'
// Utils
import { useTranslation } from '@/app/i18n/client'

interface MileageProps {
  lng: string
}

const Mileage: React.FC<MileageProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'translation')
  const title: string = t('Catalog.mileageTitle')

  const from: number = 0
  const to: number = 1000

  const [values, setValues] = useState<number[]>([from, to])

  const handleMinInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value)
    setValues([newValue, values[1]])
  }

  const handleMaxInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value)
    setValues([values[0], newValue])
  }

  return (
    <div className="space-y-4 py-2">
      <h2 className="text-lg font-semibold">{title}</h2>

      <OTPInput
        type="number"
        handleMinInputChange={handleMinInputChange}
        handleMaxInputChange={handleMaxInputChange}
        value={values}
      />
    </div>
  )
}
export default Mileage
