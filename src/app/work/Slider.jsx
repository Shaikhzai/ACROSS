import React, {
  useState,
  useEffect,
  useRef,
  useCallback
} from 'react';
import gsap from 'gsap';

import style from './style.module.scss';

const Carousel = ({ images, timer = 2000 }) => {
  const [active, setActive] = useState(0);
  const $root = useRef();

  const nextItem = useCallback(() => {
    if (!$root.current) return;

    const items = $root.current.querySelectorAll('.item'); // Correctly targeting items using ref

    const activeItem = items[active];
    const nextIndex = active < images.length - 1 ? active + 1 : 0;
    const nextItem = items[nextIndex];

    gsap.set(activeItem, { zIndex: 10 });
    gsap.to(activeItem, {
      y: '-100%',
      ease: 'power3.inOut',
      duration: 1.5,
      onComplete: () => {
        gsap.set(activeItem, {
          y: '100%',
          zIndex: 0,
        });
        setActive(nextIndex); // Updating active state after animation
      },
    });

    gsap.fromTo(nextItem, {
      y: '60%',
      scale: 1.2,
      zIndex: 9,
    }, {
      y: '0%',
      scale: 1,
      ease: 'power3.inOut',
      duration: 1.5,
    });
  }, [active, images.length]);

  useEffect(() => {
    const autoPlay = setInterval(nextItem, timer);
    return () => clearInterval(autoPlay);
  }, [nextItem, timer]);

  return (
    <div className={style.carousel} ref={$root}>
      {images.map((image, i) => (
        <div 
          className={`item ${style.item}`} 
          key={i.toString()} 
          style={{ zIndex: images.length - i }}>
          <img 
            className={style.img} 
            style={{ objectFit: 'cover', width: '100%', height: '100%' }} 
            src={image} 
            alt={`carousel item ${i}`} 
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;