import React, { useEffect, useState } from 'react'
import SearchResults from './SearchResults'
import { useDebounce } from '../hooks/useDebounce'

const SearchComponents = () => {
  const [searchValue, setSearchValue] = useState('')

  const handleSearchValueChange = (e) => {
    setSearchValue(e.target.value)
  }
  const handleClearSearchValue = () => {
    setSearchValue('')
  }
  const debouncedSearchValue = useDebounce(searchValue, 400)

  return (
    <>
      <div className="search_container_wrapper">
        <div className="set_search_box_container">
          <input
            className="search_box"
            placeholder="Search Movies"
            value={searchValue}
            onChange={(e) => handleSearchValueChange(e)}
          />
          <button onClick={handleClearSearchValue} className="clear_icon">
            X
          </button>
        </div>

        {searchValue ? (
          <div className="search_container">
            <SearchResults value={debouncedSearchValue} />
          </div>
        ) : null}
      </div>
    </>
  )
}

export default SearchComponents
