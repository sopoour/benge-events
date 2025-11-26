import { montserrat } from '@app/styles/fonts';
import { fastTransition, flexColumn, flexRow } from '@app/styles/mixins';
import Link from 'next/link';
import { FC } from 'react';
import { styled } from 'styled-components';

const items = ['Über uns', 'Bewerbung', 'Events', 'Awareness', 'Lexikon', 'Feedback'];

const NavigationWrapper = styled.nav`
  ${flexColumn};
  gap: 28px;

  ${({ theme }) => theme.media('sm')`
    ${flexRow}
     gap: 12px;
  `}
`;

const NavigationItem = styled(Link)`
  font-size: 14px;
  font-family: ${montserrat.style.fontFamily};
  ${fastTransition}
  font-weight: 600;
  color: ${({ theme }) => theme.colors.fg.default};

  &:not(.active) {
    cursor: pointer;
  }

  &:hover,
  &.active {
    color: ${({ theme }) => theme.colors.accent.pink};
    transform: scale(1.05);
  }

  ${({ theme }) => theme.media('sm')`
    font-size: 14px;
    
  `}

  ${({ theme }) => theme.media('md')`
    font-size: 16px;
    
  `}
`;

type Props = {
  className?: string;
  onClick?: () => void;
};

const Navigation: FC<Props> = ({ className, onClick }) => (
  <NavigationWrapper className={className}>
    {items.map((item, index) => {
      const navItemName = item.toLowerCase().replace(/\s+/g, '-');
      return (
        <NavigationItem
          key={item + index}
          href={`/${navItemName === 'über-uns' ? 'ueber-uns' : navItemName}`}
          onClick={onClick}
        >
          {item}
        </NavigationItem>
      );
    })}
  </NavigationWrapper>
);

export default Navigation;
