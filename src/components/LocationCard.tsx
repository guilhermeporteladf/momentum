import { motion } from 'framer-motion'
import { useState } from 'react'

interface LocationCardProps {
  title: string
  dates: string
  location: string
  buttonText: string
  buttonLink: string
}

const LocationCard = ({
  title,
  dates,
  location,
  buttonText,
  buttonLink,
}: LocationCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  return (
    <motion.div
      className="flex-1 bg-black/40 backdrop-blur-md rounded-2xl p-8 flex flex-col gap-6"
      style={{ border: '1px solid rgba(139, 92, 246, 0.3)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
        <p className="text-lg text-purple-300">{dates}</p>
        <p className="text-base text-gray-400">{location}</p>
      </div>

      <motion.a
        href={buttonLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative overflow-hidden rounded-lg px-8 py-4 font-semibold text-white text-center cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        animate={{
          boxShadow: isHovered
            ? [
                '0 0 20px rgba(139, 92, 246, 0.5)',
                '0 0 30px rgba(139, 92, 246, 0.7)',
                '0 0 20px rgba(139, 92, 246, 0.5)',
              ]
            : '0 0 15px rgba(139, 92, 246, 0.3)',
        }}
        transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
        style={{
          background: isHovered 
            ? `linear-gradient(${isHovered ? '225deg' : '135deg'}, rgba(139, 92, 246, 0.9), rgba(59, 130, 246, 0.9), rgba(236, 72, 153, 0.9))`
            : `linear-gradient(135deg, rgba(139, 92, 246, 0.8), rgba(59, 130, 246, 0.8), rgba(236, 72, 153, 0.8))`,
          backgroundSize: '200% 200%',
          border: '1px solid rgba(139, 92, 246, 0.5)',
        }}
      >
        {/* Shimmer Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{
            x: isHovered ? ['-100%', '200%'] : '-100%',
          }}
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0,
            ease: 'linear',
          }}
        />

        {/* Ripple Effect on Click */}
        {isPressed && (
          <motion.div
            className="absolute inset-0 bg-white/30 rounded-lg"
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        )}

        <span className="relative z-10">{buttonText}</span>
      </motion.a>
    </motion.div>
  )
}

export default LocationCard