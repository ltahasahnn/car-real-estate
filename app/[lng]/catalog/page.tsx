'use client'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

// Components
import BreadCrumb from '@components/BreadCrumb'
import CatalogProductCard from '@components/Catalog/CatalogProductCard'
import Sidebar from '@components/Catalog/Sidebar'
import Sortby from '@components/Catalog/Sortby'
import Container from '@components/Container'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@components/ui/sheet'
// Images
import { Car, FilterIcon } from 'lucide-react'
import MercedesImage from '@assets/images/examples/mercedes.jpeg'
import MercedesImage2 from '@assets/images/examples/mercedes2.jpeg'
import MercedesImage3 from '@assets/images/examples/mercedes3.jpeg'
// Types
import { ProductListProps } from '@/@types/types'
import { useTranslation } from '@/app/i18n/client'

const Page = ({ params: { lng } }: { params: { lng: string } }) => {
  const { t } = useTranslation(lng, 'translation')
  const productList: ProductListProps[] = [
    {
      product: {
        images: [
          {
            src: MercedesImage,
            alt: 'mercedes-image',
          },
          {
            src: MercedesImage2,
            alt: 'mercedes-image',
          },
          {
            src: MercedesImage3,
            alt: 'mercedes-image',
          },
        ],
        produceDate: 2023,
        situation: 'used',
        certified: true,
        name: 'Mercedes Benz Convertible Coupe',
        price: 25000,
        location: 'Los Angeles, CA',
        mileage: 50000,
        gearType: t('CatalogProduct.gearType'),
        fuelType: t('CatalogProduct.fuelType'),
      },
    },
    {
      product: {
        images: [
          {
            src: MercedesImage,
            alt: 'mercedes-image',
          },
          {
            src: MercedesImage2,
            alt: 'mercedes-image',
          },
          {
            src: MercedesImage3,
            alt: 'mercedes-image',
          },
        ],
        produceDate: 2023,
        situation: 'used',
        certified: true,
        name: 'Mercedes Benz Convertible Coupe',
        price: 25000,
        location: 'Los Angeles, CA',
        mileage: 50000,
        gearType: t('CatalogProduct.gearType'),
        fuelType: t('CatalogProduct.fuelType'),
      },
    },
    {
      product: {
        images: [
          {
            src: MercedesImage,
            alt: 'mercedes-image',
          },
          {
            src: MercedesImage2,
            alt: 'mercedes-image',
          },
          {
            src: MercedesImage3,
            alt: 'mercedes-image',
          },
        ],
        produceDate: 2023,
        situation: 'used',
        certified: true,
        name: 'Mercedes Benz Convertible Coupe',
        price: 25000,
        location: 'Los Angeles, CA',
        mileage: 50000,
        gearType: t('CatalogProduct.gearType'),
        fuelType: t('CatalogProduct.fuelType'),
      },
    },
    {
      product: {
        images: [
          {
            src: MercedesImage,
            alt: 'mercedes-image',
          },
          {
            src: MercedesImage2,
            alt: 'mercedes-image',
          },
          {
            src: MercedesImage3,
            alt: 'mercedes-image',
          },
        ],
        produceDate: 2023,
        situation: 'used',
        certified: true,
        name: 'Mercedes Benz Convertible Coupe',
        price: 25000,
        location: 'Los Angeles, CA',
        mileage: 50000,
        gearType: t('CatalogProduct.gearType'),
        fuelType: t('CatalogProduct.fuelType'),
      },
    },
    {
      product: {
        images: [
          {
            src: MercedesImage,
            alt: 'mercedes-image',
          },
          {
            src: MercedesImage2,
            alt: 'mercedes-image',
          },
          {
            src: MercedesImage3,
            alt: 'mercedes-image',
          },
        ],
        produceDate: 2023,
        situation: 'used',
        certified: true,
        name: 'Mercedes Benz Convertible Coupe',
        price: 25000,
        location: 'Los Angeles, CA',
        mileage: 50000,
        gearType: t('CatalogProduct.gearType'),
        fuelType: t('CatalogProduct.fuelType'),
      },
    },
    {
      product: {
        images: [
          {
            src: MercedesImage,
            alt: 'mercedes-image',
          },
          {
            src: MercedesImage2,
            alt: 'mercedes-image',
          },
          {
            src: MercedesImage3,
            alt: 'mercedes-image',
          },
        ],
        produceDate: 2023,
        situation: 'used',
        certified: true,
        name: 'Mercedes Benz Convertible Coupe',
        price: 25000,
        location: 'Los Angeles, CA',
        mileage: 50000,
        gearType: t('CatalogProduct.gearType'),
        fuelType: t('CatalogProduct.fuelType'),
      },
    },
  ]
  const newTitle = t('typeSwitcher.situation1')
  const usedTitle = t('typeSwitcher.situation2')

  type CatalogType = typeof newTitle | typeof usedTitle

  const [catalog, setCatalog] = useState<CatalogType>(newTitle)

  const [switchVariant, setSwitchVariant] = useState<'vertical' | 'horizontal'>(
    'vertical',
  )
  const [selectedSwitch, setSelectedSwitch] = useState<boolean>(false)
  const filterTitle: string = t('CatalogTitle.title')

  const offersList = {
    offersValue: 249,
    offers: t('CatalogTitle.offers'),
  }

  const handleSwitchChange = (items: boolean) => {
    setSelectedSwitch(items)
  }
  const handleSidebarChange = (items: 'New' | 'Used') => {
    setCatalog(items)
  }

  // Switch Product Variant
  useEffect(() => {
    if (selectedSwitch) {
      setSwitchVariant('vertical')
    } else {
      setSwitchVariant('horizontal')
    }
  }, [selectedSwitch])

  return (
    <Container className="flex h-full min-h-screen w-full text-white">
      {/* Sidebar */}
      <div className="top-0 h-full w-fit duration-500">
        <div className="max-w-xs max-lg:hidden">
          <Sidebar
            lng={lng}
            catalog={catalog}
            setCatalog={handleSidebarChange}
          />
        </div>

        <div className="relative z-50 max-w-xs">
          <Sheet>
            {/* Sidebar Title */}
            <SheetTrigger className="bottom-0 left-0 flex w-full items-center justify-center gap-2 bg-blue-500 p-2 font-semibold dark:!text-white max-lg:fixed lg:hidden">
              <FilterIcon className="size-5" />
              {filterTitle}
            </SheetTrigger>

            {/* Sidebar Content */}
            <SheetContent
              side={'left'}
              className="overflow-auto border-none bg-white text-zinc-700 dark:bg-main-700 dark:text-white"
            >
              <SheetHeader>
                <SheetTitle className="w-fit text-zinc-700 dark:text-white max-sm:px-4">
                  {filterTitle}
                </SheetTitle>

                <Sidebar
                  lng={lng}
                  catalog={catalog}
                  setCatalog={handleSidebarChange}
                />
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Content */}
      <div className="h-full w-full space-y-5 sm:p-6">
        {/* BreadCrumb */}
        <BreadCrumb lng={lng} text={catalog} />

        {/* Title & Offers */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-zinc-700 dark:text-white">
          <h2 className="text-4xl font-bold max-md:text-2xl">
            {t('typeSwitcher.situation2')} {t('CatalogTitle.subTitle')}
          </h2>

          <div className="flex items-center gap-1.5 text-sm">
            <Car className="size-6" />

            <p>{offersList.offersValue}</p>
            <p>{offersList.offers}</p>
          </div>
        </div>

        <div className="space-y-4">
          {/* Sortby */}
          <Sortby
            lng={lng}
            switchMode={selectedSwitch}
            onSwitchChange={handleSwitchChange}
            switchGrid
          />

          {/* Products */}
          <div
            className={clsx(
              'grid gap-6',
              selectedSwitch ? 'grid-cols-2 max-md:grid-cols-1' : 'grid-cols-1',
            )}
          >
            {productList.map((productItem, productIndex) => (
              <CatalogProductCard
                key={productIndex}
                variant={switchVariant}
                product={productItem.product}
              />
            ))}
          </div>

          {/* Sortby & Pagination */}
          <div className="flex w-full items-center justify-between py-4 max-lg:flex-col max-lg:gap-6">
            <Sortby
              lng={lng}
              switchMode={selectedSwitch}
              onSwitchChange={handleSwitchChange}
              switchGrid={false}
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Page
