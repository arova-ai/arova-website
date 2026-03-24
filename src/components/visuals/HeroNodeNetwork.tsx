import { motion } from 'framer-motion';

const nodes = [
  { x: 200, y: 200, label: 'Nexus' },
  { x: 80, y: 80 },
  { x: 320, y: 60 },
  { x: 350, y: 200 },
  { x: 300, y: 320 },
  { x: 100, y: 310 },
  { x: 50, y: 190 },
  { x: 200, y: 50 },
];

const connections = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7],
];

export default function HeroNodeNetwork() {
  return (
    <div className="relative w-full aspect-square max-w-md mx-auto">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full blur-[80px] animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-1/3 h-1/3 bg-accent/15 rounded-full blur-[60px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <svg viewBox="0 0 400 400" className="w-full h-full relative z-10">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connection lines */}
        {connections.map(([from, to], i) => (
          <motion.line
            key={`line-${i}`}
            x1={nodes[from].x}
            y1={nodes[from].y}
            x2={nodes[to].x}
            y2={nodes[to].y}
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            opacity="0.4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: i * 0.15, ease: 'easeOut' }}
          />
        ))}

        <defs>
          <linearGradient id="lineGradient">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.g
            key={`node-${i}`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.1, type: 'spring' }}
          >
            {i === 0 ? (
              <>
                <circle cx={node.x} cy={node.y} r="28" fill="#0F172A" stroke="#06B6D4" strokeWidth="2" filter="url(#glow)" />
                <text x={node.x} y={node.y + 5} textAnchor="middle" fill="#06B6D4" fontSize="11" fontWeight="600" fontFamily="Inter">
                  {node.label}
                </text>
              </>
            ) : (
              <>
                <circle cx={node.x} cy={node.y} r="8" fill="#1E293B" stroke="#8B5CF6" strokeWidth="1.5" />
                <circle cx={node.x} cy={node.y} r="3" fill="#8B5CF6" opacity="0.8" />
              </>
            )}
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
