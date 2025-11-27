import { FC, useEffect } from 'react';
import {
  Bubble,
  ColTitle,
  Content,
  Date,
  EventBox,
  EventCol,
  EventTable,
  EventTitle,
  VenueBox,
} from './styles';
import { gsap } from 'gsap';
import Typography from '@app/components/Typography/Typography';
import Logo from '@app/assets/logo.png';
import Image from 'next/image';
import useSWR from 'swr';
import { fetcher } from '@app/hooks/fetch/useFetch';
import { Homepage } from '@app/types';
import { useMedia } from '@app/hooks/useMedia';
import { Breakpoints } from '@app/styles/media';
import { ISOToDate } from '@app/utils/formatDate';
import MobileBubbles from './MobileBubbles';

export type Bubbles = {
  name: string;
  href: string;
  top: string;
  left: string;
  size: number;
};

const rand = (min: number, max: number) => Math.random() * (max - min) + min;

const Landing: FC = () => {
  const isDesktop = useMedia(Breakpoints.md);
  const bubbles: Bubbles[] = [
    { name: 'Über uns', href: '/ueber-uns', top: '3%', left: '12%', size: 250 },
    { name: 'Events', href: '/events', top: '5%', left: '70%', size: 210 },
    { name: 'Lexikon', href: '/lexikon', top: '30%', left: '4%', size: 280 },
    { name: 'Bewerbung', href: '/bewerbung', top: '28%', left: '75%', size: 300 },
    { name: 'Feedback', href: '/feedback', top: '60%', left: '14%', size: 220 },
    { name: 'Awareness', href: '/awareness', top: '60%', left: '70%', size: 250 },
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      const bubblesDOM = gsap.utils.toArray('.bubble');
      bubblesDOM.forEach((bubble) => {
        if (!bubble) return;

        const tl = gsap.timeline();
        const floatY = isDesktop ? rand(10, 50) : rand(5, 10);
        const floatX = isDesktop ? rand(-30, 50) : rand(-20, 20);
        const duration = rand(5, 9);
        const delay = rand(0, 3);

        // Appear Animation
        tl.fromTo(
          '#logo',
          {
            scale: 0.8,
          },
          { scale: 1 },
        ).fromTo(
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

  const { data, isLoading } = useSWR<Homepage | null>('/api/homepage', fetcher);
  const upcomingEvent = data?.eventsCollection?.items[0];

  const eventDetails = [
    { title: 'Workshop', detail: upcomingEvent?.workshopTitel },
    { title: 'Konzert', detail: upcomingEvent?.konzertTitel },
    { title: 'DJ', detail: upcomingEvent?.djTitel },
  ];

  return (
    <Content>
      <Image
        id="logo"
        src={Logo.src}
        alt="Benge Logo"
        style={{
          cursor: 'pointer',
          top: '2%',
          position: 'absolute',
          scale: '0.8',
        }}
        width={isDesktop ? Logo.width / 2 : Logo.width / 4}
        height={isDesktop ? Logo.height / 2 : Logo.height / 4}
      />
      {isDesktop ? (
        bubbles.map((b, i) => (
          <Bubble
            key={i}
            href={b.href}
            className="bubble"
            style={{
              top: b.top,
              left: b.left,
              width: b.size,
              height: b.size,
            }}
          >
            <Typography fontSize="28px">{b.name}</Typography>
          </Bubble>
        ))
      ) : (
        <MobileBubbles slicedBubbles={bubbles.slice(0, 3)} />
      )}

      <EventBox>
        <Typography fontSize="14px" fontSizeSm="16px">
          {data?.generalContent.homepageSubtitle}
        </Typography>
        <Date>{upcomingEvent?.datum ? ISOToDate(upcomingEvent?.datum) : ''}</Date>
        <VenueBox>
          <Typography $textalign="center" fontSize="16px" fontSizeSm="18px">
            hier könnte deine
          </Typography>
          <Typography $textalign="center" fontSize="28px" fontSizeSm="32px" fontWeight={900}>
            VENUE
          </Typography>
          <Typography $textalign="center" fontSize="16px" fontSizeSm="18px">
            stehen
          </Typography>
        </VenueBox>
        <EventTable>
          {eventDetails.map((event) => (
            <EventCol key={event.title}>
              <ColTitle>{event.title}</ColTitle>
              <EventTitle fontSize="14px" fontSizeSm="16px">
                {event.detail}
              </EventTitle>
            </EventCol>
          ))}
        </EventTable>
      </EventBox>

      {!isDesktop && <MobileBubbles slicedBubbles={bubbles.slice(-3)} />}
    </Content>
  );
};

export default Landing;
