import { useState } from 'react'

export const placeHolder = "Search Here..."

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState<string>("")

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value)
  }

  const onSubmitHandler = (event: React.FormEvent<EventTarget>) => {
    console.log('onSubmit: ' + searchInput)
    event.preventDefault()
  }

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
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
