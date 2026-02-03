import LoadingSkeleton from '@app/components/EventAccordion/LoadingSkeleton';
import Section from '@app/components/layout/Section';
import LexikonAccordion from '@app/components/LexikonAccordion';
import MarkdownConfig from '@app/components/MarkdownConfig/MarkdownConfig';
import Typography from '@app/components/Typography/Typography';
import { fetcher } from '@app/hooks/fetch/useFetch';
import useLang from '@app/hooks/useLang';
import { LexikonPage } from '@app/types';
import lexikonGrouping from '@app/utils/lexikonGrouping';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import useSWR from 'swr';

const Lexikon: FC = () => {
  const lang = useLang();

  const { data, isLoading } = useSWR<LexikonPage | null>(`/api/lexikon?lang=${lang}`, fetcher);

  const sortedResult = lexikonGrouping(lang, data);

  if (isLoading) {
    return (
      <Section>
        <>
          <Skeleton height={40} width={300} style={{ margin: '28px 0' }} />
          <span style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Skeleton height={20} width="80%" />
            <Skeleton height={20} width="100%" />
            <Skeleton height={20} width="95%" />
            <Skeleton height={20} width="80%" />
            <Skeleton height={20} width="95%" />
          </span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <LoadingSkeleton hasSubTitle={false} />
            <LoadingSkeleton hasSubTitle={false} />
            <LoadingSkeleton hasSubTitle={false} />
            <LoadingSkeleton hasSubTitle={false} />
            <LoadingSkeleton hasSubTitle={false} />
          </span>
        </>
      </Section>
    );
  }

  return (
    <Section id="lexikon">
      <>
        <Typography as="h1" fontSize="48px">
          {data?.generalContent.lexikonHeadline}
        </Typography>
        <MarkdownConfig content={data?.generalContent.lexikonDescription as string} />
        {sortedResult?.map((data) => (
          <LexikonAccordion lexikonGrouped={data} key={data.kategorie} />
        ))}
      </>
    </Section>
  );
};

export default Lexikon;
