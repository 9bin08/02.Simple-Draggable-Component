import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

function Draggable({ children }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [movePosition, setMovePosition] = useState({ x: 0, y: 0 });
  const [isDraging, setIsDraging] = useState(false);
  const myRef = useRef();

  useEffect(() => {
    if (isDraging) {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    }
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, [isDraging]);

  const onMouseDown = (e) => {
    let currentPosition = {
      left: myRef.current.offsetLeft,
      top: myRef.current.offsetTop,
    };

    setMovePosition({
      x: e.pageX - currentPosition.left,
      y: e.pageY - currentPosition.top,
    });
    setIsDraging(true);
    e.stopPropagation();
    e.preventDefault();
  };

  const onMouseUp = (e) => {
    setIsDraging(false);
    e.stopPropagation();
    e.preventDefault();
  };

  const onMouseMove = (e) => {
    if (!isDraging) return;
    e.stopPropagation();
    e.preventDefault();
    setPosition({
      x: e.pageX - movePosition.x,
      y: e.pageY - movePosition.y,
    });
  };

  return (
    <Container>
      <BoxArea
        ref={myRef}
        onMouseDown={onMouseDown}
        x={position.x}
        y={position.y}
      >
        {children}
      </BoxArea>
    </Container>
  );
}

export default Draggable;

const Container = styled.div`
  position: relative;
  width: 50vw;
  height: 50vh;
  margin: 30vh auto;
  background-color: #ddd;
  overflow: hidden;
`;
const BoxArea = styled.span`
  position: absolute;
  left: ${({ x }) => `${x}px`};
  top: ${({ y }) => `${y}px`};
`;
