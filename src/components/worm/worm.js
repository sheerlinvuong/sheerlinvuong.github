import styled from "styled-components";
import { useEffect, useState } from 'react'

export const mousePosition = () => {
    const [position, setPosition] = useState({ x: 100, y: 100 })
    useEffect(() => {
        document.addEventListener("mousemove", (e) => {
            console.log(e.clientX)
            setPosition({ x: e.clientX, y: e.clientY })
        });
    }, []);
    return position
}

export const Cursor = styled.div.attrs({
    style: props => ({
        top: `${props.position.y}px`,
        left: `${props.position.x}px`
    })
}) `
  width: 10px;
  height: 10px;
  background: #000;
  position: fixed;
  z-index: 9999;
  /* will-change: transform; */
  `
