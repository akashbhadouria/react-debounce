import Pagination from '../views/Pagination/Pagination'
import './App.css'
import SearchComponents from './components/SearchComponent'

function App() {
  return (
    <>
      {/* <SearchComponents /> */}
      <Pagination paginationLimit={5} />
    </>
  )
}

export default App

// Search Component
// Render Search Result Component
// Debouncing
