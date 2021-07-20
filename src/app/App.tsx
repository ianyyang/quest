import TitleHeader from 'features/TitleHeader/TitleHeader'
import SearchBar from 'common/SearchBar/SearchBar'
import Bookmarks from 'features/BookmarksSection/BookmarksSection'
import OptionsMenu from 'features/OptionsMenu/OptionsMenu'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <TitleHeader/>
      <SearchBar/>
      <Bookmarks/>
      <OptionsMenu/>
    </div>
  )
}

export default App
