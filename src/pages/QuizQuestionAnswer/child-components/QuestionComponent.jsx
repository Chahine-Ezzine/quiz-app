import React from 'react'
import './QuestionComponent.css'

function QuestionComponent({
  currentQuestion,
  handleOptionChange,
  userAnswers,
  currentIndex,
  reviewMode,
}) {
  return (
    <div className="Quiz-question-container">
      <div className="question-image-container">
        <img
          src={currentQuestion.categoryImage}
          alt="Question related image"
          className="question-image"
        />
        <div className="question-text-container">
          <h3>Question {currentIndex + 1}/5</h3>
          <p>{currentQuestion.question}</p>
        </div>
      </div>

      <h4 className="quiz-answer-title">Choose answer</h4>
      <div className="quiz-options-container">
        {currentQuestion.allAnswers.map((option) => (
          <Option
            key={option}
            label={option}
            selected={userAnswers[currentIndex] === option}
            isCorrect={currentQuestion.correct_answer === option}
            isReviewMode={reviewMode}
            handleOptionChange={handleOptionChange}
          />
        ))}
      </div>
    </div>
  )
}

function Option({
  label,
  selected,
  isCorrect,
  isReviewMode,
  handleOptionChange,
}) {
  return (
    <div className="option-container">
      <label className="custom-radio">
        <input
          type="radio"
          id={label}
          name="answer"
          value={label}
          checked={selected}
          onChange={(e) => handleOptionChange(e, label)}
          disabled={isReviewMode}
        />
        <span className="radio-circle"></span>
        {label}
      </label>
      <div className="message-container">
        {isReviewMode && selected && (
          <span className={isCorrect ? 'answer-correct' : 'answer-wrong'}>
            Your Answer
          </span>
        )}
        {isReviewMode && !selected && isCorrect && (
          <span className="correct-answer">Correct Answer</span>
        )}
      </div>
    </div>
  )
}

export default QuestionComponent
