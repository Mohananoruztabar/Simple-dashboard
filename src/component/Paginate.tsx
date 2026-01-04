import React from 'react'
import ReactPaginate from "react-paginate"
import styled from "../component/component.module.css"


type Users = {
  id: number
  name: string
  email: string
  phone: string
  created_at: string
}


type PaginateProps = {
  pageCount: number
  handlePageClick: (newPage: number) => void
}


function Paginate({ pageCount, handlePageClick }: PaginateProps) {

  const onPageChange = (event: { selected: number }) => {
    const newPage = event.selected + 1
    handlePageClick(newPage)
  }


  return (
    <>
      
      <ReactPaginate className={styled.pagination}
        breakLabel="..."
        nextLabel="next >"
        onPageChange={onPageChange}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  )
}

export default Paginate