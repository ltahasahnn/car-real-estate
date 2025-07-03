import { LucideIcon } from 'lucide-react'
import { StaticImageData } from 'next/image'
import { ReactElement } from 'react'

export interface DropdownItem {
  icon?: any
  title: string
  submenu?: DropdownItem[] | null
  href?: string
}

export interface NavigationItem {
  name: string
  href: string
  submenu?: DropdownItem[]
}

export interface ImageType {
  src: StaticImageData
  alt: string
}

export interface ProductType {
  images: ImageType[]
  produceDate: number
  situation: 'used' | 'new'
  certified: boolean
  name: string
  price: number
  location: string
  mileage: number
  gearType: 'automatic' | 'manual'
  fuelType: 'diesel' | 'hybrid' | 'gasoline'
}

export interface SocialMediaLinkType {
  name: string
  src: StaticImageData
  href: string
}

interface Comment {
  text: string
}

export interface News {
  image: StaticImageData
  tag: string
  title: string
  alt: string
  date: Date
  comments: Comment[]
  reporter: {
    image: StaticImageData
    fullName: string
  }
}

// Product Details
export interface ProductDetailsProps {
  productTitle: string
  productImages: ProductImageProps[]
  published: ProductPublishedProps[]
  price: number
  miles: number
  location: string
  situation: string
  certified: boolean
  favorite: LucideIcon
  share: ProductShareProps[]
}
interface ProductShareProps {
  icon: LucideIcon
  title: string
  href: string
}
interface ProductImageProps {
  src: StaticImageData
  alt: string
}
interface ProductPublishedProps {
  title: string
  value: string | number
}

// Details
export interface DetailsProps {
  certified: boolean
  lng: string
  situation: string
  price: number
  miles: number
  location: string
}

// Specifications
export interface SpecificationsProps {
  title: string
  specifications: SpecificationsItemProps[]
}
interface SpecificationsItemProps {
  text: string
  value: number | string
  icon?: LucideIcon
  situation?: string
}

// Features
export interface FeaturesProps {
  title: string
  item: FeaturesItem[]
}
interface FeaturesItem {
  title: string
  description: ValueProps[]
}
export interface featuresCard {
  description: string
  image: StaticImageData
  alt: string
}

export interface LanguageSwitcherProps {
  lng: string
  className?: string
}

// PrivateSeller
export interface PrivateSellerProps {
  title: string
  userImage: StaticImageData
  userName: string
  rate: number
  otherSeller: string
  href: strin
  number: number
  message: string
  reveal: string
  reviewsCount: number
  reviews: string
}

// Newsletter
export interface NewsletterItemProps {
  title: string
  subscribe: string
  rules: string
  placeholder: string
}

// SellerDescription
export interface SellerDescriptionProps {
  title: string
  description: string
  more: string
  href: string
}

// ImageGallery
interface ImageGalleryProps {
  image: ImageGalleryImageProps[]
}
interface ImageGalleryImageProps {
  src: StaticImageData
  alt: string
}

// FilterCheckbox
interface FilterCheckboxProps {
  title: string
  items: ValueProps[]
}

// MarketList
export interface MarketListProps {
  title: string
  description: string
  buttonText: string
  partList: MarketPartListProps[]
}
interface MarketPartListProps {
  image: StaticImageData
  description: string
  alt: string
}

// BodyType
export interface BodyTypeProps {
  image: string
  title: string
  alt: string
}

// FilterDropdownProps
interface FilterDropdownProps {
  items: ValueProps[]
  selectedItems: string | number
  onItemsChange: (items: string | number) => void
}
// ModelList
export interface ModelListProps {
  title: string
  anyMake: ValueProps[]
  anyModel: ValueProps[]
}

// OTPDropdown
export interface OTPDropdownProps {
  from: ValueProps[]
  to: ValueProps[]
}

// OTPInput
interface OTPInputProps {
  type: string
  handleMinInputChange: (event: ChangeEvent<HTMLInputElement>) => void
  handleMaxInputChange: (event: ChangeEvent<HTMLInputElement>) => void
  value: number[]
}

// SelectionList
export interface SelectionListProps {
  title: string
  clear: string
  items: ValueProps[]
}

interface ValueProps {
  value: string | number
}

// Sellers
export interface SellersProps {
  title: string
  items: ValueProps[]
}

// TransmissionList
export interface TransmissionListProps {
  title: string
  items: ValueProps[]
}

// YearList
export interface YearListProps {
  title: string
  fromList: ValueProps[]
  toList: ValueProps[]
}

// PaginationList
export interface PaginationListProps {
  value: number
  href: string
}

// ProductListProps
export interface ProductListProps {
  product: ProductType
}

// BreadCrumb
export interface BreadCrumbProps {
  text: string
  lng: string
}

// SortbyProps
export interface SortbyProps {
  switchMode: boolean
  lng: string
  onSwitchChange: (list: boolean) => void
  switchGrid: boolean
}

export interface SortbyListProps {
  sortbyTitle: string
  compareTitle: string
  compareValue: number
  sortbyItems: ValueProps[]
}

// SearchCar
export interface SearchCarList {
  title: string
  description: string
  href: string
  buttonText: string
  alt: string
}

// GrowingFast
export interface GrowingFastProps {
  title: string
  items: GrowingFastItemProps[]
}
interface GrowingFastItemProps {
  image: StaticImageData
  alt: string
  title: string
  description: string
}

// OurStoryList
export interface OurStoryListProps {
  title: string
  items: OurStoryListItemProps[]
}
interface OurStoryListItemProps {
  title: number
  description: string
  number: number
}

// CarsInformation
export interface CarsInformationProps {
  image: StaticImageData
  alt: string
}

// PersonalizedSearch
export interface PersonalizedSearchProps {
  image: StaticImageData
  title: string
  alt: string
  description: string
  buttonText: string
  href: string
}

// Conditions
export interface ConditionsProps {
  image: StaticImageData
  title: string
  alt: string
  description: string
  buttonText: string
  href: string
}

// OurPartners
export interface OurPartnersProps {
  title: string
  items: OurPartnersItemsProps[]
}
interface OurPartnersItemsProps {
  image: StaticImageData
  alt: string
}

// FAQ
export interface FAQListProps {
  title: string
  description: string
  href: string
  buttonText: string
  src: StaticImageData
  alt: string
  items: FAQListItemsProps[]
}
interface FAQListItemsProps {
  subTitle: string
  description: string
}

// Contact
export interface ContactListProps {
  title: string
  description: string
  communication: ContactCommunicationProps[]
}
interface ContactCommunicationProps {
  icon: StaticImageData
  title: string
  description: string
  link: string
  href: string
}

export interface CommunicationProps {
  communication: CommunicationItemProps
}
interface CommunicationItemProps {
  icon: StaticImageData
  alt: string
  title: string
  description: string
  link: string
  href: string
}

// NewsletterList
export interface NewsletterListProps {
  buttonText: string
  title: string
  placeholder: string
  inputItems: NewsletterInputItems[]
  subjectItems: NewsletterSubjectItems
}
interface NewsletterInputItems {
  title: string
  placeholder?: string
}
interface NewsletterSubjectItems {
  title: string
  items: ValueProps[]
}

// Selectbox
export interface SelectboxProps {
  placeholder: string
  items: SelectboxItemsProps[]
  className?: string
  classContent?: string
  classContentItem?: string
}
interface SelectboxItemsProps {
  value: string | number
}

// TopRated
export interface TopRatedListProps {
  title: string
  description: string
  items: TopRatedItemsProps[]
}
interface TopRatedItemsProps {
  image: StaticImageData
  alt: string
  href: string
}
