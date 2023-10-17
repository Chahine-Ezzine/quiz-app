import './Main-layout.css'

const Layout = ({ title, description, children, actionButton }) => {
  return (
    <div className="Main-layout-container">
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="content">{children}</div>
      <div className="action-button-container">{actionButton}</div>
    </div>
  )
}

export default Layout
