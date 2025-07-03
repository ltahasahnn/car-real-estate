import React, { useState } from 'react'

// Components
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@components/ui/pagination'
// Types
import { PaginationListProps } from '@/@types/types'

const Paginations = () => {
  const [count, setCount] = useState([0, 3])
  const PaginationList: PaginationListProps[] = [
    { value: 1, href: '#' },
    { value: 2, href: '#' },
    { value: 3, href: '#' },
    { value: 4, href: '#' },
    { value: 5, href: '#' },
    { value: 6, href: '#' },
    { value: 7, href: '#' },
    { value: 8, href: '#' },
    { value: 9, href: '#' },
    { value: 10, href: '#' },
  ]

  const handlePreviousClick = () => {
    if (count[0] !== 0 || count[1] !== PaginationList.length) {
      setCount([count[0] - 1, count[1] - 1])
    }
  }

  const handleNextClick = () => {
    setCount([count[1], count[1] + 3])
  }

  const handlePaginationItemClick = () => {
    if (count[0] !== 0 || count[1] !== PaginationList.length) {
      setCount([count[0] + 1, count[1] + 1])
    }
  }

  return (
    <div className="w-fit">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={handlePreviousClick} href="#" />
          </PaginationItem>

          {PaginationList.slice(count[0], count[1]).map((item, index) => (
            <PaginationItem key={index} onClick={handlePaginationItemClick}>
              <PaginationLink href={item.href}>{item.value}</PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext onClick={handleNextClick} href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export default Paginations
