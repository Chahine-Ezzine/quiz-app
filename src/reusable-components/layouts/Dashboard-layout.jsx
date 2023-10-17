import './Dashboard-layout.css'
import Sidebar from '../../reusable-components/sidebar/sidebar'
import Navbar from '../../reusable-components/navbar/navbar'

function DashboardLayout({ children }) {
  return (
    <div className="dashboard">
      <div className="dashboard-flexContainer">
        <div className="dashboard-sidebar">
          <Sidebar />
        </div>
        <div className="dashboard-content">
          <Navbar />
          <div className="dashboard-main">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
