import React from 'react'
import { countries } from '../utils/constants'
import { findCountries } from '../utils/helpers'

const SearchResults = ({ value: searchedCountry }) => {
  const matchingCountriesResult = findCountries(searchedCountry, countries)

  if (matchingCountriesResult?.length === 0) return null
  
  return (
    <div className="show_search_values">
      {matchingCountriesResult?.length > 0
        ? matchingCountriesResult?.map((country, index) => (
            <h2 key={index + country} className="matched_country">
              {country}
            </h2>
          ))
        : ''}
    </div>
  )
}

export default SearchResults
