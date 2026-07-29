import { useState, useEffect, useMemo, useCallback } from 'react';
import { drawings, categories, tiers, encouragements } from './drawings';
import DoodlePad from './DoodlePad';
import MemoryGame from './MemoryGame';
import SnakeGame from './SnakeGame';
import LearnSection from './LearnSection';

const APP_VERSION = '1.2.0';
const STORE_KEY = 'da_completed_v1';

const FLOATING_SHAPES = [
  { emoji: '✨', top: '10%', left: '5%', delay: '0s', size: '2rem' },
  { emoji: '🌟', top: '20%', left: '85%', delay: '-2s', size: '1.8rem' },
  { emoji: '🎨', top: '60%', left: '10%', delay: '-4s', size: '2.2rem' },
  { emoji: '✏️', top: '75%', left: '90%', delay: '-1s', size: '1.6rem' },
  { emoji: '🌈', top: '40%', left: '92%', delay: '-3s', size: '2rem' },
  { emoji: '🦄', top: '85%', left: '15%', delay: '-5s', size: '2.4rem' },
  { emoji: '🐾', top: '15%', left: '45%', delay: '-2.5s', size: '1.5rem' },
  { emoji: '⭐', top: '50%', left: '3%', delay: '-6s', size: '1.8rem' },
];

// Persist "mastered" drawings on-device.
function useCompleted() {
  const [done, setDone] = useState(() => {
    try { return new Set(JSON.parse(localStorage.getItem(STORE_KEY) || '[]')); }
    catch { return new Set(); }
  });
  const persist = (next) => {
    try { localStorage.setItem(STORE_KEY, JSON.stringify([...next])); } catch { /* ignore */ }
  };
  const toggle = useCallback((id) => {
    setDone((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      persist(next);
      return next;
    });
  }, []);
  const setComplete = useCallback((id) => {
    setDone((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      persist(next);
      return next;
    });
  }, []);
  return { done, toggle, setComplete };
}

