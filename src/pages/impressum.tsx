import Section from '@app/components/layout/Section';
import LoadingSkeletonGeneral from '@app/components/LoadingSkeletonGeneral.tsx';
import MarkdownConfig from '@app/components/MarkdownConfig/MarkdownConfig';
import { fetcher } from '@app/hooks/fetch/useFetch';
import { LegalPages } from '@app/services/graphql/types';
import { FC } from 'react';
import styled from 'styled-components';
import useSWR from 'swr';

const MarkdownConfigAdjust = styled(MarkdownConfig)`
  h2 {
    font-size: 18px;
  }

  ${({ theme }) => theme.media('sm')`
     
      h2 {
        font-size: 20px;
      }
    `}
`;

const Impressum: FC = () => {
  const { data, isLoading } = useSWR<LegalPages | null>('/api/legalPages', fetcher);

  if (isLoading) {
    return <LoadingSkeletonGeneral />;
  }

  return (
    <Section id="impressum">
      <MarkdownConfigAdjust content={data?.impressum as string} />
    </Section>
  );
};

export default Impressum;
