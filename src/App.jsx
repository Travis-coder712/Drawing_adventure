import { useState, useEffect, useMemo } from 'react';
import { drawings, categories, encouragements } from './drawings';
import DoodlePad from './DoodlePad';
import MemoryGame from './MemoryGame';
import SnakeGame from './SnakeGame';
import LearnSection from './LearnSection';

const FLOATING_SHAPES = [
  { emoji: '\u2728', top: '10%', left: '5%', delay: '0s', size: '2rem' },
  { emoji: '\uD83C\uDF1F', top: '20%', left: '85%', delay: '-2s', size: '1.8rem' },
  { emoji: '\uD83C\uDFA8', top: '60%', left: '10%', delay: '-4s', size: '2.2rem' },
  { emoji: '\u270F\uFE0F', top: '75%', left: '90%', delay: '-1s', size: '1.6rem' },
  { emoji: '\uD83C\uDF08', top: '40%', left: '92%', delay: '-3s', size: '2rem' },
  { emoji: '\uD83E\uDD84', top: '85%', left: '15%', delay: '-5s', size: '2.4rem' },
  { emoji: '\uD83D\uDC3E', top: '15%', left: '45%', delay: '-2.5s', size: '1.5rem' },
  { emoji: '\u2B50', top: '50%', left: '3%', delay: '-6s', size: '1.8rem' },
];

function GridLines() {
  const lines = [];
  for (let i = 1; i < 6; i++) {
    lines.push(
      <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="300" className="grid-line" />,
      <line key={`h${i}`} x1="0" y1={i * 50} x2="300" y2={i * 50} className="grid-line" />
    );
  }
  return <g>{lines}</g>;
}

