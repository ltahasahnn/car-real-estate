// Images
import MitsubishiImage from '@assets/images/mitsubishi.svg'
import MercedesImage from '@assets/images/mercedes.svg'
import InfinitiImage from '@assets/images/infiniti.svg'
import HyundaiImage from '@assets/images/hyundai.svg'
import RenaultImage from '@assets/images/renault.svg'
import NissanImage from '@assets/images/nissan.svg'
import ToyotaImage from '@assets/images/toyota.svg'
import MazdaImage from '@assets/images/mazda.svg'
import LexusImage from '@assets/images/lexus.svg'
import HondaImage from '@assets/images/honda.svg'
import OpelImage from '@assets/images/opel.svg'
import AudiImage from '@assets/images/audi.svg'
import Image from 'next/image'
// Components
import Container from '@components/Container'
// Types
import { CarsInformationProps } from '@/@types/types'

interface CarsInformation {
  lng: string
}

const CarsInformation: React.FC<CarsInformation> = ({ lng }) => {
  const BrandList: CarsInformationProps[] = [
    { image: OpelImage, alt: 'Opel' },
    { image: AudiImage, alt: 'Audi' },
    { image: MercedesImage, alt: 'Mercedes' },
    { image: ToyotaImage, alt: 'Toyota' },
    { image: MazdaImage, alt: 'Mazda' },
    { image: NissanImage, alt: 'Nissan' },
    { image: HyundaiImage, alt: 'Hyundai' },
    { image: LexusImage, alt: 'Lexus' },
    { image: HondaImage, alt: 'Honda' },
    { image: RenaultImage, alt: 'Renault' },
    { image: InfinitiImage, alt: 'Infiniti' },
    { image: MitsubishiImage, alt: 'Mitsubishi' },
  ]
  return (
    <div className="bg-slate-400 px-2 py-14 dark:bg-transparent dark:px-0">
      <Container className="grid grid-cols-12 gap-4 rounded-xl max-xl:grid-cols-6 max-xl:gap-y-12 max-sm:grid-cols-4">
        {BrandList.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer duration-200 hover:opacity-100 dark:opacity-50"
          >
            <div>
              <Image
                src={item.image}
                className="max-h-12 rounded-xl object-cover xl:w-full"
                alt={item.alt}
              />
            </div>
          </div>
        ))}
      </Container>
    </div>
  )
}
export default CarsInformation
