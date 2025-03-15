function ProgressBar(props) {
  const currentCardIndex = props.idx;
  const cardSet = props.cards;

  return (
    <div className="wrap">
      <div className="progress-container">
        <progress value={(currentCardIndex + 1) / cardSet.cards.length}></progress>
        <p>{currentCardIndex + 1} of {cardSet.cards.length}</p>
      </div>
    </div>
  )
}

export default ProgressBar;
