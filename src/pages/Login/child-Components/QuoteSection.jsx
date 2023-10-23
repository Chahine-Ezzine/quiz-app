import QuoteSvg from './quote-svg'
import './QuoteSection.css'

const QuoteSection = () => {
  return (
    <div className="quoteSection">
      <div className="quoteCard">
        <span className="quote-icon">“</span>
        <blockquote>
          Those people who develop the ability to continuously acquire new and
          better forms of knowledge that they can apply to their work and to
          their lives will be the movers and shakers in our society for the
          indefinite future.
        </blockquote>
        <cite>Brian Tracy</cite>
        <QuoteSvg className="quote-vector" />
      </div>
    </div>
  )
}

export default QuoteSection
