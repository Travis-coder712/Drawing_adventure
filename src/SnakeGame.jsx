import { useState, useEffect, useRef, useCallback } from 'react';

const CELL = 20;
const COLS = 20;
const ROWS = 20;
const WIDTH = COLS * CELL;
const HEIGHT = ROWS * CELL;
const INITIAL_SPEED = 150;
const SPEED_INCREMENT = 3;

const DIRECTIONS = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
};

function randomFood(snake) {
  let pos;
  do {
    pos = {
      x: Math.floor(Math.random() * COLS),
      y: Math.floor(Math.random() * ROWS),
    };
  } while (snake.some(s => s.x === pos.x && s.y === pos.y));
  return pos;
}

export default function SnakeGame({ onBack }) {
  const canvasRef = useRef(null);
  const [gameState, setGameState] = useState('idle'); // idle, playing, gameover
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const snakeRef = useRef([{ x: 10, y: 10 }]);
  const dirRef = useRef({ x: 1, y: 0 });
  const nextDirRef = useRef({ x: 1, y: 0 });
  const foodRef = useRef({ x: 15, y: 10 });
  const scoreRef = useRef(0);
  const speedRef = useRef(INITIAL_SPEED);
  const loopRef = useRef(null);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    // Grid
    ctx.strokeStyle = '#16213e';
    ctx.lineWidth = 0.5;
    for (let x = 0; x <= COLS; x++) {
      ctx.beginPath();
      ctx.moveTo(x * CELL, 0);
      ctx.lineTo(x * CELL, HEIGHT);
      ctx.stroke();
    }
    for (let y = 0; y <= ROWS; y++) {
      ctx.beginPath();
      ctx.moveTo(0, y * CELL);
      ctx.lineTo(WIDTH, y * CELL);
      ctx.stroke();
    }

    // Food
    const food = foodRef.current;
    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.arc(
      food.x * CELL + CELL / 2,
      food.y * CELL + CELL / 2,
      CELL / 2 - 2,
      0,
      Math.PI * 2
    );
    ctx.fill();

    // Snake
    const snake = snakeRef.current;
    snake.forEach((seg, i) => {
      const t = i / snake.length;
      const r = Math.round(139 - t * 80);
      const g = Math.round(92 + t * 80);
      const b = Math.round(246 - t * 100);
      ctx.fillStyle = `rgb(${r},${g},${b})`;
      ctx.beginPath();
      ctx.roundRect(
        seg.x * CELL + 1,
        seg.y * CELL + 1,
        CELL - 2,
        CELL - 2,
        4
      );
      ctx.fill();
    });

    // Eyes on head
    if (snake.length > 0) {
      const head = snake[0];
      ctx.fillStyle = 'white';
      const d = dirRef.current;
      const eyeOffsetX = d.x === 0 ? 4 : d.x * 3;
      const eyeOffsetY = d.y === 0 ? -4 : d.y * 3;
      ctx.beginPath();
      ctx.arc(
        head.x * CELL + CELL / 2 + (d.y !== 0 ? -3 : eyeOffsetX),
        head.y * CELL + CELL / 2 + (d.x !== 0 ? -3 : eyeOffsetY),
        2.5, 0, Math.PI * 2
      );
      ctx.fill();
      ctx.beginPath();
      ctx.arc(
        head.x * CELL + CELL / 2 + (d.y !== 0 ? 3 : eyeOffsetX),
        head.y * CELL + CELL / 2 + (d.x !== 0 ? 3 : eyeOffsetY),
        2.5, 0, Math.PI * 2
      );
      ctx.fill();
    }
  }, []);

  const tick = useCallback(() => {
    dirRef.current = nextDirRef.current;
    const snake = snakeRef.current;
    const dir = dirRef.current;
    const head = snake[0];
    const newHead = {
      x: head.x + dir.x,
      y: head.y + dir.y,
    };

    // Wall collision
    if (newHead.x < 0 || newHead.x >= COLS || newHead.y < 0 || newHead.y >= ROWS) {
      setGameState('gameover');
      setHighScore(prev => Math.max(prev, scoreRef.current));
      return;
    }

    // Self collision
    if (snake.some(s => s.x === newHead.x && s.y === newHead.y)) {
      setGameState('gameover');
      setHighScore(prev => Math.max(prev, scoreRef.current));
      return;
    }

    const newSnake = [newHead, ...snake];

    // Food collision
    if (newHead.x === foodRef.current.x && newHead.y === foodRef.current.y) {
      scoreRef.current += 10;
      setScore(scoreRef.current);
      foodRef.current = randomFood(newSnake);
      speedRef.current = Math.max(50, speedRef.current - SPEED_INCREMENT);
    } else {
      newSnake.pop();
    }

    snakeRef.current = newSnake;
    draw();
  }, [draw]);

  useEffect(() => {
    if (gameState === 'playing') {
      const run = () => {
        tick();
        if (loopRef.current !== null) {
          loopRef.current = setTimeout(run, speedRef.current);
        }
      };
      loopRef.current = setTimeout(run, speedRef.current);
      return () => {
        clearTimeout(loopRef.current);
        loopRef.current = null;
      };
    }
    return () => {
      if (loopRef.current) {
        clearTimeout(loopRef.current);
        loopRef.current = null;
      }
    };
  }, [gameState, tick]);

  useEffect(() => {
    const handler = (e) => {
      if (gameState !== 'playing') return;
      const newDir = DIRECTIONS[e.key];
      if (!newDir) return;
      e.preventDefault();
      const cur = dirRef.current;
      if (newDir.x + cur.x === 0 && newDir.y + cur.y === 0) return;
      nextDirRef.current = newDir;
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [gameState]);

  const startGame = () => {
    snakeRef.current = [{ x: 10, y: 10 }];
    dirRef.current = { x: 1, y: 0 };
    nextDirRef.current = { x: 1, y: 0 };
    foodRef.current = randomFood(snakeRef.current);
    scoreRef.current = 0;
    speedRef.current = INITIAL_SPEED;
    setScore(0);
    setGameState('playing');
    draw();
  };

  const handleControl = (key) => {
    if (gameState !== 'playing') return;
    const newDir = DIRECTIONS[key];
    if (!newDir) return;
    const cur = dirRef.current;
    if (newDir.x + cur.x === 0 && newDir.y + cur.y === 0) return;
    nextDirRef.current = newDir;
  };

  useEffect(() => {
    draw();
  }, [draw]);

  return (
    <div className="snake-screen">
      <header className="app-header">
        <button className="back-btn" onClick={onBack}>{'\u2190'} Back</button>
        <h1>{'\uD83D\uDC0D'} Snake Game</h1>
      </header>
      <div className="snake-content">
        <div className="snake-stats">
          <div className="stat">
            <div className="stat-label">Score</div>
            <div className="stat-value">{score}</div>
          </div>
          <div className="stat">
            <div className="stat-label">High Score</div>
            <div className="stat-value">{highScore}</div>
          </div>
        </div>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <canvas
            ref={canvasRef}
            className="snake-canvas"
            width={WIDTH}
            height={HEIGHT}
          />
          {gameState !== 'playing' && (
            <div className="snake-start-overlay">
              {gameState === 'gameover' ? (
                <>
                  <h2>Game Over!</h2>
                  <p>Score: {score}</p>
                </>
              ) : (
                <>
                  <h2>{'\uD83D\uDC0D'} Snake</h2>
                  <p>Use arrow keys or buttons to move</p>
                </>
              )}
              <button className="snake-start-btn" onClick={startGame}>
                {gameState === 'gameover' ? 'Play Again' : 'Start Game'}
              </button>
            </div>
          )}
        </div>
        <div className="snake-controls">
          <div />
          <button className="snake-ctrl-btn" onClick={() => handleControl('ArrowUp')}>{'\u2B06\uFE0F'}</button>
          <div />
          <button className="snake-ctrl-btn" onClick={() => handleControl('ArrowLeft')}>{'\u2B05\uFE0F'}</button>
          <button className="snake-ctrl-btn" onClick={() => handleControl('ArrowDown')}>{'\u2B07\uFE0F'}</button>
          <button className="snake-ctrl-btn" onClick={() => handleControl('ArrowRight')}>{'\u27A1\uFE0F'}</button>
        </div>
      </div>
    </div>
  );
}
