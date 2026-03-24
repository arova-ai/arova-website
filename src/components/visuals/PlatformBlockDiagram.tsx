import { motion } from 'framer-motion';

interface Layer {
  name: string;
  description: string;
}

interface Props {
  layers: Layer[];
}

const layerColors = [
  'from-cyan-500/20 to-cyan-500/5',
  'from-blue-500/20 to-blue-500/5',
  'from-indigo-500/20 to-indigo-500/5',
  'from-violet-500/20 to-violet-500/5',
  'from-purple-500/20 to-purple-500/5',
  'from-fuchsia-500/20 to-fuchsia-500/5',
];

const borderColors = [
  'border-cyan-500/30',
  'border-blue-500/30',
  'border-indigo-500/30',
  'border-violet-500/30',
  'border-purple-500/30',
  'border-fuchsia-500/30',
];

export default function PlatformBlockDiagram({ layers }: Props) {
  return (
    <div className="relative">
      {/* Vertical connecting line */}
      <div className="absolute left-6 top-4 bottom-4 w-px bg-gradient-to-b from-primary via-accent to-primary/20 hidden sm:block" />

      <div className="space-y-3">
        {layers.map((layer, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1, type: 'spring', stiffness: 100 }}
            className={`relative flex items-center gap-4 p-4 rounded-xl border bg-gradient-to-r ${layerColors[i]} ${borderColors[i]} backdrop-blur-sm`}
          >
            {/* Node dot */}
            <div className={`hidden sm:block w-3 h-3 rounded-full ${borderColors[i]} border-2 bg-background shrink-0 relative z-10`} />
            <div className="min-w-0">
              <div className="text-sm font-semibold text-foreground">{layer.name}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{layer.description}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
