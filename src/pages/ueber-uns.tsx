import Section from '@app/components/layout/Section';
import LoadingSkeletonGeneral from '@app/components/LoadingSkeletonGeneral.tsx';
import MarkdownConfig from '@app/components/MarkdownConfig/MarkdownConfig';
import SeoHead from '@app/components/SeoHead';
import Typography from '@app/components/Typography/Typography';
import { fetcher } from '@app/hooks/fetch/useFetch';
import useLang from '@app/hooks/useLang';
import { GeneralContent } from '@app/services/graphql/types';
import { FC } from 'react';
import styled from 'styled-components';
import useSWR from 'swr';

const StyledMarkdown = styled(MarkdownConfig)`
  h2 {
    margin-bottom: 40px;
  }

  #ueber-uns-foto {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0;
  }

  #about-photo {
    display: flex;
    flex-direction: column;
    gap: 8px;

    > p {
      margin: 0;
      font-size: 12px;
    }
  }

  ${({ theme }) => theme.media('sm')`
      #ueber-uns-foto {
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        gap:40px;
        align-items: center;
        margin: 0 auto;
      }
    `}
`;

const UeberUns: FC = () => {
  const lang = useLang();
  const { data, isLoading } = useSWR<GeneralContent | null>(
    `/api/generalContent?lang=${lang}`,
    fetcher,
  );

  if (isLoading) {
    return <LoadingSkeletonGeneral />;
  }
  return (
    <>
      <SeoHead title={lang === 'en' ? 'About us | BENGE' : 'Über uns | BENGE'} />
      <Section id="about">
        <>
          <Typography as="h1" fontSize="48px">
            {data?.aboutHeadline}
          </Typography>
          <StyledMarkdown content={data?.aboutText as string} />
        </>
      </Section>
    </>
  );
};

export default UeberUns;