export default function App() {
  const [screen, setScreen] = useState('welcome');
  const [category, setCategory] = useState('all');
  const [selectedDrawing, setSelectedDrawing] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [viewMode, setViewMode] = useState('full');
  const [showGrid, setShowGrid] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [encouragement, setEncouragement] = useState('');

  const filteredDrawings = useMemo(() => {
    if (category === 'all') return drawings;
    return drawings.filter(d => d.category === category);
  }, [category]);

  const selectDrawing = (drawing) => {
    setSelectedDrawing(drawing);
    setCurrentStep(0);
    setViewMode('full');
    setEncouragement('');
    setScreen('drawing');
  };

  const goToGallery = () => {
    setScreen('gallery');
    setSelectedDrawing(null);
    setShowMenu(false);
  };

  const randomDrawing = () => {
    const pool = filteredDrawings;
    const random = pool[Math.floor(Math.random() * pool.length)];
    selectDrawing(random);
  };

  const nextStep = () => {
    if (!selectedDrawing) return;
    if (currentStep < selectedDrawing.steps.length - 1) {
      setCurrentStep(s => s + 1);
      setEncouragement(encouragements[Math.floor(Math.random() * encouragements.length)]);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(s => s - 1);
      setEncouragement('');
    }
  };

  // ===== WELCOME SCREEN =====
  if (screen === 'welcome') {
    const previewDrawings = [drawings[0], drawings[5], drawings[7], drawings[12], drawings[13]];
    return (
      <div className="app">
        <div className="welcome-screen">
          <div className="welcome-bg">
            {FLOATING_SHAPES.map((s, i) => (
              <div
                key={i}
                className="floating-shape"
                style={{
                  top: s.top,
                  left: s.left,
                  fontSize: s.size,
                  animationDelay: s.delay,
                  animationDuration: `${6 + i}s`,
                }}
              >
                {s.emoji}
              </div>
            ))}
          </div>
          <div className="welcome-content">
            <h1 className="welcome-title">
              Drawing Adventure!
            </h1>
            <p className="welcome-subtitle">
              Learn to draw amazing things, step by step!
            </p>
            <button className="start-btn" onClick={() => setScreen('gallery')}>
              {'\u270F\uFE0F'} Start Drawing!
            </button>
            <div className="welcome-drawings">
              {previewDrawings.map(d => (
                <div key={d.id} className="welcome-mini">
                  <svg viewBox="0 0 300 300">
                    <g stroke="#888" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      {d.steps.map((s, i) => (
                        <g key={i} dangerouslySetInnerHTML={{ __html: s.svg }} />
                      ))}
                    </g>
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ===== EASTER EGG SCREENS =====
  if (screen === 'doodle') return <DoodlePad onBack={goToGallery} />;
  if (screen === 'memory') return <MemoryGame onBack={goToGallery} />;
  if (screen === 'snake') return <SnakeGame onBack={goToGallery} />;
  if (screen === 'learn') return (
    <LearnSection
      onBack={goToGallery}
      onSelectDrawing={selectDrawing}
      drawings={drawings}
    />
  );

  // ===== GALLERY SCREEN =====
  if (screen === 'gallery') {
    return (
      <div className="app">
        <header className="app-header">
          <h1>{'\u270F\uFE0F'} Drawing Adventure</h1>
          <div style={{ position: 'relative' }}>
            <button className="menu-btn" onClick={() => setShowMenu(!showMenu)}>
              {'\uD83C\uDFAE'} Fun Stuff
            </button>
            {showMenu && (
              <>
                <div className="menu-overlay" onClick={() => setShowMenu(false)} />
                <div className="menu-dropdown">
                  <button className="menu-item" onClick={() => { setScreen('doodle'); setShowMenu(false); }}>
                    {'\uD83C\uDFA8'} Doodle Pad
                  </button>
                  <button className="menu-item" onClick={() => { setScreen('memory'); setShowMenu(false); }}>
                    {'\uD83C\uDFB4'} Memory Match
                  </button>
                  <button className="menu-item" onClick={() => { setScreen('snake'); setShowMenu(false); }}>
                    {'\uD83D\uDC0D'} Snake Game
                  </button>
                </div>
              </>
            )}
          </div>
        </header>
        <div className="gallery">
          <div className="category-tabs">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`category-tab ${category === cat.id ? 'active' : ''}`}
                onClick={() => setCategory(cat.id)}
              >
                {cat.emoji} {cat.name}
              </button>
            ))}
          </div>
          <div className="gallery-actions">
            <button className="surprise-btn" onClick={randomDrawing}>
              {'\uD83C\uDFB2'} Surprise Me!
            </button>
            <button className="learn-btn" onClick={() => setScreen('learn')}>
              {'\uD83C\uDF93'} Learn to Draw
            </button>
          </div>
          <div className="drawing-grid">
            {filteredDrawings.map(d => (
              <div
                key={d.id}
                className="drawing-card"
                onClick={() => selectDrawing(d)}
              >
                <div className="card-preview">
                  <svg viewBox="0 0 300 300" className="card-svg">
                    <g stroke="#666" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      {d.steps.map((s, i) => (
                        <g key={i} dangerouslySetInnerHTML={{ __html: s.svg }} />
                      ))}
                    </g>
                  </svg>
                </div>
                <div className="card-info">
                  <span className="card-emoji">{d.emoji}</span>
                  <span className="card-name">{d.name}</span>
                  <span className={`card-difficulty ${d.difficulty}`}>{d.difficulty}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ===== DRAWING VIEW =====
  if (screen === 'drawing' && selectedDrawing) {
    const drawing = selectedDrawing;
    const totalSteps = drawing.steps.length;
    const isFullView = viewMode === 'full';
    const isComplete = currentStep === totalSteps - 1;

    return (
      <div className="app">
        <header className="app-header">
          <button className="back-btn" onClick={goToGallery}>{'\u2190'} Back</button>
          <h1>{drawing.emoji} {drawing.name}</h1>
          <div style={{ position: 'relative' }}>
            <button className="menu-btn" onClick={() => setShowMenu(!showMenu)}>
              {'\uD83C\uDFAE'} Fun Stuff
            </button>
            {showMenu && (
              <>
                <div className="menu-overlay" onClick={() => setShowMenu(false)} />
                <div className="menu-dropdown">
                  <button className="menu-item" onClick={() => { setScreen('doodle'); setShowMenu(false); }}>
                    {'\uD83C\uDFA8'} Doodle Pad
                  </button>
                  <button className="menu-item" onClick={() => { setScreen('memory'); setShowMenu(false); }}>
                    {'\uD83C\uDFB4'} Memory Match
                  </button>
                  <button className="menu-item" onClick={() => { setScreen('snake'); setShowMenu(false); }}>
                    {'\uD83D\uDC0D'} Snake Game
                  </button>
                </div>
              </>
            )}
          </div>
        </header>
        <div className="drawing-view">
          <div className="view-toggle">
            <button
              className={`toggle-btn ${isFullView ? 'active' : ''}`}
              onClick={() => setViewMode('full')}
            >
              {'\uD83D\uDDBC\uFE0F'} Full Picture
            </button>
            <button
              className={`toggle-btn ${!isFullView ? 'active' : ''}`}
              onClick={() => { setViewMode('steps'); setCurrentStep(0); setEncouragement(''); }}
            >
              {'\uD83D\uDC63'} Step by Step
            </button>
          </div>

          <div className="drawing-container">
            <svg viewBox="0 0 300 300" className="drawing-svg">
              {showGrid && <GridLines />}
              <g stroke="#444" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                {drawing.steps.map((step, i) => {
                  let opacity, strokeColor;
                  if (isFullView) {
                    opacity = 1;
                    strokeColor = undefined;
                  } else {
                    if (i > currentStep) {
                      opacity = 0;
                    } else if (i === currentStep) {
                      opacity = 1;
                    } else {
                      opacity = 0.25;
                    }
                  }
                  return (
                    <g
                      key={i}
                      className={`step-layer ${!isFullView && i === currentStep ? 'entering' : ''}`}
                      style={{
                        opacity,
                        transition: 'opacity 0.4s ease',
                        pointerEvents: 'none',
                      }}
                      dangerouslySetInnerHTML={{ __html: step.svg }}
                    />
                  );
                })}
              </g>
            </svg>
          </div>

          {isFullView ? (
            <div className="full-view-controls">
              <label className="grid-toggle">
                <input
                  type="checkbox"
                  checked={showGrid}
                  onChange={e => setShowGrid(e.target.checked)}
                />
                Show Grid Helper
              </label>
              <p className="full-view-tip">
                Study the full picture, then switch to &quot;Step by Step&quot; to learn how to draw it!
              </p>
            </div>
          ) : (
            <div className="step-controls">
              <div className="step-progress">
                {drawing.steps.map((_, i) => (
                  <div
                    key={i}
                    className={`step-dot ${i <= currentStep ? 'filled' : ''} ${i === currentStep ? 'current' : ''}`}
                  />
                ))}
              </div>
              <div className="step-info">
                <h3>
                  Step {currentStep + 1} of {totalSteps}: {drawing.steps[currentStep].title}
                </h3>
                <p className="step-instruction">
                  {drawing.steps[currentStep].instruction}
                </p>
                <div className="step-tip">
                  <span className="tip-label">{'\uD83D\uDCA1'} Tip: </span>
                  {drawing.steps[currentStep].tip}
                </div>
              </div>
              <div className="step-nav">
                <button
                  className="nav-btn"
                  disabled={currentStep === 0}
                  onClick={prevStep}
                >
                  {'\u2190'} Previous
                </button>
                <button
                  className="nav-btn"
                  disabled={isComplete}
                  onClick={nextStep}
                >
                  Next {'\u2192'}
                </button>
              </div>
              {encouragement && !isComplete && (
                <p className="encouragement" key={currentStep}>{encouragement}</p>
              )}
              {isComplete && (
                <div className="congrats">
                  {'\uD83C\uDF89'} Amazing! You completed the drawing! {'\uD83C\uDF89'}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
}
