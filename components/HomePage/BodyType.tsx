import Image from 'next/image'
// Types
import { BodyTypeProps } from '@/@types/types'

const BodyType: React.FC<BodyTypeProps> = ({ image, title, alt }) => {
  return (
    <div className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-slate-100 text-zinc-500 duration-200 hover:bg-slate-200 dark:border-none dark:bg-main-600 dark:text-gray-300 dark:hover:bg-main-500">
      <Image src={image} alt={alt} />
      <h3 className="my-4">{title}</h3>
    </div>
  )
}
export default BodyType
