// Types
import { SelectboxProps } from '@/@types/types'
// Components
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const Selectbox: React.FC<SelectboxProps> = ({
  placeholder,
  items,
  className,
  classContent,
  classContentItem,
}) => {
  return (
    <Select>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent className={classContent}>
        {items.map((item, index) => (
          <SelectItem
            className={classContentItem}
            key={index}
            value={String(item.value)}
          >
            {item.value}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
export default Selectbox
