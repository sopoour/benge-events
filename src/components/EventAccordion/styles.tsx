import styled from 'styled-components';
import Accordion from '../Accordion/Accordion';
import { flexColumn, flexRow, slowTransition } from '@app/styles/mixins';
import Button from '../Button';
import Link from 'next/link';

export const MobileAccordion = styled(Accordion)`
  display: block;

  ${({ theme }) => theme.media('sm')`
    display: none;
  `}
`;

export const Header = styled.div<{ $hasDetailsHeader?: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  width: 100%;

  ${({ theme, $hasDetailsHeader }) => theme.media('sm')`
    grid-template-columns: ${$hasDetailsHeader ? '1fr 1fr 1fr' : '1fr 1fr'} ;
    `}
`;

export const DetailsContainer = styled.div`
  padding: 12px 0;
  width: 100%;
  height: 100%;
  ${slowTransition};
  ${flexColumn};
  gap: 12px;
  justify-content: space-between;
`;

export const Details = styled.div`
  ${flexColumn};
  gap: 12px;
`;

export const ButtonContainer = styled.div`
  ${flexColumn};
  justify-content: space-between;
  gap: 12px;

  ${({ theme }) => theme.media('xs')`
    display: none;
    ${flexRow};
  `}
`;

export const ReadMoreButton = styled(Button)`
  width: initial;
  background-color: ${({ theme }) => theme.colors.bg.default};
  color: white;
  ${({ theme }) => theme.media('xs')`
    width: 100%;
  `}
`;

export const TicketButton = styled(Button)`
  width: initial;

  ${({ theme }) => theme.media('xs')`
    width: 100%;
  `}
`;

export const StyledLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;
