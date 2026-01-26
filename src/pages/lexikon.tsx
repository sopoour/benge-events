import LoadingSkeleton from '@app/components/EventAccordion/LoadingSkeleton';
import Section from '@app/components/layout/Section';
import LexikonAccordion from '@app/components/LexikonAccordion';
import MarkdownConfig from '@app/components/MarkdownConfig/MarkdownConfig';
import Typography from '@app/components/Typography/Typography';
import { fetcher } from '@app/hooks/fetch/useFetch';
import useLang from '@app/hooks/useLang';
import { Lexikon as LexikonData } from '@app/services/graphql/types';
import { LexikonPage } from '@app/types';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import useSWR from 'swr';

export type GroupedLexikonData = {
  kategorie: string;
  elements: LexikonData[];
};

export type GroupedOrderedLexikonData = {
  kategorie: string;
  orderedElements: LexikonData[];
  unorderedElements: LexikonData[];
};

const Lexikon: FC = () => {
  const lang = useLang();

  const { data, isLoading } = useSWR<LexikonPage | null>(`/api/lexikon?lang=${lang}`, fetcher);

  const groupedData: GroupedOrderedLexikonData[] = data?.lexikonCollection.items.reduce(
    (acc: any, { kategorie, titel, beschreibung, orderNumber }) => {
      let group: any = acc.find((item: LexikonData) => item.kategorie === kategorie);

      if (!group) {
        group = { kategorie, orderedElements: [], unorderedElements: [] };
        acc.push(group);
      }

      const element = { titel, beschreibung, orderNumber };

      if (orderNumber !== null && orderNumber !== undefined) {
        group.orderedElements.push(element);
      } else {
        group.unorderedElements.push(element);
      }

      return acc;
    },
    [],
  );

  const result: GroupedLexikonData[] = groupedData?.map((group) => ({
    kategorie: group.kategorie,
    elements: [
      ...group.orderedElements?.sort(
        (a, b) => (a.orderNumber as number) - (b.orderNumber as number),
      ),
      ...group.unorderedElements?.sort((a, b) =>
        a.titel && b.titel ? a.titel?.localeCompare(b.titel) : 0,
      ),
    ],
  }));

  console.log(groupedData);

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
        {result?.map((data) => <LexikonAccordion lexikonGrouped={data} key={data.kategorie} />)}
      </>
    </Section>
  );
};

export default Lexikon;
