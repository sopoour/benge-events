import { fastTransition, flexColumn } from '@app/styles/mixins';
import styled from 'styled-components';
import Typography from '../Typography/Typography';
import { text } from '@app/styles/fonts';
import Link from 'next/link';

export const EventBoxContent = styled.div`
  ${flexColumn};
  gap: 12px;
  background-color: ${({ theme }) => theme.colors.bg.soft};
  padding: 16px;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  ${({ theme }) => theme.media('sm')`
    width: 100%;
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

export const VenueBox = styled.span<{ $tba?: boolean }>`
  padding: 18px;
  width: ${({ $tba }) => ($tba ? '170px' : '120px')};
  height: ${({ $tba }) => ($tba ? '170px' : '120px')};
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

  ${({ theme, $tba }) => theme.media('sm')`
    width: ${$tba ? '200px' : '170px'};
    height:  ${$tba ? '200px' : '170px'};
  `}
`;

export const EventCol = styled.span`
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
`;

export const ColTitle = styled(Typography)`
  padding: 8px;
  width: 100%;
  text-align: center;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.bg.default};

  ${({ theme }) => theme.media('md')`
    font-size: 18px;
  `}
`;

export const EventTitle = styled(Typography)`
  padding: 8px 8px;
  text-align: center;
  font-family: ${text.style.fontFamily} !important;
  font-weight: 500;
  ${({ theme }) => theme.media('md')`
    padding: 24px 8px;
  `};
`;

export const EventTable = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`;

export const EventButton = styled(Link)`
  width: 80%;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.bg.default};
  padding: 8px 16px;
  text-align: center;
  background-color: white;
  color: ${({ theme }) => theme.colors.fg.contrast};
  font-weight: 700;
  ${fastTransition};

  &:hover {
    background-color: ${({ theme }) => theme.colors.bg.default};
    color: ${({ theme }) => theme.colors.fg.default};
  }
`;
