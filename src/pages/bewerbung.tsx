import Section from '@app/components/layout/Section';
import LoadingSkeletonGeneral from '@app/components/LoadingSkeletonGeneral.tsx';
import MarkdownConfig from '@app/components/MarkdownConfig/MarkdownConfig';
import SeoHead from '@app/components/SeoHead';
import Typography from '@app/components/Typography/Typography';
import { fetcher } from '@app/hooks/fetch/useFetch';
import useLang from '@app/hooks/useLang';
import { GeneralContent } from '@app/services/graphql/types';
import { FC } from 'react';
import useSWR from 'swr';

const Bewerbung: FC = () => {
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
      <SeoHead title={lang === 'en' ? 'Application | BENGE' : 'Bewerbung | BENGE'} />
      <Section id="bewerbung">
        <>
          <Typography as="h1" fontSize="48px">
            {data?.bewerbungHeadline}
          </Typography>
          <MarkdownConfig content={data?.bewerbungDescription as string} />
        </>
      </Section>
    </>
  );
};

export default Bewerbung;