// The beautiful full-colour goal artwork.
function GoalArt({ goal, className = '' }) {
  if (!goal) return null;
  return (
    <div className={`goal-frame ${className}`} style={{ background: goal.bg }}>
      <svg viewBox="0 0 300 300" dangerouslySetInnerHTML={{ __html: goal.svg }} />
    </div>
  );
}

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
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [justMastered, setJustMastered] = useState(false);

  const { done, toggle, setComplete } = useCompleted();

  const checkForUpdates = useCallback(() => {
    fetch(`${import.meta.env.BASE_URL}version.json?t=${Date.now()}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.version && data.version !== APP_VERSION) setUpdateAvailable(true);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    checkForUpdates();
    const interval = setInterval(checkForUpdates, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [checkForUpdates]);

  const filteredDrawings = useMemo(
    () => (category === 'all' ? drawings : drawings.filter((d) => d.category === category)),
    [category]
  );

  // Group the filtered set into the tier ladder.
  const tierGroups = useMemo(
    () => tiers.map((t) => ({ tier: t, items: filteredDrawings.filter((d) => d.tier === t.id) })).filter((g) => g.items.length),
    [filteredDrawings]
  );

  const masteredCount = done.size;
  const totalCount = drawings.length;

  const selectDrawing = (drawing) => {
    setSelectedDrawing(drawing);
    setCurrentStep(0);
    setViewMode('full');
    setEncouragement('');
    setJustMastered(false);
    setScreen('drawing');
  };

  const goToGallery = () => {
    setScreen('gallery');
    setSelectedDrawing(null);
    setShowMenu(false);
  };

  const randomDrawing = () => {
    const pool = filteredDrawings;
    selectDrawing(pool[Math.floor(Math.random() * pool.length)]);
  };

  const nextStep = () => {
    if (!selectedDrawing) return;
    if (currentStep < selectedDrawing.steps.length - 1) {
      setCurrentStep((s) => s + 1);
      setEncouragement(encouragements[Math.floor(Math.random() * encouragements.length)]);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((s) => s - 1);
      setEncouragement('');
    }
  };

  const markMastered = (id) => {
    setComplete(id);
    setJustMastered(true);
  };

  const Menu = () => (
    <div style={{ position: 'relative' }}>
      <button className="menu-btn" onClick={() => setShowMenu(!showMenu)}>
        {'🎮'} Fun Stuff
      </button>
      {showMenu && (
        <>
          <div className="menu-overlay" onClick={() => setShowMenu(false)} />
          <div className="menu-dropdown">
            <button className="menu-item" onClick={() => { setScreen('doodle'); setShowMenu(false); }}>{'🎨'} Doodle Pad</button>
            <button className="menu-item" onClick={() => { setScreen('memory'); setShowMenu(false); }}>{'🎴'} Memory Match</button>
            <button className="menu-item" onClick={() => { setScreen('snake'); setShowMenu(false); }}>{'🐍'} Snake Game</button>
          </div>
        </>
      )}
    </div>
  );

  // ===== WELCOME SCREEN =====
  if (screen === 'welcome') {
    const preview = ['cat', 'unicorn', 'rocket', 'fox', 'rainbow']
      .map((id) => drawings.find((d) => d.id === id))
      .filter(Boolean);
    return (
      <div className="app">
        <div className="welcome-screen">
          <div className="welcome-bg">
            {FLOATING_SHAPES.map((s, i) => (
              <div key={i} className="floating-shape" style={{ top: s.top, left: s.left, fontSize: s.size, animationDelay: s.delay, animationDuration: `${6 + i}s` }}>{s.emoji}</div>
            ))}
          </div>
          <div className="welcome-content">
            <h1 className="welcome-title">Drawing Adventure!</h1>
            <p className="welcome-subtitle">Learn to draw amazing things, step by step!</p>
            <button className="start-btn" onClick={() => setScreen('gallery')}>{'✏️'} Start Drawing!</button>
            <div className="welcome-drawings">
              {preview.map((d) => (
                <GoalArt key={d.id} goal={d.goal} className="welcome-mini" />
              ))}
            </div>
          </div>
          <div className="version-label">v{APP_VERSION}</div>
          {updateAvailable && (
            <div className="update-banner" onClick={() => window.location.reload()}>{'✨'} A new version is available! Tap to update.</div>
          )}
        </div>
      </div>
    );
  }

  // ===== EASTER EGG SCREENS =====
  if (screen === 'doodle') return <DoodlePad onBack={goToGallery} />;
  if (screen === 'memory') return <MemoryGame onBack={goToGallery} />;
  if (screen === 'snake') return <SnakeGame onBack={goToGallery} />;
  if (screen === 'learn') return <LearnSection onBack={goToGallery} onSelectDrawing={selectDrawing} drawings={drawings} />;

  // ===== GALLERY SCREEN =====
  if (screen === 'gallery') {
    const pct = Math.round((masteredCount / totalCount) * 100);
    return (
      <div className="app">
        <header className="app-header">
          <h1>{'✏️'} Drawing Adventure</h1>
          <Menu />
        </header>
        <div className="gallery">
          <div className="progress-card">
            <div className="progress-head">
              <span className="progress-star">{masteredCount >= totalCount ? '👑' : '🎨'}</span>
              <span className="progress-label">{masteredCount} of {totalCount} mastered</span>
            </div>
            <div className="progress-track"><div className="progress-fill" style={{ width: `${pct}%` }} /></div>
          </div>

          <div className="category-tabs">
            {categories.map((cat) => (
              <button key={cat.id} className={`category-tab ${category === cat.id ? 'active' : ''}`} onClick={() => setCategory(cat.id)}>
                {cat.emoji} {cat.name}
              </button>
            ))}
          </div>
          <div className="gallery-actions">
            <button className="surprise-btn" onClick={randomDrawing}>{'🎲'} Surprise Me!</button>
            <button className="learn-btn" onClick={() => setScreen('learn')}>{'🎓'} Learn to Draw</button>
          </div>

          {tierGroups.map(({ tier, items }) => {
            const tierDone = items.filter((d) => done.has(d.id)).length;
            const tierComplete = tierDone === items.length;
            return (
              <section key={tier.id} className="tier-section">
                <div className="tier-header">
                  <span className="tier-emoji">{tier.emoji}</span>
                  <div className="tier-titles">
                    <h2 className="tier-name">{tier.name} {tierComplete && <span className="tier-crown">{'👑'}</span>}</h2>
                    <p className="tier-blurb">{tier.blurb}</p>
                  </div>
                  <span className="tier-count">{tierDone}/{items.length}</span>
                </div>
                <div className="drawing-grid">
                  {items.map((d) => {
                    const isDone = done.has(d.id);
                    return (
                      <div key={d.id} className={`drawing-card ${isDone ? 'is-done' : ''}`} onClick={() => selectDrawing(d)}>
                        <div className="card-preview">
                          <GoalArt goal={d.goal} />
                          <button
                            className={`card-check ${isDone ? 'checked' : ''}`}
                            onClick={(e) => { e.stopPropagation(); toggle(d.id); }}
                            aria-label={isDone ? 'Mark as not done' : 'Mark as done'}
                          >{isDone ? '✓' : ''}</button>
                        </div>
                        <div className="card-info">
                          <span className="card-name">{d.name}</span>
                          <span className={`card-difficulty ${d.difficulty}`}>{d.difficulty}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
          <div className="version-label">v{APP_VERSION}</div>
        </div>
        {updateAvailable && (
          <div className="update-banner" onClick={() => window.location.reload()}>{'✨'} A new version is available! Tap to update.</div>
        )}
      </div>
    );
  }

  // ===== DRAWING VIEW =====
  if (screen === 'drawing' && selectedDrawing) {
    const drawing = selectedDrawing;
    const totalSteps = drawing.steps.length;
    const isFullView = viewMode === 'full';
    const isComplete = currentStep === totalSteps - 1;
    const isDone = done.has(drawing.id);

    return (
      <div className="app">
        <header className="app-header">
          <button className="back-btn" onClick={goToGallery}>{'←'} Back</button>
          <h1>{drawing.emoji} {drawing.name}</h1>
          <Menu />
        </header>
        <div className="drawing-view">
          <div className="view-toggle">
            <button className={`toggle-btn ${isFullView ? 'active' : ''}`} onClick={() => setViewMode('full')}>{'🖼️'} Full Picture</button>
            <button className={`toggle-btn ${!isFullView ? 'active' : ''}`} onClick={() => { setViewMode('steps'); setCurrentStep(0); setEncouragement(''); }}>{'👣'} Step by Step</button>
          </div>

          {isFullView ? (
            <>
              <div className="drawing-container">
                <GoalArt goal={drawing.goal} className="goal-hero" />
              </div>
              <div className="full-view-controls">
                <p className="full-view-tip">This is what you're making! Study it, then tap <strong>Step by Step</strong> to learn how to draw it.</p>
                <button className={`master-btn ${isDone ? 'done' : ''}`} onClick={() => (isDone ? toggle(drawing.id) : markMastered(drawing.id))}>
                  {isDone ? '✓ Mastered! (tap to undo)' : '🌟 I drew it! Mark as done'}
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="drawing-container">
                <svg viewBox="0 0 300 300" className="drawing-svg">
                  {showGrid && <GridLines />}
                  <g stroke="#444" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    {drawing.steps.map((step, i) => {
                      let opacity = 1;
                      if (!isFullView) {
                        if (i > currentStep) opacity = 0;
                        else if (i === currentStep) opacity = 1;
                        else opacity = 0.25;
                      }
                      return (
                        <g key={i} className={`step-layer ${i === currentStep ? 'entering' : ''}`} style={{ opacity, transition: 'opacity 0.4s ease', pointerEvents: 'none' }} dangerouslySetInnerHTML={{ __html: step.svg }} />
                      );
                    })}
                  </g>
                </svg>
              </div>
              <div className="step-controls">
                <div className="step-progress">
                  {drawing.steps.map((_, i) => (
                    <div key={i} className={`step-dot ${i <= currentStep ? 'filled' : ''} ${i === currentStep ? 'current' : ''}`} />
                  ))}
                </div>
                <div className="step-info">
                  <h3>Step {currentStep + 1} of {totalSteps}: {drawing.steps[currentStep].title}</h3>
                  <p className="step-instruction">{drawing.steps[currentStep].instruction}</p>
                  <div className="step-tip"><span className="tip-label">{'💡'} Tip: </span>{drawing.steps[currentStep].tip}</div>
                </div>
                <label className="grid-toggle">
                  <input type="checkbox" checked={showGrid} onChange={(e) => setShowGrid(e.target.checked)} />
                  Show Grid Helper
                </label>
                <div className="step-nav">
                  <button className="nav-btn" disabled={currentStep === 0} onClick={prevStep}>{'←'} Previous</button>
                  <button className="nav-btn" disabled={isComplete} onClick={nextStep}>Next {'→'}</button>
                </div>
                {encouragement && !isComplete && <p className="encouragement" key={currentStep}>{encouragement}</p>}
                {isComplete && (
                  <div className="congrats">
                    <p>{'🎉'} You finished all the steps! {'🎉'}</p>
                    <button className={`master-btn ${isDone ? 'done' : ''}`} onClick={() => (isDone ? toggle(drawing.id) : markMastered(drawing.id))}>
                      {isDone ? '✓ Mastered! (tap to undo)' : '🌟 I drew it! Mark as done'}
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {justMastered && isDone && (
          <div className="mastered-pop" onClick={() => setJustMastered(false)}>
            <div className="mastered-card">
              <div className="mastered-emoji">{'🌟'}</div>
              <h2>{drawing.name} mastered!</h2>
              <p>{masteredCount} of {totalCount} done. Keep going!</p>
              <button className="master-btn" onClick={(e) => { e.stopPropagation(); goToGallery(); }}>Pick another</button>
              <button className="ghost-btn" onClick={(e) => { e.stopPropagation(); setJustMastered(false); }}>Stay here</button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return null;
}
