import { MouseEventHandler } from 'react'
import clsx from 'clsx'

// Components
import { Checkbox } from '@components/ui/checkbox'

interface FilterCheckboxProps {
  click?: MouseEventHandler
  index: number
  value: string
}

const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
  click,
  index,
  value,
}) => {
  return (
    <div onClick={click} className="flex items-center space-x-2">
      <Checkbox
        className="border-zinc-400 data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 dark:text-white"
        id={clsx('terms-', index)}
      />

      <label
        htmlFor={clsx('terms-', index)}
        className="w-fit text-sm font-medium leading-5 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {value}
      </label>
    </div>
  )
}
export default FilterCheckbox
