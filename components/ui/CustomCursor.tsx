import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isHovering = false;
    const dot = cursorDotRef.current;
    const outline = cursorOutlineRef.current;
    
    if (!dot || !outline) return;

    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      dot.style.left = `${clientX}px`;
      dot.style.top = `${clientY}px`;
      outline.style.left = `${clientX}px`;
      outline.style.top = `${clientY}px`;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-cursor-interactive]')) {
        if (!isHovering) {
          isHovering = true;
          dot.classList.add('scale-0');
          dot.classList.remove('scale-100');
          outline.classList.add('scale-150', 'opacity-50', 'bg-accent/20');
          outline.classList.remove('scale-100', 'opacity-100');
        }
      } else {
        if (isHovering) {
          isHovering = false;
          dot.classList.remove('scale-0');
          dot.classList.add('scale-100');
          outline.classList.remove('scale-150', 'opacity-50', 'bg-accent/20');
          outline.classList.add('scale-100', 'opacity-100');
        }
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.body.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div className="hidden md:block">
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[10003] transition-transform duration-200 scale-100"
      />
      <div
        ref={cursorOutlineRef}
        className="fixed top-0 left-0 w-8 h-8 border-2 border-accent rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[10003] transition-all duration-300 ease-out scale-100 opacity-100"
      />
    </div>
  );
};

export default CustomCursor;