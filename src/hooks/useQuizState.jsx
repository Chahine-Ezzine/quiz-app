import { useState, useEffect } from 'react'
import { shuffleArray } from '../utils/shuffleArray'
import { decodeHTMLEntities } from '../utils/decodeHTMLEntities'

const useQuizState = (API_URL) => {
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data from the API.')
        }
        return response.json()
      })
      .then((data) => {
        if (!data.results || data.results.length === 0) {
          throw new Error('No questions available for this category.')
        }

        const sanitizedQuestions = data.results.map((question) => {
          const allAnswers = shuffleArray([
            ...question.incorrect_answers.map(decodeHTMLEntities),
            decodeHTMLEntities(question.correct_answer),
          ])
          return {
            ...question,
            question: decodeHTMLEntities(question.question),
            incorrect_answers:
              question.incorrect_answers.map(decodeHTMLEntities),
            correct_answer: decodeHTMLEntities(question.correct_answer),
            allAnswers: allAnswers,
          }
        })
        setQuestions(sanitizedQuestions)
        setIsLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setIsLoading(false)
      })
  }, [API_URL])

  return { questions, currentIndex, isLoading, error, setCurrentIndex }
}

export default useQuizState
