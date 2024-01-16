import React, { useState, useEffect } from 'react'
import { peopleData } from '../../src/utils/constants'
import PersonCard from './components/PersonCard'

const Pagination = ({ paginationLimit = 10 }) => {
  const [paginatedData, setPaginatedData] = useState([])
  const totalPages = Math.ceil(peopleData.length / paginationLimit)

  const [currentPage, setCurrentPage] = useState(0)

  const currentStartIndex = currentPage * paginationLimit
  const endIndex = currentStartIndex + paginationLimit

  useEffect(() => {
    const currentPageData = peopleData.slice(currentStartIndex, endIndex)
    setPaginatedData(currentPageData)
  }, [currentPage, paginationLimit, currentStartIndex, endIndex])

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prevPage) => prevPage + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1)
    }
  }

  return (
    <>
      <PersonCard userData={paginatedData} />
      <div className="btn_container">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 0}
          className="btn"
        >
          Prev
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
          className="btn"
        >
          Next
        </button>
      </div>
    </>
  )
}

export default Pagination
