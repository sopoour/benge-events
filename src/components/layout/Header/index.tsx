import React from 'react';
import { css, styled } from 'styled-components';
import { gsap } from 'gsap';
import Logo from '@app/assets/logo.png';
import Image from 'next/image';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { flexColumn } from '@app/styles/mixins';
import useSidebar from '@app/hooks/useSidebar';
import { useRouter } from 'next/router';
import { animateScroll } from 'react-scroll';
import Navigation from '../Navigation';
import { useMedia } from '@app/hooks/useMedia';
import { Breakpoints } from '@app/styles/media';
import LinkContainer from '@app/components/LinkContainer';
import LangToggle from '@app/components/LangToggle';
import useLang from '@app/hooks/useLang';

gsap.registerPlugin(ScrollTrigger);

export const HEADER_HEIGHT = 64;

const HeaderWrapper = styled.header<{ $show: boolean }>`
  display: ${({ $show }) => ($show ? 'flex' : 'none')};
  flex-direction: row;
  position: sticky;
  top: 0;
  z-index: 5;
  min-height: ${HEADER_HEIGHT}px;
  padding: 12px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  opacity: 1;
  gap: 4px;
  transition: all 300ms ease-in-out;
  transform: none;
  backdrop-filter: ${({ theme }) => theme.filters.backdrop};

  ${({ theme }) => theme.media('sm')`
    flex-direction: column
  `}
`;

const Line = styled.span<{ $isActive: boolean }>`
  width: 18px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.fg.default};
  display: block;
  margin: 0 auto;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;

  ${({ $isActive }) =>
    $isActive &&
    css`
      &:nth-child(2) {
        opacity: 0;
      }

      &:nth-child(1) {
        -webkit-transform: translateY(6px) rotate(45deg);
        -ms-transform: translateY(6px) rotate(45deg);
        -o-transform: translateY(6px) rotate(45deg);
        transform: translateY(6px) rotate(45deg);
      }

      &:nth-child(3) {
        -webkit-transform: translateY(-4px) rotate(-45deg);
        -ms-transform: translateY(-4px) rotate(-45deg);
        -o-transform: translateY(-4px) rotate(-45deg);
        transform: translateY(-4px) rotate(-45deg);
      }
    `}
`;

const BurgerMenu = styled.button`
  padding: 8px;
  width: 35px;
  height: 35px;
  align-self: center;
  align-items: center;

  justify-content: center;
  ${flexColumn};
  display: flex;
  gap: 3px;
  z-index: 100;

  ${({ theme }) => theme.media('sm')`
    display: none
  `}
`;

const NavigationDesktop = styled(Navigation)`
  display: none;

  ${({ theme }) => theme.media('sm')`
    display: flex;
  `}
`;

const TopNavigation = styled.span`
  display: none;

  ${({ theme }) => theme.media('sm')`
  width: 100%;
    display: flex;
     justify-content: space-between;
  `}
`;

const LinkContainerDesktop = styled(LinkContainer)`
  display: none;

  ${({ theme }) => theme.media('sm')`
    display: flex;
  `}
`;

const Header: React.FC = () => {
  const { open, setOpen } = useSidebar((state) => state);
  const router = useRouter();
  const lang = useLang();
  const isHomepage = router.pathname === '/';
  const isDesktop = useMedia(Breakpoints.sm);

  return (
    <HeaderWrapper aria-label="header" id="header" $show={!isHomepage}>
      <TopNavigation>
        <span></span>
        <NavigationDesktop />
        <LangToggle />
      </TopNavigation>

      <Image
        src={Logo.src}
        alt="Benge Logo"
        style={{ cursor: 'pointer' }}
        width={isDesktop ? Logo.width / 4 : Logo.width / 5}
        height={isDesktop ? Logo.height / 4 : Logo.height / 5}
        onClick={() => {
          animateScroll.scrollTo(0, { smooth: true, duration: 800 });
          router.pathname !== '/' && router.replace(lang === 'en' ? '/?lang=en' : '/');
        }}
      />
      {/* <LinkContainerDesktop /> */}
      <BurgerMenu onClick={setOpen} id="burger-menu">
        <Line $isActive={open} />
        <Line $isActive={open} />
        <Line $isActive={open} />
        <span className="sr-only">Menu</span>
      </BurgerMenu>
    </HeaderWrapper>
  );
};

export default Header;
