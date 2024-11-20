import { useEffect, useState } from 'react';

export function useMobile() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  function handleWindowSizeChange() {
    const isMobile = window.innerWidth <= 1400;
    setIsMobile(isMobile);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return [isMobile];
}
