import { FC, useEffect, useRef } from 'react';
import { BackgroundContainer, Bubble, BubbleWrapper, Content } from './styles';
import { gsap } from 'gsap';

const Landing: FC = () => {
  const bubblesRef = useRef<Array<HTMLAnchorElement | null>>([]);

  const bubbles = [
    { href: '/about', top: '10%', left: '20%', size: 150 },
    { href: '/events', top: '20%', left: '60%', size: 200 },
    { href: '/contact', top: '25%', left: '35%', size: 120 },
    { href: '/gallery', top: '30%', left: '75%', size: 180 },
  ];

  const rand = (min: number, max: number) => Math.random() * (max - min) + min;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(bubblesRef, { scale: 0, opacity: 0 });
      bubblesRef.current.forEach((bubble) => {
        if (!bubble) return;
        const tl = gsap.timeline();
        const floatY = rand(10, 100);
        const floatX = rand(-100, 100);
        const duration = rand(5, 9);
        const delay = rand(0, 3);

        // Appear Animation
        tl.fromTo(
          bubble,
          { scale: 0 },
          {
            scale: 1,
            opacity: 0.85,
            duration: 10,
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
  }, []);

  return (
    <BackgroundContainer>
      <Content>
        {bubbles.map((b, i) => (
          <Bubble
            key={i}
            href={b.href}
            className="bubble"
            ref={(ref) => (bubblesRef.current[i] = ref)}
            style={{
              top: b.top,
              left: b.left,
              width: b.size,
              height: b.size,
            }}
          />
        ))}

        <h1>04. April 2026 im 90mil</h1>
      </Content>
    </BackgroundContainer>
  );
};

export default Landing;
