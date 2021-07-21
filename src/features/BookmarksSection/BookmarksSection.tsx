import Bookmark from 'common/Bookmark/Bookmark'
import AddIcon from '@material-ui/icons/Add';
import './BookmarksSection.css'

const BookmarksSection = () => {
  return (
    <div className="bookmarks-section-container">
      <Bookmark/>
      <Bookmark/>
      <Bookmark/>
      <Bookmark/>
      <AddIcon className="bookmarks-section-add-icon"/>
    </div>
  )
}

export default BookmarksSection
