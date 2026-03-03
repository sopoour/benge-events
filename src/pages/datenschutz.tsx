import Section from '@app/components/layout/Section';
import LoadingSkeletonGeneral from '@app/components/LoadingSkeletonGeneral.tsx';
import MarkdownConfig from '@app/components/MarkdownConfig/MarkdownConfig';
import SeoHead from '@app/components/SeoHead';
import { fetcher } from '@app/hooks/fetch/useFetch';
import useLang from '@app/hooks/useLang';
import { LegalPages } from '@app/services/graphql/types';
import { FC } from 'react';
import styled from 'styled-components';
import useSWR from 'swr';

const MarkdownConfigAdjust = styled(MarkdownConfig)`
  && {
    h1 {
      font-size: 32px;
    }
    h2 {
      font-size: 18px;
    }

    ${({ theme }) => theme.media('sm')`
     
      h2 {
        font-size: 20px;
      }
      h1 {
        font-size: 36px;
      }
    `}
  }
`;

const Datenschutz: FC = () => {
  const lang = useLang();
  const { data, isLoading } = useSWR<LegalPages | null>(`/api/legalPages?lang=${lang}`, fetcher);

  if (isLoading) {
    return <LoadingSkeletonGeneral />;
  }

  return (
    <>
      <SeoHead />
      <Section id="datenschutz">
        <MarkdownConfigAdjust content={data?.datenschutz as string} />
      </Section>
    </>
  );
};

export default Datenschutz;
