import { fastTransition, flexColumn, slowTransition } from '@app/styles/mixins';
import styled, { css } from 'styled-components';
import Typography from '../Typography/Typography';
import { header, text } from '@app/styles/fonts';
import Link from 'next/link';
import MarkdownConfig from '../MarkdownConfig/MarkdownConfig';

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

export const DetailsContainer = styled.div`
  padding: 32px;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 10px;
  ${slowTransition};
  background-color: ${({ theme }) => theme.colors.bg.default};
  ${flexColumn};
  gap: 0;
  justify-content: space-between;
`;

export const Details = styled.div`
  ${flexColumn};
  gap: 0;
`;

export const MarkDownEvent = styled(MarkdownConfig)`
  && {
    p {
      font-size: 16px;
    }
  }
`;

const viewedStyle = css`
  transform: rotateY(180deg);

  ${OverviewContainer} {
    opacity: 0;
    transform: rotateY(180deg);
    z-index: -1;
  }

  ${DetailsContainer} {
    opacity: 1;
    transform: rotateY(180deg);
    z-index: 0;
  }
`;

export const EventBoxContent = styled.div<{ $viewDetails?: boolean }>`
  position: relative;
  width: 100%;
  ${slowTransition};
  display: none;
  justify-content: space-between;
  ${({ $viewDetails }) => $viewDetails && viewedStyle};

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

export const VenueBox = styled.span<{ $tba?: boolean }>`
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

  ${({ theme, $tba }) => theme.media('sm')`
    width: ${$tba ? '200px' : '175px'};
    height:  ${$tba ? '200px' : '175px'};
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

export const EventTable = styled.div<{ gridNumber?: number }>`
  display: grid;
  width: 100%;
  grid-template-columns: ${({ gridNumber }) => `repeat(${gridNumber || 3}, 1fr)`};
  gap: 8px;
`;
