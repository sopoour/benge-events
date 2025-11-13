import { FC } from 'react';
import { styled } from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 64px;
  background-color: ${({ theme }) => theme.colors.bg.soft};
  color: ${({ theme }) => theme.colors.fg.contrast};
`;

const FooterType = styled.p`
  font-size: 16px;
  text-transform: uppercase;
`;

const Footer: FC = () => {
  return (
    <FooterWrapper>
      <FooterType>Footer with - If qestions. Other SoMe etc. </FooterType>
    </FooterWrapper>
  );
};

export default Footer;
