import { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './SearchBar.css'

export const placeHolder = "SEARCH HERE..."

const SearchBar = ({onSubmitHandler}: any) => {
  const [searchInput, setSearchInput] = useState<string>("")

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value)
  }

  return (
    <div className="search-bar-container">
      <form
        className="search-bar-form"
        onSubmit={(event) => {
          onSubmitHandler(searchInput)
          event.preventDefault()
        }}
      >
        <SearchIcon className="search-bar-icon"/>
        <input
          className="search-bar-input"
          type="text"
          placeholder={placeHolder}
          value={searchInput}
          onChange={onChangeHandler}
        />
      </form>
    </div>
  )
}

export default SearchBar
