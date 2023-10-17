import React, { useState } from 'react'
import ModalSubmitSvg from './ModalSubmit-svg'
import winnerBadge from '../../../data/images/winner-badge.png'
import './QuizModal.css'

function QuizModal({
  showModal,
  setShowModal,
  score,
  setCurrentIndex,
  setReviewMode,
  stopTimer,
}) {
  const [quizStatus, setQuizStatus] = useState('confirmation')

  const renderContent = () => {
    switch (quizStatus) {
      case 'confirmation':
        return (
          <>
            <ModalSubmitSvg />
            <p>Are you sure you want to submit the quiz?</p>
            <div className="modal-btn-container">
              <button className="modal-btn" onClick={() => setShowModal(false)}>
                No
              </button>
              <button
                className="modal-btn"
                onClick={() => {
                  console.log('Quiz submitted!')
                  setQuizStatus('result')
                  stopTimer()
                }}
              >
                Yes
              </button>
            </div>
          </>
        )

      case 'result':
        if (score < 60) {
          return (
            <>
              <p>Sorry, you have failed the test.</p>
              <p>You scored {score}%</p>

              <button
                className="modal-btn"
                onClick={() => {
                  setShowModal(false)
                  setReviewMode(true)
                  setCurrentIndex(0)
                }}
              >
                Review Quiz
              </button>
            </>
          )
        } else {
          return (
            <>
              <img src={winnerBadge} alt="Winner Badge" />
              <p>Congratulations, you have passed!</p>
              <p>You scored {score}%</p>

              <button
                className="modal-btn"
                onClick={() => {
                  setShowModal(false)
                  setReviewMode(true)
                  setCurrentIndex(0)
                }}
              >
                Review Quiz
              </button>
            </>
          )
        }

      default:
        return null
    }
  }

  if (!showModal) {
    return null
  }

  return (
    <div className="modal-quiz-container">
      <div className="modal-quiz-content">{renderContent()}</div>
    </div>
  )
}

export default QuizModal
