import useLang from '@app/hooks/useLang';
import { header } from '@app/styles/fonts';
import { fastTransition, flexColumn, flexRow } from '@app/styles/mixins';
import Link from 'next/link';
import { FC, useMemo } from 'react';
import { styled } from 'styled-components';

export const navItems = [
  { name: 'Über uns', nameEn: 'About', href: '/ueber-uns' },
  { name: 'Bewerbung', nameEn: 'Application', href: '/bewerbung' },
  { name: 'Events', nameEn: 'Events', href: '/events' },
  { name: 'Awareness', nameEn: 'Awareness', href: '/awareness' },
  { name: 'Lexikon', nameEn: 'Dictionary', href: '/lexikon' },
  { name: 'Feedback', nameEn: 'Feedback', href: '/feedback' },
];

const NavigationWrapper = styled.nav`
  ${flexColumn};
  gap: 28px;

  ${({ theme }) => theme.media('md')`
     margin-left: 90px;
  `}
  ${({ theme }) => theme.media('sm')`
    ${flexRow}
     gap: 16px;
      margin-left: 40px;
  `}
`;

const NavigationItem = styled(Link)`
  font-family: ${header.style.fontFamily};
  ${fastTransition};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.fg.default};

  &:not(.active) {
    cursor: pointer;
  }

  &:hover,
  &.active {
    color: ${({ theme }) => theme.colors.fg.inactive};
    transform: scale(1.05);
  }

  ${({ theme }) => theme.media('sm')`
    font-size: 18px;
    
  `}
`;

type Props = {
  className?: string;
  onClick?: () => void;
};

const Navigation: FC<Props> = ({ className, onClick }) => {
  const lang = useLang();
  return (
    <NavigationWrapper className={className}>
      {navItems.map((item, index) => {
        const navItemName = item.name.toLowerCase().replace(/\s+/g, '-');
        return (
          <NavigationItem
            key={item.name + index}
            href={`/${navItemName === 'über-uns' ? 'ueber-uns' : navItemName}${lang === 'en' ? '?lang=en' : ''}`}
            onClick={onClick}
          >
            {lang === 'en' ? item.nameEn : item.name}
          </NavigationItem>
        );
      })}
    </NavigationWrapper>
  );
};

export default Navigation;
