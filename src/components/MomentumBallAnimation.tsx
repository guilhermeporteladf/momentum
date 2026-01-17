import { motion } from 'framer-motion'

const MomentumBallAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25">
      {/* SVG Ramps - Going Upward */}
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ opacity: 0.3 }}>
        {/* First Ramp - Left side (going up) */}
        <motion.path
          d="M 5 75 L 20 55"
          stroke="rgba(139, 92, 246, 0.6)"
          strokeWidth="0.3"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Second Ramp - Middle (going up) */}
        <motion.path
          d="M 40 65 L 60 40"
          stroke="rgba(59, 130, 246, 0.6)"
          strokeWidth="0.3"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />

        {/* Third Ramp - Right side (going up) */}
        <motion.path
          d="M 80 55 L 95 30"
          stroke="rgba(236, 72, 153, 0.6)"
          strokeWidth="0.3"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
      </svg>

      {/* Ball with momentum effect */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '0.6%',
          paddingBottom: '0.6%',
          background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(139, 92, 246, 0.9))',
          boxShadow: '0 0 8px rgba(139, 92, 246, 0.8), inset -1px -1px 3px rgba(0,0,0,0.4)',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          left: ['5%', '20%', '40%', '60%', '80%', '95%', '5%'],
          top: ['75%', '55%', '40%', '65%', '50%', '30%', '75%'],
          scale: [1, 1, 1.15, 1, 1, 1.15, 1],
          rotate: [0, -180, -360, -540, -720, -900, -1080],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: [
            [0.25, 0.46, 0.45, 0.94], // Smooth roll up ramp 1
            [0.68, -0.55, 0.265, 1.55], // Parabolic jump 1 (gaining momentum)
            [0.25, 0.46, 0.45, 0.94], // Smooth roll up ramp 2
            [0.68, -0.55, 0.265, 1.55], // Parabolic jump 2 (gaining momentum)
            [0.25, 0.46, 0.45, 0.94], // Smooth roll up ramp 3
            [0, 0, 1, 1], // Instant reset
          ],
          times: [0, 0.28, 0.38, 0.62, 0.72, 0.95, 1],
        }}
      />

      {/* Motion trail - appears during jumps */}
      <motion.div
        className="absolute rounded-full blur-md"
        style={{
          width: '0.8%',
          paddingBottom: '0.8%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.5), transparent)',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          left: ['5%', '20%', '40%', '60%', '80%', '95%', '5%'],
          top: ['75%', '55%', '40%', '65%', '50%', '30%', '75%'],
          opacity: [0, 0.3, 0.8, 0.3, 0.8, 0.3, 0],
          scale: [0.8, 0.8, 1.5, 0.8, 1.5, 0.8, 0.8],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: [
            [0.25, 0.46, 0.45, 0.94],
            [0.68, -0.55, 0.265, 1.55],
            [0.25, 0.46, 0.45, 0.94],
            [0.68, -0.55, 0.265, 1.55],
            [0.25, 0.46, 0.45, 0.94],
            [0, 0, 1, 1],
          ],
          times: [0, 0.28, 0.38, 0.62, 0.72, 0.95, 1],
        }}
      />
    </div>
  )
}

export default MomentumBallAnimation