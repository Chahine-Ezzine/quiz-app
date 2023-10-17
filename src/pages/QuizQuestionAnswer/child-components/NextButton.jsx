function NextButton({ onClick, currentIndex, LAST_QUESTION_INDEX }) {
  return (
    <button onClick={onClick}>
      {getNextButtonLabel(currentIndex, LAST_QUESTION_INDEX)}
    </button>
  )
}

function getNextButtonLabel(currentIndex, LAST_QUESTION_INDEX) {
  if (currentIndex === LAST_QUESTION_INDEX - 1) return 'Last'
  if (currentIndex === LAST_QUESTION_INDEX) return 'Finish'
  return 'Next'
}

export default NextButton
