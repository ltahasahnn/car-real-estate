import { useState } from 'react'

// Components
import OTPInput from '@components/Catalog/OTPInput'
import { Switch } from '@components/ui/switch'
import { Label } from '@components/ui/label'
import Slider from 'react-slider'
// Utils
import { useTranslation } from '@/app/i18n/client'

interface PriceProps {
  lng: string
}

const Price: React.FC<PriceProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'translation')
  const title: string = t('Catalog.priceTitle')
  const switchDescription: string = t('Catalog.priceDescription')

  const min: number = 4000
  const max: number = 100000

  const [values, setValues] = useState<number[]>([min, max])

  const handleMinInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value)
    setValues([newValue, values[1]])
  }

  const handleMaxInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value)
    setValues([values[0], newValue])
  }

  return (
    <div className="space-y-4 py-2">
      <h2 className="text-lg font-semibold">{title}</h2>

      <div className="space-y-6">
        {/* Slider */}
        <div className="space-y-2">
          <Slider
            className={'slider'}
            onChange={setValues}
            value={values}
            min={4000}
            max={100000}
          />
        </div>

        {/* Input */}
        <OTPInput
          type="text"
          handleMaxInputChange={handleMaxInputChange}
          handleMinInputChange={handleMinInputChange}
          value={values}
        />

        {/* Switch */}
        <div className="flex items-center space-x-2 ">
          <Switch
            id="airplane-mode"
            className="data-[state=checked]:bg-emerald-500 data-[state=unchecked]:bg-zinc-400 dark:data-[state=unchecked]:bg-zinc-700"
          />

          <Label htmlFor="airplane-mode">{switchDescription}</Label>
        </div>
      </div>
    </div>
  )
}
export default Price
