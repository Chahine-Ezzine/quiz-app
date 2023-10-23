import './UserProfile.css'
import StatItem from '../../../reusable-components/stat-Item/Stat-Item'
import UserProfileImg from '../../../data/images/user-image.png'
import CheckCircle from './CheckCircle'
import ProgressBar from '../../../reusable-components/ProgressBar/ProgressBar'
import TimeIcon from './TimeIcon'
import FlagIcon from './FlagIcon'

function UserProfile() {
  return (
    <>
      <img
        src={UserProfileImg}
        alt="User Profile"
        className="userProfile-image"
      />
      <div className="userProfile-details">
        <div className="userProfile-essentials">
          <h2 className="userProfile-name">Oluwatobi Olowu</h2>
          <p className="userProfile-bonus">Bonus booster 24lv</p>
          <ProgressBar progress={90} />
        </div>
        <div className="userProfile-stats">
          <StatItem IconComponent={FlagIcon} value="27" label="Quiz Passed" />
          <StatItem
            IconComponent={TimeIcon}
            value="27min"
            label="Fastest Time"
          />
          <StatItem
            IconComponent={CheckCircle}
            value="200"
            label="Correct Answer"
          />
        </div>
      </div>
    </>
  )
}
export default UserProfile
