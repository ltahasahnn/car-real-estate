'use client'

// Components
import LatestNews from '@components/HomePage/LatestNews'
import BreadCrumb from '@components/BreadCrumb'
import Container from '@components/Container'
import Conditions from '@components/about/Conditions'
import FAQ from '@components/about/FAQ'
import GrowingFast from '@components/about/GrowingFast'
import OurPartners from '@components/about/OurPartners'
import OurStory from '@components/about/OurStory'
import PersonalizedSearch from '@components/about/PersonalizedSearch'
import SearchCar from '@components/about/SearchCar'
import { useTranslation } from '@/app/i18n/client'

const page = ({ params: { lng } }: { params: { lng: string } }) => {
  const { t } = useTranslation(lng, 'translation')
  return (
    <Container className="py-8">
      <div>
        {/* Breadcrumb */}
        <BreadCrumb lng={lng} text={t('About.breadcrumbTitle')} />
      </div>

      <div>
        <SearchCar lng={lng} />
        <GrowingFast lng={lng} />
        <OurStory lng={lng} />
        <PersonalizedSearch lng={lng} />
        <Conditions lng={lng} />
        <OurPartners />
        <FAQ lng={lng} />
        <LatestNews lng={lng} />
      </div>
    </Container>
  )
}
export default page
