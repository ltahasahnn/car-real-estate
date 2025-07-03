'use client'
import { useState } from 'react'
import clsx from 'clsx'

// Components
import { Button } from '@components/ui/button'
import { Input } from '@components/ui/input'
import Dropdown from '@components/Dropdown'
// Images
import { Search, MapPin, Rows2, CarIcon } from 'lucide-react'
// Types
import { DropdownItem } from '@/@types/types'
// Utils
import { useTranslation } from '@/app/i18n/client'

interface FilterProps {
  lng: string
}

const Filter: React.FC<FilterProps> = ({ lng }) => {
  const [carType, setCarType] = useState<'new' | 'used'>('new')
  const { t } = useTranslation(lng, 'translation')

  const buttonClass1: string =
    'bg-slate-200 border border-zinc-300 dark:border-main-600 text-blue-500 hover:bg-slate-200 dark:bg-main-600 dark:text-blue-500'
  const buttonClass2: string =
    'bg-slate-100 border border-slate-100 dark:border-main-600 hover:bg-slate-200 text-gray-500 hover:text-blue-500 dark:bg-main-600 dark:text-white dark:hover:bg-main-600 dark:hover:text-blue-500'
  const filterOptions: DropdownItem[] = [
    {
      title: t('filter.title1'),
      icon: Rows2,
      submenu: [
        { title: 'Acura', href: '#' },
        { title: 'BMW', href: '#' },
        { title: 'Citroen', href: '#' },
        { title: 'Lexus', href: '#' },
        { title: 'Mercedes-Benz', href: '#' },
        { title: 'Nissan', href: '#' },
        { title: 'Toyota', href: '#' },
      ],
    },
    {
      title: t('filter.title2'),
      icon: Rows2,
      submenu: [
        { title: 'Altima', href: '#' },
        { title: 'Juke', href: '#' },
        { title: 'Leaf', href: '#' },
        { title: 'Maxima', href: '#' },
        { title: 'Micra', href: '#' },
        { title: 'Muarano', href: '#' },
        { title: 'Note', href: '#' },
        { title: 'Patrol', href: '#' },
      ],
    },
    {
      title: t('filter.title3'),
      icon: CarIcon,
      submenu: [
        { title: 'Compact', href: '#' },
        { title: 'Crossover', href: '#' },
        { title: 'Coupe', href: '#' },
        { title: 'Family MPV', href: '#' },
        { title: 'Pickup', href: '#' },
        { title: 'Sedan', href: '#' },
        { title: 'SUV', href: '#' },
        { title: 'Wagon', href: '#' },
      ],
    },
    {
      title: t('filter.title4'),
      icon: MapPin,
      submenu: [
        { title: 'Dallas', href: '#' },
        { title: 'Chicago', href: '#' },
        { title: 'Houston', href: '#' },
        { title: 'Las Vegas', href: '#' },
        { title: 'Los Angeles', href: '#' },
        { title: 'New York', href: '#' },
        { title: 'San Francisco', href: '#' },
      ],
    },
  ]

  return (
    <div className="space-y-6 ">
      {/* Car Type Switcher */}
      <div className="flex items-center gap-3">
        <Button
          onClick={() => setCarType('new')}
          className={clsx(carType === 'new' ? buttonClass1 : buttonClass2)}
        >
          {t('typeSwitcher.situation1')}
        </Button>

        <Button
          onClick={() => setCarType('used')}
          className={clsx(carType === 'used' ? buttonClass1 : buttonClass2)}
        >
          {t('typeSwitcher.situation2')}
        </Button>
      </div>

      {/* Filter */}
      <div className="grid h-full w-full items-center gap-2 rounded-lg border border-r border-zinc-200 bg-slate-100 p-1 pr-2 text-zinc-700 dark:border-gray-600 dark:bg-main-600 dark:text-white max-lg:grid-cols-4 max-lg:p-2 lg:grid-cols-[repeat(18,1fr)]">
        <div className="flex w-full items-center border-zinc-300 px-3 dark:border-gray-600 max-lg:col-span-4 lg:col-span-3 lg:border-r">
          <Search className="size-5" />
          <Input
            className="focus-visible:ring-none border-none bg-transparent caret-zinc-700 placeholder:text-zinc-700 focus-visible:ring-0 focus-visible:ring-offset-0 dark:caret-white dark:placeholder:text-slate-400"
            type="text"
            placeholder={t('filter.placeholder')}
          />
        </div>

        {/* Filter Options */}
        <div className="col-span-12 grid w-full grid-cols-4 justify-start border-zinc-300 dark:border-gray-600 max-lg:col-span-4 max-lg:border-y max-md:grid-cols-2 max-sm:grid-cols-1">
          {filterOptions.map(
            (item, index) =>
              item.submenu && (
                <Dropdown
                  className={clsx(
                    'flex items-center justify-start border-zinc-300 px-3 py-2 text-zinc-700 transition-all hover:!text-zinc-400 dark:border-gray-600 dark:text-white dark:hover:!text-white max-lg:px-4 max-md:py-4 max-sm:border-b md:my-2',
                    {
                      'md:border-r': index !== 3,
                      'max-md:border-b': index <= 1,
                      'sm:border-r': index % 2 === 0,
                      'max-sm:border-b-0': index === 3,
                    },
                  )}
                  key={index}
                  title={item.title}
                  items={item.submenu}
                  icon={<item.icon className="h-5 w-5" />}
                />
              ),
          )}
        </div>

        <Button className="h-12 bg-blue-500 text-lg duration-200 hover:bg-blue-600 dark:text-white max-lg:col-span-4 lg:col-span-3">
          {t('filter.search')}
        </Button>
      </div>
    </div>
  )
}
export default Filter
