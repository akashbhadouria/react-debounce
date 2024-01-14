export const findCountries = (searchedValue, countries) => {
  if (searchedValue === '') {
    return []
  }
  const matchingCountries = countries?.filter((country) =>
    country.toLowerCase().includes(searchedValue.toLowerCase())
  )
  return matchingCountries.slice(0, 10)
}
