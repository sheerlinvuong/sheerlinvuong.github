import React, { useEffect, useState } from 'react';
import { useTrail, animated } from 'react-spring';
import styled from 'styled-components';
import { theme } from '../theme';

export const mousePosition = () => {
  const [position, setPosition] = useState([100, 100]);
  const [trail, setTrail] = useTrail(5, () => ({
    position,
    config: { tension: 1000, friction: 65 }
  }));
  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      const xy = [e.clientX, e.clientY];
      setPosition(xy);
      setTrail({ position: xy });
    });
  }, []);

  return {
    position,
    trail
  };
};
export const WormyWorm = () => {
  const { position, trail } = mousePosition();
  const trans = (x, y) =>
    `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

  return (
    <MrWorm>
      <WormHead transform={trans(position[0], position[1])}>
        <WormFace />
      </WormHead>
      {trail.map((props, i) => (
        <animated.div
          key={i}
          style={{
            transform: props.position.interpolate(trans),
            background: Object.values(theme.worm)[i],
            zIndex: -i
          }}
        />
      ))}
    </MrWorm>
  );
};

const MrWorm = styled.div`
  cursor: none;
  opacity: 0.9;
  & > div {
    height: 100px;
    width: 100px;
    position: fixed;
    border-radius: 50%;
  }
`;

const WormHead = styled.div.attrs({
  style: (props) => ({
    transform: `${props.transform}`
  })
})`
  background: ${theme.worm.brilliantRose};
  z-index: 1;
`;

const WormFace = (props) => {
  return (
    <svg
      width={100}
      height={100}
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M50 82c2 4.9 5.94 7 15 7 7.927 0 15-1.87 15-7"
        stroke="#BA2B63"
        strokeWidth={8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={42} cy={66} r={8} fill="#0E9B9B" />
      <path d="M94 66a8 8 0 11-16 0 8 8 0 0116 0z" fill="#0E9B9B" />
      <path
        d="M102 81a8 8 0 11-16 0 8 8 0 0116 0zM42 81a8 8 0 11-16 0 8 8 0 0116 0z"
        fill="#F0FF3E"
      />
    </svg>
  );
};
