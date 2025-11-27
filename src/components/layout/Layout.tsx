import React, { FC, ReactNode } from 'react';
import Logo from '@app/assets/logo.png';
import Image from 'next/image';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import Sidebar from '../Sidebar';
import { flexColumn } from '@app/styles/mixins';
import Navigation from './Navigation';
import LinkContainer from '../LinkContainer';
import useSidebar from '@app/hooks/useSidebar';
import { useRouter } from 'next/router';

const Root = styled.div`
  position: relative;
  min-height: 100vh;
  ${flexColumn};
  width: 100%;
  background: url('leo_pattern.png');
  background-repeat: repeat;
  background-size: 500px 500px;
  background-position: top left;
  z-index: 1;

  &::before {
    content: '';
    height: 100%;
    position: absolute;
    min-height: 100vh;
    width: 100%;
    background: linear-gradient(135deg, #6d5cdb, #fa56a8);
    opacity: 0.8;
  }
`;

const MainLayout = styled.main`
  min-height: 100vh;
  width: 100%;
  flex: 1;
  z-index: 2;
`;

const LinkContainerMobile = styled(LinkContainer)`
  && {
    padding-top: 32px;
  }
`;

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  const { close } = useSidebar((state) => state);
  const router = useRouter();
  return (
    <Root>
      <Sidebar>
        <Image
          src={Logo.src}
          alt="Benge Logo"
          style={{ cursor: 'pointer', marginLeft: '-10px' }}
          width={Logo.width / 5}
          height={Logo.height / 5}
          onClick={() => {
            router.pathname !== '/' && router.replace('/');
          }}
        />
        <Navigation onClick={close} />
        {/* <LinkContainerMobile /> */}
      </Sidebar>
      <Header />
      <MainLayout>{children}</MainLayout>
      <Footer />
    </Root>
  );
};

export default Layout;
