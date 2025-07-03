import clsx from 'clsx'
// Images
import RealSegurosImage from '@assets/images/real-seguros.svg'
import ProvertImage from '@assets/images/provert.svg'
import CargilImage from '@assets/images/cargil.svg'
import PentelImage from '@assets/images/pentel.svg'
import ChaseImage from '@assets/images/chase.svg'
import BuildImage from '@assets/images/build.svg'
import Image from 'next/image'
// Components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@components/ui/carousel'
// Types
import { OurPartnersProps } from '@/@types/types'

const OurPartners = () => {
  const carouselClassName =
    'top-[125%] bg-gray-400 text-white hover:bg-gray-500 hover:text-white dark:bg-main-600 dark:hover:bg-main-500 lg:hidden'
  const ourPartners: OurPartnersProps = {
    title: 'Our Partners',
    items: [
      {
        image: ProvertImage,
        alt: 'provert-brand',
      },
      {
        image: PentelImage,
        alt: 'pentel-brand',
      },
      {
        image: ChaseImage,
        alt: 'chase-brand',
      },
      {
        image: RealSegurosImage,
        alt: 'real-seguros-brand',
      },
      {
        image: BuildImage,
        alt: 'build-brand',
      },
      {
        image: CargilImage,
        alt: 'cargil-brand',
      },
    ],
  }

  return (
    <div className="space-y-10 py-12 text-center">
      <h2 className="text-4xl font-bold text-zinc-700 dark:text-white max-lg:text-3xl max-sm:text-2xl">
        {ourPartners.title}
      </h2>

      <div>
        <Carousel className="w-full rounded-xl border border-zinc-200 bg-slate-200 dark:border-none dark:bg-main-700">
          <CarouselContent className="m-0 flex w-full">
            {ourPartners.items.map((item, index) => (
              <CarouselItem
                key={index}
                className="py-6 pl-0 max-lg:basis-1/5 max-lg:px-1.5 max-md:basis-1/4 max-sm:basis-1/2 lg:shrink lg:basis-1/6"
              >
                <Image
                  src={item.image}
                  className="m-auto h-20 w-fit cursor-pointer border-zinc-500 object-cover duration-300 dark:opacity-25 dark:hover:opacity-100 max-lg:h-16"
                  alt={item.alt}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className={clsx(carouselClassName, '!left-3')} />
          <CarouselNext className={clsx(carouselClassName, '!right-3')} />
        </Carousel>
      </div>
    </div>
  )
}
export default OurPartners
