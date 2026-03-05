import { useState, useEffect, useCallback } from 'react';

const CARD_EMOJIS = ['\uD83D\uDC31', '\uD83D\uDC36', '\uD83D\uDC30', '\uD83E\uDD8B', '\uD83C\uDFE0', '\uD83C\uDF38', '\u2B50', '\uD83C\uDF08'];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function createCards() {
  const pairs = CARD_EMOJIS.flatMap((emoji, i) => [
    { id: i * 2, emoji, pairId: i },
    { id: i * 2 + 1, emoji, pairId: i },
  ]);
  return shuffle(pairs);
}

export default function MemoryGame({ onBack }) {
  const [cards, setCards] = useState(createCards);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [locked, setLocked] = useState(false);

  const isFlipped = (id) => flipped.includes(id);
  const isMatched = (id) => matched.includes(id);
  const hasWon = matched.length === cards.length;

  const handleFlip = useCallback((id) => {
    if (locked || isFlipped(id) || isMatched(id)) return;
    if (flipped.length === 0) {
      setFlipped([id]);
    } else if (flipped.length === 1) {
      setFlipped(prev => [...prev, id]);
      setMoves(m => m + 1);
      setLocked(true);

      const firstCard = cards.find(c => c.id === flipped[0]);
      const secondCard = cards.find(c => c.id === id);

      if (firstCard.pairId === secondCard.pairId) {
        setTimeout(() => {
          setMatched(prev => [...prev, firstCard.id, secondCard.id]);
          setFlipped([]);
          setLocked(false);
        }, 500);
      } else {
        setTimeout(() => {
          setFlipped([]);
          setLocked(false);
        }, 1000);
      }
    }
  }, [flipped, matched, locked, cards]);

  const resetGame = () => {
    setCards(createCards());
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setLocked(false);
  };

  const pairsFound = matched.length / 2;
  const totalPairs = cards.length / 2;

  return (
    <div className="memory-screen">
      <header className="app-header">
        <button className="back-btn" onClick={onBack}>{'\u2190'} Back</button>
        <h1>{'\uD83C\uDFAE'} Memory Match</h1>
      </header>
      <div className="memory-content">
        <div className="memory-stats">
          <div className="stat">
            <div className="stat-label">Moves</div>
            <div className="stat-value">{moves}</div>
          </div>
          <div className="stat">
            <div className="stat-label">Pairs Found</div>
            <div className="stat-value">{pairsFound} / {totalPairs}</div>
          </div>
        </div>

        <div className="memory-grid">
          {cards.map(card => (
            <div
              key={card.id}
              className={`memory-card ${isFlipped(card.id) ? 'flipped' : ''} ${isMatched(card.id) ? 'matched' : ''}`}
              onClick={() => handleFlip(card.id)}
            >
              <div className="memory-card-inner">
                <div className="memory-card-front">?</div>
                <div className="memory-card-back">{card.emoji}</div>
              </div>
            </div>
          ))}
        </div>

        {hasWon && (
          <div className="memory-win">
            <h2>{'\uD83C\uDF89'} You Did It! {'\uD83C\uDF89'}</h2>
            <p>You found all pairs in {moves} moves!</p>
            <button className="play-again-btn" onClick={resetGame}>
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
