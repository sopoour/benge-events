import { flexColumn, slowTransition } from '@app/styles/mixins';
import styled from 'styled-components';
import Typography from '../Typography/Typography';
import { text } from '@app/styles/fonts';
import Link from 'next/link';

export const OverviewContainer = styled.div`
  opacity: 1;
  width: 100%;
  height: 100%;
  ${flexColumn};
  gap: 12px;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bg.soft};
  padding: 20px 16px;
  border-radius: 10px;
  position: relative;
  z-index: 0;
  ${slowTransition};
`;

export const EventBoxContent = styled.div<{ $viewDetails?: boolean }>`
  position: relative;
  width: 100%;
  ${slowTransition};
  display: none;
  justify-content: space-between;

  ${({ theme }) => theme.media('sm')`
    width: 100%;
    ${flexColumn};
  `}
`;

export const Date = styled(Typography)`
  font-size: 32px;
  margin-top: -12px;
  text-align: center;

  ${({ theme }) => theme.media('md')`
    font-size: 44px;
  `}
`;

export const VenueBox = styled(Link)<{ $tba?: boolean }>`
  padding: 18px;
  width: ${({ $tba }) => ($tba ? '150px' : '130px')};
  height: ${({ $tba }) => ($tba ? '150px' : '130px')};
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

  > p {
    line-height: 1.25;
  }
  &:hover {
    opacity: 1;
    cursor: pointer;
    box-shadow:
      inset 0 0 25px rgba(255, 255, 255, 0.5),
      0 0 60px rgba(255, 255, 255, 0.4);
  }

  &:focus {
    outline: 3px solid ${({ theme }) => theme.colors.accent.pink};
    border-radius: 50% !important;
  }

  ${({ theme, $tba }) => theme.media('sm')`
    width: ${$tba ? '200px' : '175px'};
    height:  ${$tba ? '200px' : '175px'};
  `}
`;

export const EventCol = styled(Link)`
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.bg.default};
  ${flexColumn};
  align-items: center;
  min-height: 0;
  transition: all 0.2s ease;
  &:hover {
    opacity: 1;
    cursor: pointer;
    box-shadow:
      inset 0 0 25px rgba(255, 255, 255, 0.5),
      0 0 60px rgba(255, 255, 255, 0.4);
  }

  ${({ theme }) => theme.media('md')`
    min-height: 100px;
  `}

  &:focus {
    outline: 3px solid ${({ theme }) => theme.colors.accent.pink};
  }
`;

export const ColTitle = styled(Typography)`
  padding: 8px;
  width: 100%;
  text-align: center;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.bg.default};
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  ${({ theme }) => theme.media('md')`
    font-size: 18px;
  `}
`;

export const ColTime = styled(Typography)`
  padding: 4px 8px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  background-color: ${({ theme }) => theme.colors.bg.soft};
  ${({ theme }) => theme.media('md')`
    font-size: 16px;
  `}
`;

export const EventTitle = styled(Typography)`
  padding: 8px 8px;
  text-align: center;
  font-family: ${text.style.fontFamily} !important;
  font-weight: 500;
`;

export const EventTable = styled.div<{ gridnumber?: number }>`
  display: grid;
  width: 100%;
  grid-template-columns: ${({ gridnumber }) => `repeat(${gridnumber || 3}, 1fr)`};
  gap: 8px;
`;
