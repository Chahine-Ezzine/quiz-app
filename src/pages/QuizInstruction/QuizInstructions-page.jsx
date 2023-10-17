import DashboardLayout from '../../reusable-components/layouts/Dashboard-layout'
import MainLayout from '../../reusable-components/layouts/Main-layout'
import './QuizInstructions-page.css'
import { useLocation } from 'react-router-dom'
import QuizInstructionsDetails from './child-Components/QuizInstructions-details'
import QuizInstructionsContent from './child-Components/QuizInstructions-content'
import { Link } from 'react-router-dom'

function QuizInstructions() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const categoryName = searchParams.get('name')
  const categoryImage = searchParams.get('image')

  return (
    <DashboardLayout>
      <MainLayout
        title={`${categoryName} Quiz`}
        description="Read the following instructions"
        actionButton={
          <Link
            to={`/quiz-question-answer?name=${categoryName}&image=${categoryImage}`}
          >
            <button>Start</button>
          </Link>
        }
      >
        <QuizInstructionsDetails
          categoryImage={categoryImage}
          categoryName={categoryName}
        />
        <QuizInstructionsContent />
      </MainLayout>
    </DashboardLayout>
  )
}

export default QuizInstructions
