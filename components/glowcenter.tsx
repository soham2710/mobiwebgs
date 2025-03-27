'use client';

import React from 'react';

interface GlowCenterProps {
  className?: string;
}

const GlowCenter: React.FC<GlowCenterProps> = ({ 
  className = 'glow-center' 
}) => {
  return (
    <div className={className} />
  );
};

export default GlowCenter;