import Link from 'next/link'
// Types
import { SellerDescriptionProps } from '@/@types/types'
// Utils
import { useTranslation } from '@/app/i18n/client'

interface SellerDescription {
  lng: string
}

const SellerDescription: React.FC<SellerDescription> = ({ lng }) => {
  const { t } = useTranslation(lng, 'translation')
  const sellerDescription: SellerDescriptionProps = {
    title: t('ProductDetails.sellerTitle'),
    description: t('ProductDetails.sellerDescription'),
    more: t('ProductDetails.sellerMore'),
    href: '/',
  }

  return (
    <div className="space-y-3 py-2 pb-12 text-zinc-700 dark:text-white">
      <h2 className="text-2xl font-bold">{sellerDescription.title}</h2>

      <div className="opacity-75">
        <p>{sellerDescription.description}</p>
      </div>

      <div>
        <Link
          href={sellerDescription.href}
          className="cursor-pointer text-blue-500 underline hover:no-underline"
        >
          {sellerDescription.more}
        </Link>
      </div>
    </div>
  )
}
export default SellerDescription
