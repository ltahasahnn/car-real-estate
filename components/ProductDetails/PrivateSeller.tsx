import Link from 'next/link'

// Components
import { Button } from '@components/ui/button'
// Images
import { MailIcon, PhoneCallIcon } from 'lucide-react'
import StarIcon from '@assets/images/icons/star.png'
import UserImage from '@assets//images/profile.jpeg'
import Image from 'next/image'
// Types
import { PrivateSellerProps } from '@/@types/types'
// Utils
import { useTranslation } from '@/app/i18n/client'

interface PrivateSeller {
  lng: string
}

const PrivateSeller: React.FC<PrivateSeller> = ({ lng }) => {
  const { t } = useTranslation(lng, 'translation')
  const privateSeller: PrivateSellerProps = {
    title: t('ProductDetails.privatesellerTitle'),
    userImage: UserImage,
    userName: 'Devon Lane',
    rate: 5,
    otherSeller: t('ProductDetails.privatesellerOtherSeller'),
    href: '/',
    number: 5013624822,
    reveal: t('ProductDetails.privatesellerReveal'),
    message: t('ProductDetails.privatesellerMessage'),
    reviewsCount: 5,
    reviews: t('ProductDetails.privatesellerReviews'),
  }

  return (
    <div className="space-y-8 rounded-xl border border-zinc-200 bg-slate-100 p-4 text-zinc-700 dark:border-none dark:bg-main-600 dark:text-white">
      <div className="space-y-3">
        {/* Title */}
        <h2>{privateSeller.title}</h2>

        <div className="flex items-center gap-2">
          {/* User-Profile */}
          <Image
            src={privateSeller.userImage}
            alt="user-profile"
            className="size-12 rounded-full"
          />

          <div className="space-y-0.5">
            {/* Name */}
            <span className="text-xl font-bold">{privateSeller.userName}</span>

            {/* Rate */}
            <div className="flex items-center gap-0.5">
              {[...Array(privateSeller.rate)].map((_, index) => (
                <Image
                  key={index}
                  src={StarIcon}
                  alt="Star-icon"
                  className="size-3.5"
                />
              ))}

              {/* Reviews */}
              <p className="ml-1 text-sm dark:text-zinc-400">
                ({privateSeller.reviewsCount} {privateSeller.reviews})
              </p>
            </div>
          </div>
        </div>

        {/* Link */}
        <div>
          <Link
            href={privateSeller.href}
            className="underline hover:no-underline"
          >
            {privateSeller.otherSeller}
          </Link>
        </div>
      </div>

      {/* Links */}
      <div className="flex flex-col items-start gap-4">
        <Button className="space-x-3 rounded-lg border-2 border-zinc-700 bg-transparent py-6 text-zinc-700 hover:border-blue-500 hover:bg-blue-500 hover:text-white dark:border-white dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-blue-500">
          <PhoneCallIcon className="size-5" />

          <div>
            <p>({privateSeller.number.toString().slice(0, 3)}) *** ** ** -</p>
          </div>

          <div>
            <p>{privateSeller.reveal}</p>
          </div>
        </Button>

        <Button className="space-x-3 rounded-lg border-2 border-blue-500 bg-blue-500 py-6 text-white hover:border-white hover:bg-white hover:text-blue-500 dark:text-white dark:hover:text-blue-500">
          <MailIcon className="size-5" />

          <div>
            <p>{privateSeller.message}</p>
          </div>
        </Button>
      </div>
    </div>
  )
}

export default PrivateSeller
