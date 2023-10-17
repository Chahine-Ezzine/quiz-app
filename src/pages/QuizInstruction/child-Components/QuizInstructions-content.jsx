import { instructions } from '../../../data/data'
import './QuizInstructions-content.css'

const QuizInstructionsContent = () => {
  return (
    <>
      <h2 className="instructions-title">Instructions</h2>
      {instructions.map((instruction, index) => (
        <p key={index} className="Instructions-content">
          {instruction}
        </p>
      ))}
    </>
  )
}
export default QuizInstructionsContent
