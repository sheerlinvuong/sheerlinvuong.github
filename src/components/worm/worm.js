import React from 'react';
import { animated } from 'react-spring';
import styled from 'styled-components';
import { theme } from '../theme';
import PropTypes from 'prop-types';
import { mousePosition } from './wormHooks';

const isMobile = () => {
  const ua = navigator.userAgent;
  return /Android|Mobi/i.test(ua);
};

export const WormyWorm = ({ isActive }) => {
  if (typeof navigator !== 'undefined' && isMobile()) return null;
  const { position, trail, hidden } = mousePosition(isActive);
  const trans = (x, y) =>
    `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

  return (
    <MrWorm isHidden={hidden}>
      {trail.map((props, i) => (
        <animated.div
          key={i}
          style={{
            transform: props.position?.interpolate(trans),
            background: Object.values(theme.worm)[Math.floor((i / 20) * 6)],
            zIndex: -i
          }}
        />
      ))}
      <WormHead transform={trans(position[0], position[1])}>
        <WormFace />
      </WormHead>
    </MrWorm>
  );
};

const MrWorm = styled.div`
  pointer-events: none;
  transition: all 500ms ease;
  transition-property: opacity;
  opacity: ${(props) => (props.isHidden ? 0 : 0.95)};
  z-index: 100;
  & > div {
    height: 60px;
    width: 60px;
    position: fixed;
    border-radius: 50%;
  }
`;
const WormHead = styled.div.attrs((props) => ({
  style: { transform: props.transform }
}))`
  background: ${theme.worm.brilliantRose};
`;

const WormFace = (props) => {
  return (
    <svg
      width={60}
      height={60}
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

WormyWorm.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number),
  isActive: PropTypes.bool
};
