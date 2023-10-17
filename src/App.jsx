import LoginPage from './pages/Login/Login-Page'
import DashboardPage from './pages/Dashboard/Dashboard-page'
import SelectTopicsPage from './pages/SelectTopic/SelectTopic-page'
import QuizInstructions from './pages/QuizInstruction/QuizInstructions-page'
import QuizQuestionAnswer from './pages/QuizQuestionAnswer/QuizQuestionAnswer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/select-topics" element={<SelectTopicsPage />} />

        <Route path="/quiz-instructions" element={<QuizInstructions />} />
        <Route path="/quiz-question-answer" element={<QuizQuestionAnswer />} />
        <Route path="*" element={<LoginPage />} />

        {/* ... other routes */}
      </Routes>
    </Router>
  )
}

export default App
