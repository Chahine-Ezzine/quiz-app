import './QuizCategories.css'
import { useNavigate } from 'react-router-dom'

function QuizCategories({ dataSet }) {
  const navigate = useNavigate()

  const handleCategoryClick = (category) => {
    navigate(`/quiz-instructions?name=${category.name}&image=${category.image}`)
  }

  return (
    <div className="categories-container">
      {dataSet.map((category, index) => (
        <div
          key={index}
          className={`category-container ${category.overlay}`}
          onClick={() => handleCategoryClick(category)}
        >
          <img src={category.image} alt={category.name} />
          <div className="overlay-text">{category.name}</div>
        </div>
      ))}
    </div>
  )
}

export default QuizCategories
