import { FC, useEffect } from 'react';
import { BackgroundContainer, Bubble, Content } from './styles';
import { gsap } from 'gsap';
import Typography from '@app/components/Typography/Typography';

const Landing: FC = () => {
  const bubbles = [
    { name: 'Über uns', href: '/about', top: '10%', left: '20%', size: 130 },
    { name: 'Events', href: '/events', top: '20%', left: '60%', size: 200 },
    { name: 'Lexikon', href: '/lexikon', top: '30%', left: '10%', size: 200 },
    { name: 'Bewerbung', href: '/bewerbung', top: '15%', left: '80%', size: 140 },
    { name: 'Feedback', href: '/feedback', top: '60%', left: '5%', size: 120 },
    { name: 'Awareness', href: '/awareness', top: '50%', left: '70%', size: 250 },
  ];

  const rand = (min: number, max: number) => Math.random() * (max - min) + min;

  useEffect(() => {
    let ctx = gsap.context(() => {
      const bubblesDOM = gsap.utils.toArray('.bubble');
      bubblesDOM.forEach((bubble) => {
        if (!bubble) return;

        const tl = gsap.timeline();
        const floatY = rand(10, 50);
        const floatX = rand(-50, 50);
        const duration = rand(5, 9);
        const delay = rand(0, 3);

        // Appear Animation
        gsap.fromTo(
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
              tl.to(bubble, {
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
            style={{
              top: b.top,
              left: b.left,
              width: b.size,
              height: b.size,
            }}
          >
            <Typography>{b.name}</Typography>
          </Bubble>
        ))}

        <h1>04. April 2026 im 90mil</h1>
      </Content>
    </BackgroundContainer>
  );
};

export default Landing;
