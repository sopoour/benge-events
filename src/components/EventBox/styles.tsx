import { flexColumn } from '@app/styles/mixins';
import styled from 'styled-components';
import Typography from '../Typography/Typography';

export const EventBoxContent = styled.div`
  ${flexColumn};
  gap: 12px;
  background-color: ${({ theme }) => theme.colors.bg.soft};
  padding: 16px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;

  ${({ theme }) => theme.media('sm')`
    width: 400px;
    margin-top: 40px;
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
