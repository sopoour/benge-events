import LoadingSkeleton from '@app/components/EventAccordion/LoadingSkeleton';
import Section from '@app/components/layout/Section';
import LexikonAccordion from '@app/components/LexikonAccordion';
import LoadingSkeletonGeneral from '@app/components/LoadingSkeletonGeneral.tsx';
import MarkdownConfig from '@app/components/MarkdownConfig/MarkdownConfig';
import Typography from '@app/components/Typography/Typography';
import { fetcher } from '@app/hooks/fetch/useFetch';
import useLang from '@app/hooks/useLang';
import { Lexikon as LexikonData } from '@app/services/graphql/types';
import { LexikonPage } from '@app/types';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import useSWR from 'swr';

export type GroupedLexikonData = {
  kategorie: string;
  elements: LexikonData[];
};

const Lexikon: FC = () => {
  const lang = useLang();

  const { data, isLoading } = useSWR<LexikonPage | null>(`/api/lexikon?lang=${lang}`, fetcher);

  const groupedData: GroupedLexikonData[] = data?.lexikonCollection.items.reduce(
    (acc: any, { kategorie, titel, beschreibung }) => {
      let group: any = acc.find((item: LexikonData) => item.kategorie === kategorie);

      if (!group) {
        group = { kategorie, elements: [] };
        acc.push(group);
      }

      group.elements.push({ titel, beschreibung });

      return acc;
    },
    [],
  );

  if (isLoading) {
    return (
      <Section>
        <>
          <Skeleton height={40} width={300} style={{ margin: '28px 0' }} />
          <span style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Skeleton height={20} width="80%" />
            <Skeleton height={20} width="100%" />
          </span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
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
        {groupedData
          ?.sort((a, b) => a.kategorie.localeCompare(b.kategorie))
          .map((data) => <LexikonAccordion lexikonGrouped={data} key={data.kategorie} />)}
      </>
    </Section>
  );
};

export default Lexikon;
