import { FC } from 'react';
import {
  Bubble,
  Content,
  EventBoxLanding,
  LangToggleLanding,
  LinkContainerLanding,
} from './styles';
import Typography from '@app/components/Typography/Typography';
import Logo from '@app/assets/logo.png';
import Image from 'next/image';
import useSWR from 'swr';
import { fetcher } from '@app/hooks/fetch/useFetch';
import { Homepage } from '@app/types';
import { useMedia } from '@app/hooks/useMedia';
import { Breakpoints } from '@app/styles/media';
import MobileBubbles from './MobileBubbles';
import { normalizeDate } from '@app/utils/formatDate';
import { navItems } from '../layout/Navigation';
import useLang from '@app/hooks/useLang';
import useBubbleAnimation from '@app/hooks/useBubbleAnimation';

export type Bubbles = {
  name: string;
  nameEn: string;
  href: string;
  top: string;
  left: string;
  size: number;
};

const addedInfo = [
  { top: '3%', left: '12%', size: 250 },
  { top: '5%', left: '70%', size: 210 },
  { top: '30%', left: '4%', size: 280 },
  { top: '28%', left: '75%', size: 300 },
  { top: '60%', left: '14%', size: 220 },
  { top: '60%', left: '70%', size: 250 },
];
const bubbles: Bubbles[] = navItems.map((item, i) => ({ ...item, ...addedInfo[i] }));

const Landing: FC = () => {
  const isDesktop = useMedia(Breakpoints.md);
  const lang = useLang();

  useBubbleAnimation();

  const today = new Date();
  const { data, isLoading } = useSWR<Homepage | null>(`/api/homepage?lang=${lang}`, fetcher);
  const upcomingEvent = data?.eventsCollection?.items
    ?.filter((event) => normalizeDate(event.datum) >= today)
    ?.sort((a, b) => normalizeDate(a.datum).getTime() - normalizeDate(b.datum).getTime())[0];

  return (
    <Content>
      <LinkContainerLanding />
      <Image
        id="logo"
        src={Logo.src}
        alt="Benge Logo"
        style={{
          cursor: 'pointer',
          top: '2%',
          position: isDesktop ? 'absolute' : 'static',
          scale: '0.8',
        }}
        width={isDesktop ? Logo.width / 2 : Logo.width / 4}
        height={isDesktop ? Logo.height / 2 : Logo.height / 4}
      />
      <LangToggleLanding />
      <nav>
        {isDesktop ? (
          bubbles.map((b, i) => (
            <Bubble
              key={i}
              href={`${b.href}${lang === 'en' ? '?lang=en' : ''}`}
              className="bubble"
              style={{
                top: b.top,
                left: b.left,
                width: b.size,
                height: b.size,
              }}
            >
              <Typography fontSize="32px">{lang === 'en' ? b.nameEn : b.name}</Typography>
            </Bubble>
          ))
        ) : (
          <MobileBubbles slicedBubbles={bubbles.slice(0, 3)} lang={lang} />
        )}
      </nav>

      <EventBoxLanding
        event={upcomingEvent}
        subTitle={data?.generalContent.homepageSubtitle}
        loadingSubTitle
        loading={isLoading}
      />
      {!isDesktop && <MobileBubbles slicedBubbles={bubbles.slice(-3)} lang={lang} />}
    </Content>
  );
};

export default Landing;
