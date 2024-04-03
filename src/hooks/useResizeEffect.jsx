import { useEffect } from 'react';

const useResizeEffect = (callback) => {
  useEffect(() => {
    const resizeHandle = () => {
      callback(window.innerWidth < 1100);
    };

    window.addEventListener('resize', resizeHandle);
    return () => window.removeEventListener('resize', resizeHandle);
  }, [callback]);
};

export default useResizeEffect;
