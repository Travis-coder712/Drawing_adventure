import { useState, useRef, useEffect, useCallback } from 'react';

const COLORS = [
  '#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6',
  '#8b5cf6', '#ec4899', '#000000', '#6b7280', '#92400e',
  '#ffffff',
];

const BRUSH_SIZES = [
  { label: 'S', size: 3 },
  { label: 'M', size: 6 },
  { label: 'L', size: 12 },
  { label: 'XL', size: 24 },
];

export default function DoodlePad({ onBack }) {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#000000');
  const [brushSize, setBrushSize] = useState(3);
  const [lastPos, setLastPos] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    setHistory([canvas.toDataURL()]);
  }, []);

  const getPos = useCallback((e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY,
    };
  }, []);

  const startDraw = useCallback((e) => {
    e.preventDefault();
    const pos = getPos(e);
    setIsDrawing(true);
    setLastPos(pos);
    const ctx = canvasRef.current.getContext('2d');
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, brushSize / 2, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  }, [getPos, color, brushSize]);

  const draw = useCallback((e) => {
    e.preventDefault();
    if (!isDrawing || !lastPos) return;
    const pos = getPos(e);
    const ctx = canvasRef.current.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(lastPos.x, lastPos.y);
    ctx.lineTo(pos.x, pos.y);
    ctx.strokeStyle = color;
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.stroke();
    setLastPos(pos);
  }, [isDrawing, lastPos, getPos, color, brushSize]);

  const endDraw = useCallback(() => {
    if (isDrawing) {
      setIsDrawing(false);
      setLastPos(null);
      const dataUrl = canvasRef.current.toDataURL();
      setHistory(prev => [...prev.slice(-20), dataUrl]);
    }
  }, [isDrawing]);

  const undo = () => {
    if (history.length <= 1) return;
    const newHistory = history.slice(0, -1);
    setHistory(newHistory);
    const img = new Image();
    img.onload = () => {
      const ctx = canvasRef.current.getContext('2d');
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      ctx.drawImage(img, 0, 0);
    };
    img.src = newHistory[newHistory.length - 1];
  };

  const clearCanvas = () => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    setHistory([canvasRef.current.toDataURL()]);
  };

  const download = () => {
    const link = document.createElement('a');
    link.download = 'my-doodle.png';
    link.href = canvasRef.current.toDataURL();
    link.click();
  };

  return (
    <div className="doodle-screen">
      <header className="app-header">
        <button className="back-btn" onClick={onBack}>{'\u2190'} Back</button>
        <h1>{'\uD83C\uDFA8'} Doodle Pad</h1>
      </header>
      <div className="doodle-canvas-wrap">
        <canvas
          ref={canvasRef}
          className="doodle-canvas"
          width={600}
          height={500}
          onMouseDown={startDraw}
          onMouseMove={draw}
          onMouseUp={endDraw}
          onMouseLeave={endDraw}
          onTouchStart={startDraw}
          onTouchMove={draw}
          onTouchEnd={endDraw}
        />
      </div>
      <div className="doodle-toolbar">
        <div className="color-palette">
          {COLORS.map(c => (
            <button
              key={c}
              className={`color-swatch ${color === c ? 'active' : ''}`}
              style={{
                backgroundColor: c,
                border: c === '#ffffff' ? '2px solid #ccc' : undefined,
              }}
              onClick={() => setColor(c)}
            />
          ))}
        </div>
        <div className="brush-sizes">
          {BRUSH_SIZES.map(b => (
            <button
              key={b.label}
              className={`brush-size-btn ${brushSize === b.size ? 'active' : ''}`}
              style={{ width: b.size + 16, height: b.size + 16 }}
              onClick={() => setBrushSize(b.size)}
              title={b.label}
            />
          ))}
        </div>
        <button className="tool-btn" onClick={undo}>Undo</button>
        <button className="tool-btn" onClick={clearCanvas}>Clear</button>
        <button className="tool-btn" onClick={download}>Save</button>
      </div>
    </div>
  );
}
