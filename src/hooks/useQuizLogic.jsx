import { useState, useCallback } from 'react'

export default function useQuizLogic(questions, currentIndex) {
  const [selectedOption, setSelectedOption] = useState(null)
  const [score, setScore] = useState(0)
  const [reviewMode, setReviewMode] = useState(false)
  const [userAnswers, setUserAnswers] = useState([])

  const LAST_QUESTION_INDEX = questions.length - 1

  const handleOptionChange = useCallback(
    (e, label) => {
      if (reviewMode) return
      setUserAnswers((prevAnswers) => {
        const newAnswers = [...prevAnswers]
        newAnswers[currentIndex] = label
        return newAnswers
      })
    },
    [reviewMode, currentIndex]
  )

  const calculateFinalScore = useCallback(() => {
    const correctAnswersCount = userAnswers.filter(
      (ans, idx) => ans === questions[idx].correct_answer
    ).length
    setScore((correctAnswersCount / questions.length) * 100)
  }, [userAnswers, questions])

  return {
    selectedOption,
    setSelectedOption,
    score,
    setScore,
    reviewMode,
    setReviewMode,
    userAnswers,
    handleOptionChange,
    calculateFinalScore,
    LAST_QUESTION_INDEX,
  }
}
