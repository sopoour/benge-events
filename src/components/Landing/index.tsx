import { FC, useEffect } from 'react';
import { Bubble, Content, EventBoxLanding, LangToggleLanding } from './styles';
import { gsap } from 'gsap';
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

const rand = (min: number, max: number) => Math.random() * (max - min) + min;

const Landing: FC = () => {
  const isDesktop = useMedia(Breakpoints.md);
  const lang = useLang();
  useEffect(() => {
    let ctx = gsap.context(() => {
      const bubblesDOM = gsap.utils.toArray('.bubble');
      bubblesDOM.forEach((bubble) => {
        if (!bubble) return;

        const tl = gsap.timeline();
        const floatY = isDesktop ? rand(10, 50) : rand(5, 10);
        const floatX = isDesktop ? rand(-30, 50) : rand(-20, 20);
        const duration = rand(5, 9);
        const delay = rand(0, 0);

        // Appear Animation
        tl.fromTo(
          '#logo',
          {
            scale: 0.8,
          },
          { scale: 1 },
        )
          .fromTo(
            '#langToggle',
            {
              opacity: 0,
            },
            { opacity: 1 },
          )
          .fromTo(
            bubble,
            { scale: 0.5, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 2,
              delay,
              ease: 'power3.out',
              onComplete: () => {
                // Floating Loop
                gsap.to(bubble, {
                  y: `+=${floatY}`,
                  x: `+=${floatX}`,
                  duration,
                  repeat: -1,
                  yoyo: true,
                  ease: 'sine.inOut',
                  delay,
                });
              },
            },
          );
      });
    });

    return () => ctx.revert(); // cleanup
  }, [isDesktop]);
  const today = new Date();
  const { data, isLoading } = useSWR<Homepage | null>(`/api/homepage?lang=${lang}`, fetcher);
  const upcomingEvent = data?.eventsCollection?.items
    ?.filter((event) => normalizeDate(event.datum) >= today)
    ?.sort((a, b) => normalizeDate(a.datum).getTime() - normalizeDate(b.datum).getTime())[0];

  return (
    <Content>
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
        <MobileBubbles slicedBubbles={bubbles.slice(0, 3)} />
      )}
      <EventBoxLanding
        event={upcomingEvent}
        subTitle={data?.generalContent.homepageSubtitle}
        loadingSubTitle
        loading={isLoading}
        showDescription={false}
      />
      {!isDesktop && <MobileBubbles slicedBubbles={bubbles.slice(-3)} />}
    </Content>
  );
};

export default Landing;
