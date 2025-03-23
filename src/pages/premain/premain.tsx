import { useEffect, useState } from 'react';
import FooterPage from '../../components/footer';
import Slider from '../../components/slider';

const PremainPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden flex flex-col md:flex-row">
      <div
        className="custom-cursor pointer-events-none fixed w-4 h-4 md:w-6 md:h-6 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      />
      {/* Title Section */}
      <div className="flex flex-col justify-center items-center md:items-start w-full md:w-1/2 px-4 md:pl-16 z-10 text-center md:text-left">
        <h1 className="text-5xl xs:text-6xl md:text-9xl font-bold tracking-widest leading-tight">
          ASKBROWS
        </h1>
        <p className="mt-4 text-sm xs:text-base md:text-lg text-gray-400 leading-snug">
          персональный сайт мастера по бровям и ресницам
        </p>
      </div>
      {/* Slider Section */}
      <div className="w-full md:w-1/2 h-full flex justify-center items-center mt-2 md:mt-0">
        <Slider className="w-full h-1/3 xs:h-1/2 md:h-full" />
      </div>
      {/* Footer Section */}
      <FooterPage />
    </div>
  );
};

export default PremainPage;
