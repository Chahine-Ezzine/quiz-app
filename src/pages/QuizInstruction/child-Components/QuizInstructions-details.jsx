import './QuizInstructions-details.css'

function QuizInfo({ label, value, marginRight }) {
  return (
    <div className="Quiz-Info-container">
      <h3>{label}:</h3>
      <p style={{ marginRight: marginRight }}>{value}</p>
    </div>
  )
}

export default function QuizInstructionsDetails({
  categoryImage,
  categoryName,
}) {
  return (
    <div className="Quiz-Instructions-flex">
      <img src={categoryImage} alt={categoryName} />
      <div className="Quiz-Information-container">
        <QuizInfo label="Date" value="28/07/2021" />
        <QuizInfo label="Time Limit" value="30 Mins" marginRight="2rem" />
        <QuizInfo label="Attempts" value="Once" marginRight="3.3rem" />
        <QuizInfo label="Points" value="200 Points" marginRight="0.2rem" />
      </div>
    </div>
  )
}
