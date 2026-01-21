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
    return <LoadingSkeletonGeneral />;
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
