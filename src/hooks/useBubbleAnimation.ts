import { Breakpoints } from "@app/styles/media";
import { useMedia } from "./useMedia";
import { useEffect } from "react";
import { gsap } from 'gsap';


const rand = (min: number, max: number) => Math.random() * (max - min) + min;


const useBubbleAnimation = (plain?: boolean) =>{
      const isDesktop = useMedia(Breakpoints.md);
    
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
              '#linkContainerLanding',
              {
                opacity: 0,
              },
              { opacity: 1 },
            )
            tl.fromTo(
              bubble,
              { scale: plain? 1 : 0.5, opacity: plain? 1  : 0 },
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
}

export default useBubbleAnimation;