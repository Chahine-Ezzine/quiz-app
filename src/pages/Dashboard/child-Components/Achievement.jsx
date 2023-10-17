import './Achievement.css'
import { badges } from '../../../data/data'
import ProgressBar from '../../../reusable-components/ProgressBar/ProgressBar'

const Badge = ({ src, alt, name }) => {
  return (
    <div className={`badge-container ${name.toLowerCase()}-container`}>
      <img src={src} alt={alt} />
      <p>{name}</p>
    </div>
  )
}

const Achievement = () => {
  return (
    <section className="achievements-container">
      <div className="achievements-progressBar">
        <h2>Achievements</h2>
        <ProgressBar progress={34} />
      </div>
      <div className="achievementMedals-container">
        <div className="comeback-winner-container">
          <Badge {...badges[0]} />
          <Badge {...badges[1]} />
        </div>
        <Badge {...badges[2]} />
        <p className="all-Badge">View All</p>
      </div>
    </section>
  )
}

export default Achievement
