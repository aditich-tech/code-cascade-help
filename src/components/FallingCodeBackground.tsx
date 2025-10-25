import { useEffect, useRef } from 'react';

const CODE_KEYWORDS = [
  'function', 'const', 'let', 'async', 'await', 'return',
  '<div>', '</div>', 'import', 'export', 'class', 'interface',
  'type', 'useState', 'useEffect', 'props', 'map', 'filter',
  'onClick', 'onChange', 'Promise', 'fetch', 'try', 'catch',
  '=>', '{}', '[]', '()', '&&', '||', '===', '!==',
];

interface FallingKeyword {
  text: string;
  x: number;
  y: number;
  speed: number;
  column: number;
}

const FallingCodeBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const keywordsRef = useRef<FallingKeyword[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize keywords in columns
    const numColumns = 8;
    const columnWidth = canvas.width / numColumns;

    // Create initial keywords
    for (let col = 0; col < numColumns; col++) {
      const keyword: FallingKeyword = {
        text: CODE_KEYWORDS[Math.floor(Math.random() * CODE_KEYWORDS.length)],
        x: col * columnWidth + columnWidth / 2,
        y: Math.random() * -500 - 100, // Start above viewport
        speed: 0.3 + Math.random() * 0.3, // Slow speed (0.3-0.6)
        column: col,
      };
      keywordsRef.current.push(keyword);
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.06)'; // 6% opacity
      ctx.font = '16px "Fira Code", monospace';
      ctx.textAlign = 'center';

      keywordsRef.current.forEach((keyword) => {
        // Draw keyword
        ctx.fillText(keyword.text, keyword.x, keyword.y);

        // Update position
        keyword.y += keyword.speed;

        // Reset when off screen
        if (keyword.y > canvas.height + 50) {
          keyword.y = -50;
          keyword.text = CODE_KEYWORDS[Math.floor(Math.random() * CODE_KEYWORDS.length)];
          keyword.speed = 0.3 + Math.random() * 0.3;
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default FallingCodeBackground;
