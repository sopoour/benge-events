import Section from '@app/components/layout/Section';
import LoadingSkeletonGeneral from '@app/components/LoadingSkeletonGeneral.tsx';
import MarkdownConfig from '@app/components/MarkdownConfig/MarkdownConfig';
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
    <Section id="bewerbung">
      <>
        <Typography as="h1" fontSize="48px">
          {data?.bewerbungHeadline}
        </Typography>
        <MarkdownConfig content={data?.bewerbungDescription as string} />
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeGpKTUxHHeAc7j3Axi7VH3Rz5NNDIXm2S_K96onzGPRHWI_Q/viewform?embedded=true"
          width="100%"
          height="1500"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
        >
          Wird geladen…
        </iframe>
      </>
    </Section>
  );
};

export default Bewerbung;
