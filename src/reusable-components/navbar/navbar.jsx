import profileIcon from '../../data/icons/profile-icon.png'
import './navbar.css'

const Navbar = () => {
  return (
    <div className="dashboard-navbarFlex">
      <div className="dashboard-searchWrapper">
        <input
          type="search"
          placeholder="Search.."
          className="dashboard-search"
        />
        <span className="dashboard-searchIcon"></span>
      </div>
      <button className="dashboard-startQuizBtn">Start Quiz</button>
      <div className="dashboard-profile">
        <img
          src={profileIcon}
          alt="navbar profile"
          className="dashboard-profileImg"
        />
        <span className="dashboard-profileName">Oluwatobi.</span>
      </div>
    </div>
  )
}
export default Navbar
