// Components
import FilterCheckbox from '@components/Catalog/FilterCheckbox'
// Types
import { SellersProps } from '@/@types/types'
// Utils
import { useTranslation } from '@/app/i18n/client'

interface Sellers {
  lng: string
}

const Sellers: React.FC<Sellers> = ({ lng }) => {
  const { t } = useTranslation(lng, 'translation')
  const sellersList: SellersProps = {
    title: t('Catalog.sellersTitle'),
    items: [
      { value: t('Catalog.sellersItem1') },
      { value: t('Catalog.sellersItem2') },
    ],
  }

  return (
    <div className="space-y-5 py-6 font-semibold">
      <h2>{sellersList.title}</h2>

      <div className="space-y-2 text-zinc-700 dark:text-zinc-400">
        {sellersList.items.map((item, index) => (
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
export default Sellers
