'use client'
import React, { useEffect, useState } from 'react'

// Styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
// Components
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ImageIcon } from 'lucide-react'
import Image from 'next/image'
// Types
import { ImageGalleryProps } from '@/@types/types'

const ImageGallery: React.FC<ImageGalleryProps> = ({ image }) => {
  const [windowWidth, setWindowWidth] = useState(0)
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [swipeCount, setSwipeCount] = useState(1)
  const [perView, setPerView] = useState(4)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (windowWidth < 500) setPerView(3)
    else setPerView(4)
  }, [windowWidth])

  const handleSlideChange = (swiper: any) => {
    setSwipeCount(swiper.realIndex + 1)
  }

  return (
    <div className="w-full select-none space-y-3">
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 relative w-full"
        onSlideChange={handleSlideChange}
      >
        {image.map((item, index) => (
          <SwiperSlide key={index} className="w-full cursor-pointer">
            <Image
              className="aspect-[2/1] w-full rounded-xl object-cover"
              src={item.src}
              alt={item.alt}
              width={500}
              height={300}
            />
          </SwiperSlide>
        ))}

        <div className="absolute bottom-6 right-10 z-10 flex items-center gap-2 text-white">
          <ImageIcon className="size-5" />

          <span>
            {swipeCount}/{image.length}
          </span>
        </div>
      </Swiper>

      <Swiper
        onSwiper={(swiper: any) => setThumbsSwiper(swiper)}
        loop={true}
        spaceBetween={16}
        slidesPerView={perView}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper w-full"
        onSlideChange={handleSlideChange}
      >
        {image.map((item, index) => (
          <SwiperSlide key={index} className="w-full cursor-pointer shadow">
            <Image
              className="aspect-[2/1] max-h-24 w-full rounded-lg object-cover max-sm:min-h-16"
              src={item.src}
              alt={item.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
export default ImageGallery
