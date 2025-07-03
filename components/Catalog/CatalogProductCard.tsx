import clsx from 'clsx'
import Image from 'next/image'

// Images
import { Heart, Map, CircleGauge, Cog, Fuel } from 'lucide-react'

// Components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@components/ui/carousel'
import Badge from '@components/ui/Badge'
import { Card, CardContent } from '@components/ui/card'
// Types
import { ProductType } from '@/@types/types'

interface ProductCardProps {
  product: ProductType
  variant?: 'horizontal' | 'vertical'
  galleryType?: 'slider' | 'static'
}

const navigationButtonClasses =
  'absolute z-20 h-10 w-10 border-none bg-white bg-opacity-40 shadow-md hover:bg-opacity-100 hover:text-blue-500'

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  variant = 'vertical',
  galleryType = 'slider',
}) => {
  return (
    <div
      className={clsx(
        'group relative w-full cursor-pointer overflow-hidden rounded-lg bg-slate-100 transition-all duration-500 dark:bg-main-600',
        {
          'sm:flex ': variant === 'horizontal',
        },
      )}
    >
      {/* Product Images */}
      <div className="relative">
        {galleryType === 'slider' ? (
          <Carousel
            className={clsx('relative w-full ', {
              ' w-full sm:max-w-96 lg:max-w-lg': variant === 'horizontal',
            })}
          >
            <CarouselContent className="swiper">
              {product.images.map((image, index) => (
                <CarouselItem className="!p-0" key={index}>
                  <div>
                    <Card
                      className={clsx(
                        'overflow-hidden !rounded-none border-none',
                        {
                          '!rounded-b-none': variant === 'vertical',
                          ' max-sm:rounded-b-none sm:!rounded-r-none':
                            variant === 'horizontal',
                        },
                      )}
                    >
                      <CardContent
                        className={clsx(
                          'flex aspect-square w-full items-center justify-center rounded-none !p-0 max-sm:max-h-48',
                          variant === 'vertical'
                            ? 'max-h-60 sm:max-h-96 lg:max-h-64'
                            : 'max-h-60',
                        )}
                      >
                        <div
                          className={clsx(
                            'w-full bg-contain bg-center object-cover max-sm:max-h-48',
                            variant === 'vertical'
                              ? 'h-60 sm:h-96 lg:h-64'
                              : 'h-64',
                          )}
                        >
                          <Image
                            className="h-full w-full object-cover"
                            src={image.src}
                            alt={image.alt}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              className={clsx(navigationButtonClasses, 'left-2')}
            />
            <CarouselNext
              className={clsx(navigationButtonClasses, 'right-2')}
            />
          </Carousel>
        ) : (
          <div
            className={clsx(
              'w-full bg-contain bg-center object-cover',
              variant === 'vertical' ? 'h-60 sm:h-96 lg:h-64' : 'h-64',
            )}
          >
            <Image
              className="h-full w-full object-cover"
              src={product.images[0].src}
              alt={product.images[0].alt}
            />
          </div>
        )}

        {/* Add To Wishlist */}
        <button className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white p-2 transition-all duration-500 group-hover:opacity-100 lg:opacity-0">
          <Heart className="h-4 w-4 text-blue-600" />
        </button>

        {/* Informations */}
        <div className="absolute left-4 top-4 space-y-1">
          {product.situation === 'new' ? (
            <Badge className="bg-red-600">New</Badge>
          ) : (
            <Badge className="bg-blue-600">Used</Badge>
          )}
          {product.certified && (
            <Badge className="bg-green-600">Certified</Badge>
          )}
        </div>
      </div>

      <div className="w-full p-5 text-zinc-800 dark:text-white">
        {/* Produce Date */}
        <p className="text-sm ">{product.produceDate}</p>

        {/* Name */}
        <p className="mt-2.5 line-clamp-1 text-lg font-semibold opacity-70 transition-all duration-500 hover:opacity-100">
          {product.name}
        </p>

        {/* Price */}
        <p className="my-1 font-bold text-blue-600 dark:text-blue-500">
          ${product.price}
        </p>

        {/* Location */}
        <p className="flex items-center gap-1 text-xs font-normal opacity-70 dark:font-light">
          <Map className="h-5 w-5 " />
          {product.location}
        </p>

        <div
          className={clsx(
            'mb-4 h-px w-full bg-white opacity-20',
            variant === 'vertical' ? 'mt-14' : 'mt-4',
          )}
        ></div>

        <div className="flex items-center justify-between gap-1.5 font-normal *:w-full *:rounded-lg *:border *:border-zinc-200 *:bg-slate-200 *:px-1 *:py-3 *:text-center *:text-zinc-700 *:dark:border-none dark:*:bg-main-700 dark:*:text-white">
          {/* Mileage */}
          <div>
            <CircleGauge className="mx-auto h-5  w-5 " />
            <p className="mt-2 text-[10px]">{product.mileage} km</p>
          </div>
          {/* Gear Type */}
          <div>
            <Cog className="mx-auto h-5  w-5 " />
            <p className="mt-2 text-[10px]">{product.gearType}</p>
          </div>
          {/* Fuel Type */}
          <div>
            <Fuel className="mx-auto h-5  w-5 " />
            <p className="mt-2 text-[10px]">{product.fuelType}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
