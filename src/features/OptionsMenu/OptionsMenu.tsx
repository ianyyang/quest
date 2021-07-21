import MinimizeIcon from '@material-ui/icons/Minimize'
import './OptionsMenu.css'

const OptionsMenu = () => {
  return (
    <div className="options-menu-container">
      <MinimizeIcon className="options-menu-minimize-icon"/>
      OPTIONS
      <hr className="options-menu-hr"/>
    </div>
  )
}

export default OptionsMenu
