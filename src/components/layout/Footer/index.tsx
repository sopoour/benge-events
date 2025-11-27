import Typography from '@app/components/Typography/Typography';
import { flexColumn, flexRow } from '@app/styles/mixins';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { css, styled } from 'styled-components';

const FooterWrapper = styled.footer<{ $isHomePage: boolean }>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  max-height: 64px;
  padding: 12px 0;
  gap: 32px;
  background-color: ${({ theme }) => theme.colors.bg.soft};
  z-index: 2;
  color: ${({ theme }) => theme.colors.fg.contrast};

  ${({ $isHomePage }) =>
    $isHomePage &&
    css`
      position: absolute;
      bottom: 0;
    `}
`;

const FooterContent = styled.div`
  ${flexColumn};
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.media('sm')`
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

const FooterRowTop = styled.div`
  ${flexRow};
  gap: 4px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  ${Anchor} {
    font-size: 12px;
  }

  ${({ theme }) => theme.media('sm')`
    gap: 16px;

    ${Anchor} {
      font-size: 14px;
    }
  `}
`;

const FooterRowBottom = styled.div`
  ${flexColumn}
  align-items: center;
  ${({ theme }) => theme.media('sm')`
     ${flexRow};
    gap: 8px;
  `}
`;

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  const isHomepage = router.pathname === '/';
  return (
    <FooterWrapper $isHomePage={isHomepage}>
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
