import TitleHeader from 'features/TitleHeader/TitleHeader'
import MainSearchBar from 'features/MainSearchBar/MainSearchBar'
import Bookmarks from 'features/BookmarksSection/BookmarksSection'
import OptionsMenu from 'features/OptionsMenu/OptionsMenu'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <TitleHeader/>
      <MainSearchBar/>
      <Bookmarks/>
      <OptionsMenu/>
    </div>
  )
}

export default App
