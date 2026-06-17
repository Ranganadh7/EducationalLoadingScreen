import React, { useEffect, useRef } from 'react';

const CHARS = ['0', '1', '{', '}', '()', '=>', 'λ', 'π', '∑', '∞', 'Δ', '√'];

export default function ParticlesBg() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let W, H;

    const particles = [];
    const N = 28;

    function resize() {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }

    function mkParticle() {
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        vy: -(0.18 + Math.random() * 0.22),
        alpha: 0.04 + Math.random() * 0.1,
        size: 10 + Math.random() * 10,
        char: CHARS[Math.floor(Math.random() * CHARS.length)],
        color: ['#7c5cfc','#00e5c3','#ffd166','#ff6b6b'][Math.floor(Math.random()*4)],
      };
    }

    resize();
    for (let i = 0; i < N; i++) {
      const p = mkParticle();
      p.y = Math.random() * H;
      particles.push(p);
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.font = `${p.size}px 'Fira Code', monospace`;
        ctx.fillText(p.char, p.x, p.y);
        ctx.restore();
        p.y += p.vy;
        if (p.y < -20) {
          Object.assign(p, mkParticle());
          p.y = H + 10;
        }
      });
      animId = requestAnimationFrame(draw);
    }

    draw();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}