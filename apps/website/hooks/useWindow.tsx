import React, { useState, useEffect } from 'react';
import { SIZE } from '@blockfint/website/assets/globalStyle';
export const useWindow = () => {
  const isWindowClient = typeof window === 'object';
  const [windowSize, setWindowSize] = useState(
    isWindowClient ? window.innerWidth : undefined
  );
  useEffect(() => {
    function setSize(mq) {
      if (mq.matches) {
        setWindowSize(window.innerWidth);
      } else {
        setWindowSize(window.innerWidth);
      }
    }
    if (isWindowClient) {
      const tablet = window.matchMedia(`(min-width: ${SIZE.tablet})`);
      const desktop = window.matchMedia(`(min-width: ${SIZE.desktop})`);
      tablet.addListener(setSize);
      desktop.addListener(setSize);
      setSize(tablet);
      setSize(desktop);
    }
  }, [isWindowClient, setWindowSize]);
  return windowSize;
};
