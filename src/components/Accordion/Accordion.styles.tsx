import { slowTransition } from '@app/styles/mixins';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import styled from 'styled-components';

export const AccordionContainer = styled.div<{ $open?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  border-radius: 8px;

  border: 1px solid ${({ theme }) => theme.colors.bg.default};
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  ${slowTransition}
  ${(props) =>
    !props.$open &&
    `
  :hover {
    cursor: pointer;
  }
`}
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  background-color: ${({ theme }) => theme.colors.bg.soft};
  align-items: center;
  padding: 12px 16px;
  width: 100%;
  gap: 8px;

  :hover {
    cursor: pointer;
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
  }
`;

export const LargeChevron = styled(FaChevronRight)<{ $isOpen?: boolean }>`
  && {
    transform: ${(props) => (props.$isOpen ? 'rotate(-90deg)' : 'rotate(90deg)')};
    transition: all 0.4s ease;
  }
`;
