function CardViewer({ flipCurrentCard, previousCard, nextCard, showAnswer, cardSet, currentCardIndex }) {

  return (
    <div className="wrap">
      <div className="card-view" onClick={flipCurrentCard}>
        <div className="qa-container">
          <p className='prevent-select'>{showAnswer ? cardSet.cards[currentCardIndex].answer : cardSet.cards[currentCardIndex].question}</p>
        </div>
      </div>
      <div className="navigation-container">
        <button onClick={previousCard}>{"Previous"}</button>
        <button onClick={flipCurrentCard} id='show-answer-btn'>{showAnswer ? "Hide Answer" : "Show Answer"}</button>
        <button onClick={nextCard}>{"Next"}</button>
      </div>
    </div>
  )
}

export default CardViewer
