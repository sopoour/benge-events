import Typography from '@app/components/Typography/Typography';
import { flexColumn, flexRow } from '@app/styles/mixins';
import Link from 'next/link';
import { FC } from 'react';
import { styled } from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  max-height: 64px;
  padding: 12px 0;
  gap: 32px;
  background-color: rgba(109, 92, 219, 0.5);

  color: ${({ theme }) => theme.colors.fg.contrast};
`;

const FooterContent = styled.div`
  ${flexColumn};
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.media('sm')`
    gap: 8px;
  `}
`;

const FooterRowTop = styled.div`
  ${flexRow};
  gap: 16px;
  align-items: center;
`;

const FooterRowBottom = styled.div`
  ${flexColumn}
  align-items: center;
  ${({ theme }) => theme.media('sm')`
     ${flexRow};
    gap: 8px;
  `}
`;

const Anchor = styled(Link)`
  color: white;
  font-weight: 600;

  &:hover {
    text-decoration: underline !important;
    opacity: 0.8;
  }
`;

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterRowTop>
          <Anchor href={'/ueber-uns'}>Über uns</Anchor>
          <Typography> | </Typography>
          <Anchor href={'/awareness'}>Awareness</Anchor>
          <Typography> | </Typography>
          <Anchor href={'/impressum'}>Impressum</Anchor>
          <Typography> | </Typography>
          <Anchor href={'/datenschutz'}>Datenschutz</Anchor>
        </FooterRowTop>
        <FooterRowBottom>
          <Typography fontSize="10px">© {currentYear} BENGE.</Typography>
          <Typography fontSize="10px">
            Entwickelt von{' '}
            <Anchor href="https://www.fioauer.com/" target="_blank">
              Fio Auer
            </Anchor>{' '}
          </Typography>
        </FooterRowBottom>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
