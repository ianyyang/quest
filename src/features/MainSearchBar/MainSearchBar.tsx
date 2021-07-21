import SearchBar from 'common/SearchBar/SearchBar'
import './MainSearchBar.css'

const MainSearchBar = () => {
  const googleSearchUrl = 'https://www.google.com/search?q='

  const getSearch = (searchQuery: string) => {
    if ((searchQuery).length !== 0) {
      Object.assign(document.createElement('a'), {
        target: '_blank',
        href: `${googleSearchUrl}${searchQuery}`,
      }).click()
    }
  }

  return (
    <div className="main-search-bar-container">
      <SearchBar onSubmitHandler={getSearch}/>
    </div>
  )
}

export default MainSearchBar
