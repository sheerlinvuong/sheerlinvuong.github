import { useEffect, useState } from 'react';
import { useTrail } from 'react-spring';

export const mousePosition = (isActive) => {
  const [position, setPosition] = useState([0, 0]);
  const [hidden, setHidden] = useState(!isActive);
  const [trail, setTrail] = useTrail(20, () => ({
    position,
    config: { tension: 2000, friction: 65 }
  }));

  useEffect(() => {
    const setStates = (e) => {
      if (!!isActive) {
        const xy = [e.clientX, e.clientY];
        setPosition(xy);
        setTrail({ position: xy });
      }
    };

    const show = () => {
      if (!!isActive) {
        setHidden(false);
      }
    };

    const hide = () => {
      if (!!isActive) {
        setHidden(true);
      }
    };

    window.addEventListener('mousemove', setStates);
    document.addEventListener('mouseenter', show);
    document.addEventListener('mouseleave', hide);
    document.querySelectorAll('a, form').forEach((el) => {
      el.addEventListener('mouseover', hide);
      el.addEventListener('mouseout', show);
    });

    return () => {
      setHidden(true);
      window.removeEventListener('mousemove', setStates);
      document.removeEventListener('mouseenter', show);
      document.removeEventListener('mouseleave', hide);
      document.querySelectorAll('a, form').forEach((el) => {
        el.removeEventListener('mouseover', hide);
        el.removeEventListener('mouseout', show);
      });
    };
  }, [isActive]);

  return {
    position,
    trail,
    hidden
  };
};
