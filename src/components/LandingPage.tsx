import { motion } from 'framer-motion'
import LocationCard from './LocationCard'
import MomentumBallAnimation from './MomentumBallAnimation'

const LandingPage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3), transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.3), transparent 50%)',
            'radial-gradient(circle at 50% 80%, rgba(236, 72, 153, 0.3), transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3), transparent 50%)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Momentum Ball Animation */}
      <MomentumBallAnimation />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => {
          const startX = (i * 47) % 100
          const startY = (i * 73) % 100
          const duration = 10 + (i % 10)
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-5"
              style={{
                left: `${startX}%`,
                top: `${startY}%`,
              }}
              animate={{
                x: [0, 100, -100, 0],
                y: [0, -100, 100, 0],
              }}
              transition={{
                duration,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          )
        })}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 py-8">
        <div className="max-w-6xl w-full flex flex-col items-center gap-8 md:gap-12">
          {/* Title */}
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(139,92,246,0.5)]">
              Momentum
            </span>
          </motion.h1>

          {/* Dates & Locations */}
          <motion.div
            className="text-xl md:text-2xl text-gray-300 text-center space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p>April 10–12 · San Diego, CA</p>
            <p>April 17–19 · Florida</p>
          </motion.div>

          {/* Location Cards */}
          <motion.div
            className="flex flex-col md:flex-row gap-6 md:gap-8 w-full max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <LocationCard
              title="Momentum San Diego"
              dates="April 10–12"
              location="San Diego, CA"
              buttonText="Buy Tickets"
              buttonLink="https://bscpro.com/event/momentumwc"
            />
            <LocationCard
              title="Momentum Florida"
              dates="April 17–19"
              location="Florida"
              buttonText="Buy Tickets"
              buttonLink="https://bscpro.com/event/momentumec"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage