import './sidebar.css'
import dashboardIcon from '../../data/icons/dashboard-icon.png'
import notificationIcon from '../../data/icons/notification-icon.png'
import supportIcon from '../../data/icons/support-icon.png'
import logoutIcon from '../../data/icons/logout-icon.png'
import { useState, useEffect } from 'react'

const buttons = [
  { icon: dashboardIcon, label: 'Dashboard', className: 'dashboardBtn' },
  { icon: notificationIcon, label: 'Support', className: 'notificationBtn' },
  { icon: supportIcon, label: 'Notification', className: 'supportBtn' },
]

const Sidebar = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1030)
  const [isSidebarVisible, setIsSidebarVisible] = useState(
    window.innerWidth > 1030
  )

  useEffect(() => {
    const handleResize = () => {
      const currentIsLargeScreen = window.innerWidth > 1030
      setIsLargeScreen(currentIsLargeScreen)

      if (currentIsLargeScreen) {
        setIsSidebarVisible(true)
      } else {
        setIsSidebarVisible(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <button
        className="sidebar-toggle"
        onClick={() => {
          console.log('Toggling sidebar...')
          setIsSidebarVisible((prevState) => !prevState)
        }}
      >
        ☰
      </button>
      {isSidebarVisible && !isLargeScreen && (
        <div
          className="sidebar-overlay"
          onClick={() => setIsSidebarVisible(false)}
        ></div>
      )}
      <div
        className="sidebar"
        style={{ display: isSidebarVisible ? 'flex' : 'none' }}
      >
        <button
          className="close-btn"
          onClick={() => setIsSidebarVisible(false)}
        >
          X
        </button>
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
    </>
  )
}

export default Sidebar
