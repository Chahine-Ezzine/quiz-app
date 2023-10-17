import './LoginForm.css'
import GoogleSvg from '../child-Components/google-svg'

function LoginForm({
  email,
  setEmail,
  password,
  setPassword,
  handleLogin,
  errorMessage,
  showPassword,
  setShowPassword,
  rememberMe,
  setRememberMe,
}) {
  return (
    <div className="loginSection">
      <h2>Login to your Account</h2>
      <p>with your registered Email Address</p>
      <div className="inputGroup">
        <label>Email address*</label>
        <input
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <div className="inputGroup">
        <label>Enter password*</label>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="toggleShow"
        >
          {showPassword ? 'Hide' : 'Show'}
        </span>
      </div>
      <div className="inputGroup">
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        <label>Remember my password</label>
      </div>
      <button className="loginButton" onClick={handleLogin}>
        Login
      </button>
      <div className="divider-flex">
        <p className="line-left"></p>
        <p className="text">Or</p>
        <p className="line-right"></p>
      </div>
      <button className="googleLoginButton">
        <span>
          <GoogleSvg />
        </span>
        Login with Google
      </button>
    </div>
  )
}

export default LoginForm
