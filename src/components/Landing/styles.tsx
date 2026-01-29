import { flexColumn, flexRow } from '@app/styles/mixins';
import Link from 'next/link';
import styled from 'styled-components';
import { header } from '@app/styles/fonts';
import EventBox from '../EventBox';
import LangToggle from '../LangToggle';
import LinkContainer from '../LinkContainer';

export const Content = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 32px 20px;
  ${flexColumn};
  z-index: 2;
  gap: 8px;

  p {
    font-family: ${header.style.fontFamily};
  }

  ${({ theme }) => theme.media('sm')`
   height: 100vh;
  `}
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
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.15);
    opacity: 1;
    cursor: pointer;
    box-shadow:
      inset 0 0 25px rgba(255, 255, 255, 0.5),
      0 0 60px rgba(255, 255, 255, 0.4);
  }

  &:focus {
    outline: 3px solid ${({ theme }) => theme.colors.fg.contrast};
    outline-offset: 4px;
    border-radius: 50% !important;
  }
  &:focus:not(:focus-visible) {
    outline: 0;
    border-radius: 0;
  }
`;

export const BubbleWrapper = styled.div`
  ${flexRow};
  gap: 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  ${Bubble} {
    position: static;
  }
`;

export const EventBoxLanding = styled(EventBox)`
  display: flex !important;
  ${({ theme }) => theme.media('sm')`
   margin-top: 40px;
   width: 450px !important;
  
  `}
`;

export const LangToggleLanding = styled(LangToggle)`
  position: absolute;
  right: 2%;
  top: 2%;
  opacity: 0;
`;

export const LinkContainerLanding = styled(LinkContainer)`
  position: absolute;
  left: 2%;
  top: 2%;
  opacity: 0;
`;
