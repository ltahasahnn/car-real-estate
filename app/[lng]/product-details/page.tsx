import ProductDetails from '@components/ProductDetails/ProductDetails'

const page = ({ params: { lng } }: { params: { lng: string } }) => {
  return (
    <div>
      <ProductDetails lng={lng} />
    </div>
  )
}
export default page
