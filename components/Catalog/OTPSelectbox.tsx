// Types
import { OTPDropdownProps } from '@/@types/types'
// Components
import Selectbox from '@components/Selectbox'
// Images
import { Minus } from 'lucide-react'

const OTPDropdown: React.FC<OTPDropdownProps> = ({ from, to }) => {
  return (
    <div className="flex items-center justify-center gap-2 *:w-full">
      <Selectbox
        placeholder={String(from[0].value)}
        items={from}
        classContent="dark:bg-main-600 bg-slate-200 border border-zinc-300 dark:border-gray-500"
        classContentItem="text-zinc-700 !bg-slate-200 dark:hover:!bg-main-700 dark:!bg-main-600 cursor-pointer hover:!bg-slate-300 dark:text-white dark:hover:bg-main-700"
        className="w-full border border-zinc-300 bg-slate-200 font-medium text-zinc-700 focus:ring-0 focus:ring-offset-0 dark:border-gray-500 dark:bg-main-600 dark:text-white"
      />

      <div className="!w-fit">
        <Minus className="size-5" />
      </div>

      <Selectbox
        placeholder={String(to[0].value)}
        items={to}
        classContent="dark:bg-main-600 bg-slate-200 border border-zinc-300 dark:border-gray-500"
        classContentItem="text-zinc-700 !bg-slate-200 dark:hover:!bg-main-700 dark:!bg-main-600 cursor-pointer hover:!bg-slate-300 dark:text-white dark:hover:bg-main-700"
        className="w-full border border-zinc-300 bg-slate-200 font-medium text-zinc-700 focus:ring-0 focus:ring-offset-0 dark:border-gray-500 dark:bg-main-600 dark:text-white"
      />
    </div>
  )
}
export default OTPDropdown
