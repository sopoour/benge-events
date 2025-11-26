import { flexColumn, flexRow } from '@app/styles/mixins';
import Link from 'next/link';
import styled from 'styled-components';

export const Content = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  margin: auto;
  align-items: center;
  justify-content: center;
  ${flexColumn};
  z-index: 2;
`;

export const Bubble = styled(Link)`
  position: absolute;
  opacity: 0;
  ${flexRow};
  justify-content: center;
  scale: 0.5;
  border-radius: 50%;
  mix-blend-mode: lighten;
  background: linear-gradient(
    120deg,
    rgba(230, 122, 122, 0.3),
    rgba(255, 200, 255, 0.2),
    rgba(150, 200, 255, 0.3)
  );
  background-size: 400% 400%;
  background-blend-mode: screen;
  backdrop-filter: blur(50px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow:
    inset 0 0 20px rgba(255, 255, 255, 0.4),
    inset 0 0 50px rgba(255, 255, 255, 0.1),
    0 0 40px rgba(255, 255, 255, 0.2);
  background-size: 200% 200%;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.15);
    opacity: 1;
    cursor: pointer;
    box-shadow:
      inset 0 0 25px rgba(255, 255, 255, 0.5),
      0 0 60px rgba(255, 255, 255, 0.4);
  }
`;
