import React, { FC, ReactNode } from 'react';

import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import Sidebar from '../Sidebar';
import { flexColumn } from '@app/styles/mixins';

const Root = styled.div`
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
    position: absolute;
    height: 100vh;
    width: 100%;
    background: linear-gradient(135deg, #6d5cdb, #fa56a8);
    opacity: 0.8;
  }
`;

const MainLayout = styled.main`
  position: relative;
  height: 100vh;
  width: 100%;
  ${flexColumn};
  z-index: 2;
  max-width: 1000px;
  padding: 48px;
`;

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => (
  <Root>
    <MainLayout>
      <Sidebar>Some content</Sidebar>
      <Header />
      {children}
    </MainLayout>
    <Footer />
  </Root>
);

export default Layout;
