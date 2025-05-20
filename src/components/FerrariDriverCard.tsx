import React from 'react';
import { motion } from 'framer-motion';

interface FerrariDriverCardProps {
  name: string;
  lastName: string;
  number: string;
  nationality: string;
  position: string;
  points: string;
  wins: string;
  podiums: string;
  imageUrl: string;
}

const FerrariDriverCard = ({
  name,
  lastName,
  number,
  nationality,
  position,
  points,
  wins,
  podiums,
  imageUrl
}: FerrariDriverCardProps) => {
  return (
    <motion.div 
      className="relative rounded-xl overflow-hidden h-[400px] sm:h-[500px]"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt={`${name} ${lastName}`}
          className="w-full h-full object-cover object-top"
        />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      
      {/* Driver number */}
      <div className="absolute top-0 right-0 p-4">
        <div className="text-6xl sm:text-8xl font-bold text-ferrari-red" style={{ fontFamily: "'Orbitron', sans-serif", opacity: 0.7 }}>
          #{number}
        </div>
      </div>
      
      {/* Content container */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
        {/* Driver name */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-2" style={{ fontFamily: "'Orbitron', sans-serif" }}>
          {name} <span className="text-ferrari-red">{lastName}</span>
        </h2>
        
        <p className="text-white/80 mb-4 sm:mb-6">{nationality}</p>
        
        {/* Position badge */}
        <div className="absolute right-4 sm:right-8 top-4 sm:top-8 bg-black/80 backdrop-blur-sm p-2 sm:p-3 rounded-lg shadow-lg">
          <div className="text-xs text-white/70 uppercase text-center">POSITION</div>
          <div className="text-2xl sm:text-3xl font-bold text-ferrari-red text-center" style={{ fontFamily: "'Orbitron', sans-serif" }}>{position}</div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-4">
          <div className="bg-black/60 backdrop-blur-sm p-2 sm:p-4 rounded-lg text-center">
            <div className="text-xs text-white/70 uppercase">Points</div>
            <div className="text-xl sm:text-2xl font-bold text-white" style={{ fontFamily: "'Orbitron', sans-serif" }}>{points}</div>
          </div>
          <div className="bg-black/60 backdrop-blur-sm p-2 sm:p-4 rounded-lg text-center">
            <div className="text-xs text-white/70 uppercase">Wins</div>
            <div className="text-xl sm:text-2xl font-bold text-white" style={{ fontFamily: "'Orbitron', sans-serif" }}>{wins}</div>
          </div>
          <div className="bg-black/60 backdrop-blur-sm p-2 sm:p-4 rounded-lg text-center">
            <div className="text-xs text-white/70 uppercase">Podiums</div>
            <div className="text-xl sm:text-2xl font-bold text-white" style={{ fontFamily: "'Orbitron', sans-serif" }}>{podiums}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FerrariDriverCard; 