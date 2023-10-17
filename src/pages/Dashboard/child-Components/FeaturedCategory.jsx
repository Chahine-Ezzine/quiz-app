import { useNavigate } from 'react-router-dom'
import './FeaturedCategory.css'
import QuizCategories from '../../../reusable-components/QuizCategories/QuizCategories'
import { categories } from '../../../data/data'

const FeaturedCategory = () => {
  const navigate = useNavigate()

  const handleViewAllClick = () => {
    navigate('/select-topics')
  }

  return (
    <section className="featured-category-container">
      <div className="featured-category-title">
        <h2>Featured Category</h2>
        <p onClick={handleViewAllClick} style={{ cursor: 'pointer' }}>
          View All
        </p>
      </div>
      <QuizCategories dataSet={categories.set1} />
    </section>
  )
}

export default FeaturedCategory
