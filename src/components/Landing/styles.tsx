import { flexColumn, flexRow } from '@app/styles/mixins';
import Link from 'next/link';
import styled from 'styled-components';
import Typography from '../Typography/Typography';

export const Content = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  gap: 40px;
  align-items: center;
  justify-content: center;
  padding: 32px 20px;
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

export const BubbleWrapper = styled.div`
  position: relative;
  width: 100%;
  /* min-height: 150px; */
`;

export const EventBox = styled.div`
  ${flexColumn};
  gap: 12px;
  background-color: ${({ theme }) => theme.colors.bg.soft};
  padding: 16px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 40px;

  ${({ theme }) => theme.media('sm')`
    width: 400px;
  `}
`;

export const Date = styled(Typography)`
  font-size: 28px;
  margin-top: -12px;
  text-align: center;

  ${({ theme }) => theme.media('sm')`
    font-size: 36px;
  `}
`;

export const VenueBox = styled.span`
  padding: 18px;
  width: 170px;
  height: 170px;
  border-radius: 100px;
  ${flexColumn};
  justify-content: center;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.bg.default};
  transition: all 0.2s ease;
  box-shadow:
    inset 0 0 20px rgba(255, 255, 255, 0.4),
    inset 0 0 50px rgba(255, 255, 255, 0.1),
    0 0 40px rgba(255, 255, 255, 0.2);

  &:hover {
    opacity: 1;
    cursor: pointer;
    box-shadow:
      inset 0 0 25px rgba(255, 255, 255, 0.5),
      0 0 60px rgba(255, 255, 255, 0.4);
  }

  ${({ theme }) => theme.media('sm')`
    width: 200px;
    height: 200px;
  `}
`;

export const EventCol = styled.span`
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.bg.default};
  ${flexColumn};
  align-items: center;
  min-height: 100px;
  gap: 8px;
  transition: all 0.2s ease;
  &:hover {
    opacity: 1;
    cursor: pointer;
    box-shadow:
      inset 0 0 25px rgba(255, 255, 255, 0.5),
      0 0 60px rgba(255, 255, 255, 0.4);
  }
`;

export const EventTitle = styled(Typography)`
  padding: 8px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  background-color: ${({ theme }) => theme.colors.bg.default};

  ${({ theme }) => theme.media('sm')`
    font-size: 16px;
  `}
`;

export const EventTable = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`;
