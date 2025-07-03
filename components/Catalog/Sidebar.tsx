import clsx from 'clsx'

// Components
import Transmission from '@components/Catalog/Transmission'
import Drivetrain from '@components/Catalog/Drivetrain'
import Selection from '@components/Catalog/Selection'
import FuelType from '@components/Catalog/FuelType'
import BodyType from '@components/Catalog/BodyType'
import Location from '@components/Catalog/Location'
import Mileage from '@components/Catalog/Mileage'
import Sellers from '@components/Catalog/Sellers'
import Color from '@components/Catalog/Color'
import Model from '@components/Catalog/Model'
import Price from '@components/Catalog/Price'
import Year from '@components/Catalog/Year'
import { Button } from '@components/ui/button'
// Utils
import { useTranslation } from '@/app/i18n/client'

interface SidebarProps {
  setCatalog: (item: any) => void
  catalog: any
  lng: string
}
const Sidebar: React.FC<SidebarProps> = ({ catalog, setCatalog, lng }) => {
  const { t } = useTranslation(lng, 'translation')
  const newTitle = t('typeSwitcher.situation1')
  const usedTitle = t('typeSwitcher.situation2')

  type CatalogType = typeof newTitle | typeof usedTitle
  const buttonClass1: string =
    'bg-slate-200 border border-zinc-300 dark:border-main-600 text-blue-500 hover:bg-slate-200 dark:bg-main-600 dark:text-blue-500'
  const buttonClass2: string =
    'bg-slate-100 border border-slate-100 dark:border-main-600 hover:bg-slate-200 text-gray-500 hover:text-blue-500 dark:bg-main-600 dark:text-white dark:hover:bg-main-600 dark:hover:text-blue-500'
  return (
    <div className="relative space-y-6 text-zinc-700 dark:text-white">
      <div className="flex items-center justify-between gap-3 *:!w-full max-lg:px-5 sm:px-4">
        <Button
          onClick={() => setCatalog(newTitle)}
          className={clsx(catalog === newTitle ? buttonClass1 : buttonClass2)}
        >
          {t('typeSwitcher.situation1')}
        </Button>

        <Button
          onClick={() => setCatalog(usedTitle)}
          className={clsx(catalog === usedTitle ? buttonClass1 : buttonClass2)}
        >
          {t('typeSwitcher.situation2')}
        </Button>
      </div>

      <hr className="dark:opacity-25" />

      <div className="space-y-6 p-4">
        <Selection lng={lng} />
        <hr className="dark:opacity-25" />
        <Location lng={lng} />
        <BodyType lng={lng} />
        <Year lng={lng} />
        <Model lng={lng} />
        <Price lng={lng} />
        <Drivetrain lng={lng} />
        <FuelType lng={lng} />
        <Transmission lng={lng} />
        <Mileage lng={lng} />
        <Color lng={lng} />
        <Sellers lng={lng} />
      </div>
    </div>
  )
}
export default Sidebar
