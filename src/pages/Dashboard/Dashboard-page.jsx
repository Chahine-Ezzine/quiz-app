import DashboardLayout from '../../reusable-components/layouts/Dashboard-layout'
import './Dashboard-page.css'
import UserProfile from './child-Components/UserProfile'
import Achievement from './child-Components/Achievement'
import FeaturedCategory from './child-Components/FeaturedCategory'

function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="userProfile-container">
        <div className="userProfile-info">
          <UserProfile />
        </div>
        <div className="achievements-featured-container">
          <Achievement />
          <FeaturedCategory />
        </div>
      </div>
    </DashboardLayout>
  )
}

export default DashboardPage
