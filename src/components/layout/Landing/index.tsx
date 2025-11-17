import { FC, useEffect } from 'react';
import { BackgroundContainer, Bubble, Content } from './styles';
import { gsap } from 'gsap';
import Typography from '@app/components/Typography/Typography';
import Logo from '@app/assets/logo.png';
import Image from 'next/image';
import Footer from '../Footer';

const Landing: FC = () => {
  const bubbles = [
    { name: 'Über uns', href: '/ueber-uns', top: '10%', left: '20%', size: 120 },
    { name: 'Events', href: '/events', top: '5%', left: '75%', size: 180 },
    { name: 'Lexikon', href: '/lexikon', top: '30%', left: '4%', size: 200 },
    { name: 'Bewerbung', href: '/bewerbung', top: '28%', left: '80%', size: 140 },
    { name: 'Feedback', href: '/feedback', top: '65%', left: '5%', size: 140 },
    { name: 'Awareness', href: '/awareness', top: '60%', left: '70%', size: 200 },
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
        <Image
          src={Logo.src}
          alt="Benge Logo"
          style={{ cursor: 'pointer', top: '5%', position: 'absolute' }}
          width={Logo.width / 2}
          height={Logo.height / 2}
        />
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

        <Typography fontSize="48px" style={{ backdropFilter: '50px' }}>
          04. April 2026 im 90mil
        </Typography>
        <Footer />
      </Content>
    </BackgroundContainer>
  );
};

export default Landing;
