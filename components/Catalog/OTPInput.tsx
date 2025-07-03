// Components
import { Input } from '@components/ui/input'
// Types
import { OTPInputProps } from '@/@types/types'
// Images
import { Minus } from 'lucide-react'

const OTPInput: React.FC<OTPInputProps> = ({
  value,
  handleMinInputChange,
  handleMaxInputChange,
  type,
}) => {
  const inputClassName =
    'border-zinc-300 bg-slate-200 !px-2 font-medium text-zinc-700 !ring-0 !ring-offset-0 dark:border-gray-500 dark:bg-main-600 dark:text-white'
  return (
    <div className="flex w-full items-center gap-2">
      <Input
        type={type}
        onChange={handleMinInputChange}
        className={inputClassName}
        value={value[0]}
      />

      <div className="w-fit">
        <Minus className="size-5" />
      </div>

      <Input
        type={type}
        onChange={handleMaxInputChange}
        className={inputClassName}
        value={value[1]}
      />
    </div>
  )
}
export default OTPInput
