import React from 'react'
import '../../reusable-components/stat-Item/Stat-Item.css'
function StatItem({ IconComponent, value, label, iconClass }) {
  return (
    <div className="stat-item">
      <div className={`stat-icon ${iconClass}`}>
        <IconComponent />
      </div>
      <div className="stat-info">
        <div className="stat-value">{value}</div>
        <div className="stat-label">{label}</div>
      </div>
    </div>
  )
}

export default StatItem
