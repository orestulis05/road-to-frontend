import { useState } from 'react';
import cardSet from './cards.json'
import './style.css'
import ProgressBar from './progressBar';
import CardViewer from './cardViewer';

function App() {

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const flipCurrentCard = () => {
    setShowAnswer(!showAnswer);
  }

  const nextCard = () => {
    if (currentCardIndex + 1 < cardSet.cards.length) {
      setCurrentCardIndex(currentCardIndex + 1);
      setShowAnswer(false);
    }
  }

  const previousCard = () => {
    if (currentCardIndex - 1 >= 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setShowAnswer(false);
    }
  }

  return (
    <>
      <h1>Flashcard App</h1>
      <h2>Title: <span>{cardSet.title}</span></h2>
      <ProgressBar idx={currentCardIndex} cards={cardSet} />
      <CardViewer
        flipCurrentCard={flipCurrentCard}
        previousCard={previousCard}
        nextCard={nextCard}
        showAnswer={showAnswer}
        cardSet={cardSet}
        currentCardIndex={currentCardIndex} />
    </>
  )
}

export default App
