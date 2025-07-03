import CarParts from '@components/HomePage/CarParts'
import CarsInformation from '@components/HomePage/CarsInformation'
import Container from '@components/Container'
import Filter from '@components/HomePage/Filter'
import PromeApart from '@/components/HomePage/PromeApart'
import Hero from '@components/HomePage/Hero'
import LatestCars from '@components/HomePage/LatestCars'
import LatestNews from '@components/HomePage/LatestNews'
import PopularCarBodyTypes from '@components/HomePage/PopularCarBodyTypes'
import TopOffers from '@components/HomePage/TopOffers'
import TopRated from '@components/HomePage/TopRated'

export default function Home({
  params: { lng },
}: {
  params: {
    lng: string
  }
}) {
  return (
    <div>
      <Container className="*:py-14">
        <Hero lng={lng} />
        <Filter lng={lng} />
        <PopularCarBodyTypes lng={lng} />
        <TopOffers lng={lng} />
      </Container>
      <CarsInformation lng={lng} />
      <Container className="*:py-14">
        <PromeApart lng={lng} />
        <LatestCars lng={lng} />
        <CarParts lng={lng} />
        <TopRated lng={lng} />
        <LatestNews lng={lng} />
      </Container>
    </div>
  )
}
