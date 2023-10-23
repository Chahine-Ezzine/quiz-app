import React, { useCallback, useState, useEffect } from 'react'
import DashboardLayout from '../../reusable-components/layouts/Dashboard-layout'
import MainLayout from '../../reusable-components/layouts/Main-layout'
import './QuizQuestionAnswer.css'
import QuizModal from './child-components/QuizModal'
import LoadingComponent from './child-components/Loading-Component'
import QuestionComponent from './child-components/QuestionComponent'
import useQuizState from '../../hooks/useQuizState'
import useCategoryFromURL from '../../hooks/useCategoryFromURL'
import useQuizLogic from '../../hooks/useQuizLogic'
import NextButton from './child-components/NextButton'
import ErrorComponent from './child-components/ErrorComponent'
import useTimer from '../../hooks/useTimer'

const AMOUNT = 5
const BASE_API_URL = 'https://opentdb.com/api.php'

function QuizQuestionAnswer() {
  const { categoryName, categoryImage, categoryNumber } = useCategoryFromURL()
  const API_URL = `${BASE_API_URL}?amount=${AMOUNT}&category=${categoryNumber}&type=multiple`
  const { questions, currentIndex, isLoading, error, setCurrentIndex } =
    useQuizState(API_URL)

  const {
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
  } = useQuizLogic(questions, currentIndex)

  const [showModal, setShowModal] = useState(false)

  const initialTime = 30 * 60
  const { time, stopTimer, formatTime } = useTimer(initialTime)

  useEffect(() => {
    if (time <= 0) {
      stopTimer()
      setShowModal(true)
    }
  }, [time])

  const handleNext = useCallback(() => {
    const currentAnswer = userAnswers[currentIndex]
    if (!currentAnswer) {
      return
    }

    if (selectedOption === questions[currentIndex].correct_answer) {
      setScore((prevScore) => prevScore + 1)
    }

    if (currentIndex === LAST_QUESTION_INDEX) {
      if (!reviewMode) {
        calculateFinalScore()
        setShowModal(true)
      } else {
        setCurrentIndex(0)
      }
      return
    }

    setCurrentIndex((prevIndex) => prevIndex + 1)
    setSelectedOption(null)
  }, [
    currentIndex,
    userAnswers,
    selectedOption,
    questions,
    reviewMode,
    calculateFinalScore,
    LAST_QUESTION_INDEX,
  ])

  if (isLoading)
    return (
      <LoadingComponent gifUrl="https://giphy.com/embed/l3nWhI38IWDofyDrW" />
    )
  if (error) return <ErrorComponent error={error} />
  if (!questions[currentIndex]) return null

  return (
    <DashboardLayout>
      <MainLayout
        title={
          <div className="title-container">
            <h1 className="quiz-title">{`${categoryName} Quiz`}</h1>
            <div className="timer">
              <span className="timer-label">Timer:</span>
              <span className={reviewMode ? 'timer-red' : ''}>
                {formatTime(time)}
              </span>
              <span>Mins</span>
            </div>
          </div>
        }
        description="Answer the question below"
        actionButton={
          <NextButton
            onClick={handleNext}
            currentIndex={currentIndex}
            LAST_QUESTION_INDEX={LAST_QUESTION_INDEX}
          />
        }
      >
        <QuestionComponent
          currentQuestion={{ ...questions[currentIndex], categoryImage }}
          handleOptionChange={handleOptionChange}
          userAnswers={userAnswers}
          currentIndex={currentIndex}
          reviewMode={reviewMode}
        />
        {showModal && (
          <QuizModal
            showModal={showModal}
            setShowModal={setShowModal}
            score={score}
            setScore={setScore}
            setCurrentIndex={setCurrentIndex}
            setReviewMode={setReviewMode}
            stopTimer={stopTimer}
          />
        )}
      </MainLayout>
    </DashboardLayout>
  )
}

export default QuizQuestionAnswer
