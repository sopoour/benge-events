import { slowTransition } from '@app/styles/mixins';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import styled from 'styled-components';

export const AccordionContainer = styled.details<{ $open?: boolean }>`
  margin: 0;
  border-radius: 8px;
  text-align: start;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.bg.default};

  ${slowTransition}
  ${(props) =>
    !props.$open &&
    `
  :hover {
    cursor: pointer;
  }
`}
`;

export const HeaderContainer = styled.summary`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  background-color: ${({ theme }) => theme.colors.bg.soft};
  align-items: center;
  padding: 12px 16px;
  gap: 12px;

  :hover {
    cursor: pointer;
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.fg.contrast} !important;
    outline-offset: 4px;
    border-radius: 8px;
  }
`;

export const HorizontalRuler = styled.hr`
  margin: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.bg.default};
  height: 0;
`;

export const BodyContainer = styled.div<{ $hasAnimation: boolean }>`
  animation: ${(props) => (props.$hasAnimation ? 'spring 0.4s ease' : 'none')};
  padding: 0 16px;
  background-color: rgba(109, 92, 219, 0.3);
  @keyframes spring {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const SmallChevron = styled(FaChevronDown)<{ $isOpen?: boolean }>`
  && {
    transform: ${(props) => (props.$isOpen ? 'rotate(-180deg)' : 'rotate(0deg)')};
    transition: all 0.4s ease;
    > path {
      fill: white;
    }
  }
`;

export const LargeChevron = styled(FaChevronRight)<{ $isOpen?: boolean }>`
  && {
    transform: ${(props) => (props.$isOpen ? 'rotate(-90deg)' : 'rotate(90deg)')};
    transition: all 0.4s ease;
    > path {
      fill: white;
    }
  }
`;
