'use client';

import React, { useEffect, useState } from 'react';

type ParticleSize = 'small' | 'medium';

interface ParticlesProps {
  count?: number;
  size?: ParticleSize;
  className?: string;
}

const Particles: React.FC<ParticlesProps> = ({ 
  count = 50, 
  size = 'small',
  className = 'particles-container' 
}) => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    randomX: number;
    randomY: number;
    randomSize: number;
    randomDuration: number;
  }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: count }).map((_, i) => ({
      id: i,
      randomX: Math.random(),
      randomY: Math.random(),
      randomSize: Math.random(),
      randomDuration: Math.random()
    }));
    
    setParticles(newParticles);
  }, [count]);

  return (
    <div className={className}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={size === 'small' ? 'particle-small' : 'particle-medium'}
          style={{
            '--random-x': particle.randomX,
            '--random-y': particle.randomY,
            '--random-size': particle.randomSize,
            '--random-duration': particle.randomDuration
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default Particles;