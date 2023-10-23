import { useState, useCallback } from 'react'

const useQuizProgression = (
  questions,
  selectedOption,
  setSelectedOption,
  reviewMode,
  calculateFinalScore,
  LAST_QUESTION_INDEX
) => {
  const [score, setScore] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showModal, setShowModal] = useState(false)

  const handleNext = useCallback(() => {
    const currentAnswer = questions[currentIndex]?.correct_answer
    if (!currentAnswer) {
      return
    }

    if (selectedOption === currentAnswer) {
      setScore((prevScore) => prevScore + 1)
    }

    setSelectedOption(null) // move this line up here

    if (currentIndex === LAST_QUESTION_INDEX) {
      if (!reviewMode) {
        const finalScore = calculateFinalScore()
        setScore(finalScore)
        setShowModal(true)
      } else {
        setCurrentIndex(0)
      }
      return
    }

    setCurrentIndex((prevIndex) => prevIndex + 1)
  }, [
    currentIndex,
    selectedOption,
    questions,
    reviewMode,
    calculateFinalScore,
    LAST_QUESTION_INDEX,
  ])

  return {
    score,
    setScore,
    currentIndex,
    setCurrentIndex,
    showModal,
    setShowModal,
    handleNext,
  }
}

export default useQuizProgression
