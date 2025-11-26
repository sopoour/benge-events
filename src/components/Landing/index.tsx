import { FC, useEffect } from 'react';
import { Bubble, BubbleWrapper, Content } from './styles';
import { gsap } from 'gsap';
import Typography from '@app/components/Typography/Typography';
import Logo from '@app/assets/logo.png';
import Image from 'next/image';
import Footer from '@app/components/layout/Footer';
import useSWR from 'swr';
import { fetcher } from '@app/hooks/fetch/useFetch';
import { Homepage } from '@app/types';
import { useMedia } from '@app/hooks/useMedia';
import { Breakpoints } from '@app/styles/media';

const Landing: FC = () => {
  const isDesktop = useMedia(Breakpoints.sm);
  const bubbles = [
    { name: 'Über uns', href: '/ueber-uns', top: '3%', left: isDesktop ? '15%' : '10%', size: 250 },
    { name: 'Events', href: '/events', top: '5%', left: isDesktop ? '75%' : '40%', size: 210 },
    { name: 'Lexikon', href: '/lexikon', top: '30%', left: '4%', size: 280 },
    { name: 'Bewerbung', href: '/bewerbung', top: '28%', left: '75%', size: 300 },
    { name: 'Feedback', href: '/feedback', top: '60%', left: '20%', size: 220 },
    { name: 'Awareness', href: '/awareness', top: '60%', left: '70%', size: 250 },
  ];

  const rand = (min: number, max: number) => Math.random() * (max - min) + min;

  useEffect(() => {
    if (isDesktop) {
      let ctx = gsap.context(() => {
        const bubblesDOM = gsap.utils.toArray('.bubble');
        bubblesDOM.forEach((bubble) => {
          if (!bubble) return;

          const tl = gsap.timeline();
          const floatY = rand(10, 50);
          const floatX = rand(-30, 50);
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
    } else {
      let ctx = gsap.context(() => {
        const bubblesDOM = gsap.utils.toArray('.bubble');
        bubblesDOM.forEach((bubble) => {
          if (!bubble) return;

          const tl = gsap.timeline();
          const floatY = rand(10, 30);
          const floatX = rand(-20, 20);
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
    }
  }, [isDesktop]);

  const { data, isLoading } = useSWR<Homepage | null>('/api/homepage', fetcher);
  console.log(data?.eventsCollection[0]);
  return (
    <Content>
      <Image
        id="logo"
        src={Logo.src}
        alt="Benge Logo"
        style={{
          cursor: 'pointer',
          top: isDesktop ? '5%' : '2%',
          position: 'absolute',
          scale: '0.8',
        }}
        width={isDesktop ? Logo.width / 2 : Logo.width / 3}
        height={isDesktop ? Logo.height / 2 : Logo.height / 3}
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
        <BubbleWrapper>
          {bubbles.map((b, i) => (
            <Bubble
              key={i}
              href={b.href}
              className="bubble"
              style={{
                top: b.top,
                left: b.left,
                width: '80px',
                height: '80px',
              }}
            >
              <Typography fontSize="12px">{b.name}</Typography>
            </Bubble>
          ))}
        </BubbleWrapper>
      )}

      <Typography fontSize="48px" style={{ backdropFilter: '50px' }}>
        04. April 2026 im 90mil
      </Typography>
      <Footer />
    </Content>
  );
};

export default Landing;
