import { render, fireEvent } from '@testing-library/react'
import SearchBar, { placeHolder } from 'features/SearchBar'

test('change value on input change', () => {
  const onChange = jest.fn()
  const value = 'sample-value'
  const { getByPlaceholderText } = render(<SearchBar />)
  const searchInput = getByPlaceholderText(placeHolder) as HTMLInputElement

  expect(searchInput.value).toEqual('')
  searchInput.onchange = onChange
  fireEvent.change(searchInput, { target: { value: value }})
  expect(onChange).toHaveBeenCalled()
})
