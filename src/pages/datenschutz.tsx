import Section from '@app/components/layout/Section';
import LoadingSkeletonGeneral from '@app/components/LoadingSkeletonGeneral.tsx';
import MarkdownConfig from '@app/components/MarkdownConfig/MarkdownConfig';
import { fetcher } from '@app/hooks/fetch/useFetch';
import { LegalPages } from '@app/services/graphql/types';
import { FC } from 'react';
import useSWR from 'swr';

const UeberUns: FC = () => {
  const { data, isLoading } = useSWR<LegalPages | null>('/api/legalPages', fetcher);

  if (isLoading) {
    return <LoadingSkeletonGeneral />;
  }

  return (
    <Section id="datenschutz">
      <MarkdownConfig content={data?.datenschutz as string} />
    </Section>
  );
};

export default UeberUns;
