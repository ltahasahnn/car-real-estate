'use client'

// Components
import Communication from '@components/Contact/Communication'
import Newsletter from '@components/Contact/Newsletter'
import BreadCrumb from '@components/BreadCrumb'
import Container from '@components/Container'
// Images
import EnvelopeImage from '@assets/images/envelope.svg'
import MapPinImage from '@assets/images/map-pin.svg'
import ChatImage from '@assets/images/chat.svg'
import { useTranslation } from '@/app/i18n/client'

const page = ({ params: { lng } }: { params: { lng: string } }) => {
  const { t } = useTranslation(lng, 'translation')
  const contactList = {
    title: t('Contact.contactTitle'),
    description: t('Contact.contactDescription'),
    communication: [
      {
        icon: EnvelopeImage,
        alt: 'envelope-image',
        title: t('Contact.contactSubTitle1'),
        description: t('Contact.contactSubDescription1'),
        link: t('Contact.contactLink1'),
        href: '',
      },
      {
        icon: ChatImage,
        alt: 'chat-image',
        title: t('Contact.contactSubTitle2'),
        description: t('Contact.contactSubDescription2'),
        link: t('Contact.contactLink2'),
        href: '',
      },
      {
        icon: MapPinImage,
        alt: 'map-pin-image',
        title: t('Contact.contactSubTitle3'),
        description: t('Contact.contactSubDescription3'),
        link: t('Contact.contactLink3'),
        href: '',
      },
    ],
  }

  return (
    <Container className="py-8">
      <div className="w-full">
        {/* Breadcrumb */}
        <BreadCrumb lng={lng} text={t('Contact.contactTitle')} />
      </div>

      <div className="grid grid-cols-2 max-lg:grid-cols-1">
        <div>
          <div className="mb-16 mt-8 space-y-5 max-lg:mb-8">
            {/* Title */}
            <h2 className="text-4xl font-bold text-zinc-700 dark:text-white max-lg:text-3xl max-sm:text-2xl">
              {contactList.title}
            </h2>

            {/* Description */}
            <div className="text-zinc-700 dark:text-gray-400 max-lg:text-lg max-sm:text-sm lg:max-w-sm">
              <p>{contactList.description}</p>
            </div>
          </div>

          <div className="space-y-10">
            {contactList.communication.map((_, index) => (
              <Communication
                communication={contactList.communication[index]}
                key={index}
              />
            ))}
          </div>
        </div>

        <div className="py-8">
          <Newsletter lng={lng} />
        </div>
      </div>

      <div className="mt-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d12209.519065669318!2d29.501700815211915!3d40.089245043902885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x14cbc9628c6f60ad%3A0x786c8103f1cc4ca6!2zU2luYW5iZXksIDE2NDAwIMSwbmVnw7ZsL0J1cnNh!3m2!1d40.097048099999995!2d29.512221!5e0!3m2!1str!2str!4v1714940328211!5m2!1str!2str"
          className="min-h-96 w-full rounded-2xl"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Container>
  )
}
export default page
