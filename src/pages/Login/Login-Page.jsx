import React, { useState } from 'react'
import './Login-Page.css'
import { useNavigate } from 'react-router-dom'
import QuoteSection from './child-Components/QuoteSection'
import LoginForm from './child-Components/LoginForm'
import { emailIsValid } from '../../utils/validation'
import { checkCredentials } from '../../utils/authentication'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const navigate = useNavigate()

  const handleLogin = () => {
    setErrorMessage('')

    if (!email || !password) {
      setErrorMessage('Email and Password are required.')
      return
    }

    if (!emailIsValid(email)) {
      setErrorMessage('Enter a valid email address.')
      return
    }

    if (checkCredentials(email, password)) {
      navigate('/dashboard')
    } else {
      setErrorMessage('Invalid email or password.')
    }
  }

  return (
    <div className="loginPage">
      <div className="quoteContainer">
        <QuoteSection />
      </div>
      <div className="loginContainer">
        <LoginForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          errorMessage={errorMessage}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          rememberMe={rememberMe}
          setRememberMe={setRememberMe}
        />
      </div>
    </div>
  )
}

export default LoginPage
