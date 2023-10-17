import './UserProfile.css'
import StatItem from '../../../reusable-components/stat-Item/Stat-Item'
import UserProfileImg from '../../../data/images/user-image.png'
import { AiFillFlag } from 'react-icons/ai'
import { MdAccessTimeFilled } from 'react-icons/md'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import ProgressBar from '../../../reusable-components/ProgressBar/ProgressBar'

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
          <StatItem IconComponent={AiFillFlag} value="27" label="Quiz Passed" />
          <StatItem
            IconComponent={MdAccessTimeFilled}
            value="27min"
            label="Fastest Time"
          />
          <StatItem
            IconComponent={BsFillCheckCircleFill}
            value="200"
            label="Correct Answers"
            iconClass="smaller-icon"
          />
        </div>
      </div>
    </>
  )
}
export default UserProfile
