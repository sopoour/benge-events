import AwarenessAccordion from '@app/components/AwarenessAccordion';
import Section from '@app/components/layout/Section';
import LoadingSkeletonGeneral from '@app/components/LoadingSkeletonGeneral.tsx';
import MarkdownConfig from '@app/components/MarkdownConfig/MarkdownConfig';
import SeoHead from '@app/components/SeoHead';
import Typography from '@app/components/Typography/Typography';
import { fetcher } from '@app/hooks/fetch/useFetch';
import useLang from '@app/hooks/useLang';
import { Awareness as AwarenessType } from '@app/services/graphql/types';
import { AwarenessPage } from '@app/types';
import { FC } from 'react';
import useSWR from 'swr';

const Awareness: FC = () => {
  const lang = useLang();
  const { data, isLoading } = useSWR<AwarenessPage | null>(`/api/awareness?lang=${lang}`, fetcher);
  const sortedAwareness = data?.awarenessCollection.items.sort(
    (a: AwarenessType, b: AwarenessType) => (a?.orderNumber as number) - (b?.orderNumber as number),
  );
  if (isLoading) {
    return <LoadingSkeletonGeneral />;
  }

  return (
    <>
      <SeoHead title="Awareness | BENGE" />
      <Section id="awareness">
        <>
          <Typography as="h1" fontSize="48px">
            {data?.generalContent.awarenessHeadline}
          </Typography>
          <MarkdownConfig content={data?.generalContent.awarenessDescription as string} />
          {sortedAwareness?.map((data) => (
            <AwarenessAccordion awarenessItem={data} key={data.titel} />
          ))}
        </>
      </Section>
    </>
  );
};

export default Awareness;
