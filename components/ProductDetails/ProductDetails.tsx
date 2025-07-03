'use client'
import clsx from 'clsx'
import Link from 'next/link'

// Components
import SellerDescription from '@components/ProductDetails/SellerDescription'
import Specifications from '@components/ProductDetails/Specifications'
import ImageGallery from '@components/ProductDetails/ImageGallery'
import Features from '@components/ProductDetails/Features'
import LatestCars from '@/components/HomePage/LatestCars'
import Details from '@components/ProductDetails/Details'
import Container from '@components/Container'
import Badge from '@components/ui/Badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@components/ui/dropdown-menu'
// Images
import {
  CircleGaugeIcon,
  FacebookIcon,
  HeartIcon,
  InstagramIcon,
  MapPinIcon,
  Share2Icon,
  TwitterIcon,
} from 'lucide-react'
import CarImage1 from '@assets/images/examples/mercedes.jpeg'
import CarImage2 from '@assets/images/examples/mercedes2.jpeg'
import CarImage3 from '@assets/images/examples/mercedes3.jpeg'
// Types
import { ProductDetailsProps } from '@/@types/types'
// Utils
import { useTranslation } from '@/app/i18n/client'

interface ProductDetails {
  lng: string
}

const ProductDetails: React.FC<ProductDetails> = ({ lng }) => {
  const { t } = useTranslation(lng, 'translation')
  const details: ProductDetailsProps = {
    productTitle: 'Mercedes-Benz E 400 Cabriolet',
    productImages: [
      { src: CarImage1, alt: 'Car Image' },
      { src: CarImage2, alt: 'Car Image' },
      { src: CarImage3, alt: 'Car Image' },
      { src: CarImage1, alt: 'Car Image' },
      { src: CarImage2, alt: 'Car Image' },
      { src: CarImage3, alt: 'Car Image' },
      { src: CarImage1, alt: 'Car Image' },
      { src: CarImage2, alt: 'Car Image' },
      { src: CarImage3, alt: 'Car Image' },
      { src: CarImage1, alt: 'Car Image' },
      { src: CarImage2, alt: 'Car Image' },
      { src: CarImage3, alt: 'Car Image' },
    ],
    published: [
      {
        title: t('ProductDetails.published1'),
        value: 2021,
      },
      {
        title: t('ProductDetails.published2'),
        value: 681013232,
      },
      {
        title: t('ProductDetails.published3'),
        value: 57,
      },
    ],
    price: 31.9,
    miles: 25,
    location: 'Chicago, IL 60603',
    situation: 'Used',
    certified: true,
    favorite: HeartIcon,
    share: [
      { icon: FacebookIcon, title: 'Facebook', href: '#' },
      { icon: TwitterIcon, title: 'Twitter', href: '#' },
      { icon: InstagramIcon, title: 'Instagram', href: '#' },
    ],
  }

  const shareClassName =
    'size-8 rounded-full dark:bg-zinc-800 bg-slate-100 border dark:border-none border-zinc-200 text-zinc-700 dark:text-white text-white p-1.5 cursor-pointer hover:text-blue-500'

  return (
    <div className="text-zinc-700 dark:text-white">
      <Container className="space-y-16">
        <div>
          <div className="flex py-8 max-md:flex-col max-md:gap-4 md:justify-between">
            <h2 className="text-3xl font-bold max-lg:text-2xl">
              {details.productTitle}
            </h2>

            <div className="flex flex-col justify-center gap-6 md:hidden">
              <div className="flex gap-4">
                {/* Informations */}
                <div className="flex items-center gap-2 *:!text-base">
                  {details.situation === 'new' ? (
                    <Badge className="bg-red-600 !py-1 px-3">
                      {t('typeSwitcher.situation1')}
                    </Badge>
                  ) : (
                    <Badge className="bg-blue-600 !py-1 px-3">
                      {t('typeSwitcher.situation2')}
                    </Badge>
                  )}
                  {details.certified && (
                    <Badge className="bg-emerald-500 !py-1 px-3">
                      {t('typeSwitcher.certified1')}
                    </Badge>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-between max-sm:flex-col max-sm:gap-4">
              {/* Location & Miles */}
              <div className="flex md:hidden">
                <div className="flex items-center gap-2 max-lg:text-sm">
                  <CircleGaugeIcon className="size-5" />
                  <span>
                    {details.miles} {t('ProductDetails.miles')}
                  </span>
                  <div className="mx-2 h-full rounded-full border dark:border-zinc-700"></div>
                  <MapPinIcon className="size-5" />
                  <span>{details.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <details.favorite className={shareClassName} />

                {/* Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Share2Icon className={shareClassName} />
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className="bg-white dark:bg-main-600">
                    {details.share.map((item, index) => (
                      <Link key={index} href={item.href}>
                        <DropdownMenuItem
                          key={index}
                          className="flex cursor-pointer items-center gap-2 dark:text-white"
                        >
                          <item.icon className="size-5" />
                          <p>{item.title}</p>
                        </DropdownMenuItem>
                      </Link>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>

          <div className="flex shrink-0 gap-6 max-md:flex-col">
            {/* Content */}
            <div className="w-7/12 max-md:w-full">
              <ImageGallery image={details.productImages} />
              <Specifications lng={lng} />
              <Features lng={lng} />
              <SellerDescription lng={lng} />

              {/* Published */}
              <div className="flex gap-5 border-t border-zinc-700 pt-6 text-sm text-zinc-700 dark:text-zinc-400 max-sm:flex-col sm:items-center">
                {details.published.map((item, index) => (
                  <div
                    key={index}
                    className={clsx(
                      'flex items-center gap-2 border-zinc-700',
                      index === 1 && 'sm:border-x sm:px-5',
                    )}
                  >
                    <span className="max-sm:text-sm">{item.title}:</span>
                    <span className="max-sm:tex-xs font-bold">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="5/12 sticky top-10 max-md:w-full">
                <Details
                  lng={lng}
                  certified={details.certified}
                  situation={details.situation}
                  price={details.price}
                  miles={details.miles}
                  location={details.location}
                />
              </div>
            </div>
          </div>
        </div>

        <LatestCars lng={lng} />
      </Container>
    </div>
  )
}

export default ProductDetails
