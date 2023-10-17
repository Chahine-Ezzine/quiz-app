import './sidebar.css'
import dashboardIcon from '../../data/icons/dashboard-icon.png'
import notificationIcon from '../../data/icons/notification-icon.png'
import supportIcon from '../../data/icons/support-icon.png'
import logoutIcon from '../../data/icons/logout-icon.png'

const buttons = [
  { icon: dashboardIcon, label: 'Dashboard', className: 'dashboardBtn' },
  { icon: notificationIcon, label: 'Support', className: 'notificationBtn' },
  { icon: supportIcon, label: 'Notification', className: 'supportBtn' },
]

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1>Quiz Time</h1>
      {buttons.map((btn, index) => (
        <button key={index} className={btn.className}>
          <img
            src={btn.icon}
            alt={btn.label}
            className={`${btn.className}-icon`}
          />
          {btn.label}
        </button>
      ))}
      <button className="logoutBtn">
        <img src={logoutIcon} alt="Logout" className="logoutBtn-icon" />
        Log Out
      </button>
    </div>
  )
}

export default Sidebar
