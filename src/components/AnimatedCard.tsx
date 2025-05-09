
import React, { useState, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  glareEnabled?: boolean;
  depth?: 'none' | 'shallow' | 'medium' | 'deep';
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  children, 
  className,
  glareEnabled = true,
  depth = 'medium'
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5
    
    const moveX = x * getDepthFactor(depth);
    const moveY = y * getDepthFactor(depth);
    
    setPosition({ x: moveX, y: moveY });
    setGlarePosition({ x: (x + 0.5) * 100, y: (y + 0.5) * 100 });
  };

  const getDepthFactor = (depth: 'none' | 'shallow' | 'medium' | 'deep'): number => {
    switch (depth) {
      case 'none': return 0;
      case 'shallow': return 3;
      case 'medium': return 7;
      case 'deep': return 10;
      default: return 7;
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'relative transition-transform duration-200 ease-out transform-gpu',
        {
          'transform-none': !isHovered,
          'cursor-pointer': isHovered
        },
        className
      )}
      style={{
        transform: `perspective(1000px) rotateX(${-position.y}deg) rotateY(${position.x}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`
      }}
    >
      {glareEnabled && isHovered && (
        <div
          className="absolute inset-0 pointer-events-none opacity-70 rounded-inherit overflow-hidden"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 80%)`,
            borderRadius: 'inherit'
          }}
        />
      )}
      {children}
    </div>
  );
};

export default AnimatedCard;
