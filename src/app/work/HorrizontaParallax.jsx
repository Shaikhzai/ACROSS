import React, {
    useState,
    useMemo,
    useEffect,
    useRef,
    useCallback
  } from "react"
  import gsap from "gsap"
  import { ScrollTrigger } from "gsap/ScrollTrigger"

  import style from './style1.module.scss'
  
  gsap.registerPlugin(ScrollTrigger)
  
  /*--------------------
  HOOKS
  --------------------*/
  function useResizeObserver(ref, callback) {
    useEffect(() => {
      const element = ref.current
      if (!element) return
      const observer = new ResizeObserver(callback)
      observer.observe(element)
      return () => observer.unobserve(element)
    }, [ref, callback])
  }
  
  function useWindowResize() {
    const [windowSize, setWindowSize] = useState({
      width: 0,
      height: 0,
    });
  
    useEffect(() => {
      if (typeof window !== "undefined") {
        // Set initial size
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
  
        const handleResize = () => {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        };
  
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }
    }, []);
  
    return windowSize;
  }
  
  /*--------------------
  PINNED IMAGES
  --------------------*/
  const PinnedImages = ({ images }) => {
    const $root = useRef()
    const $pin = useRef()
    const $wrap = useRef()
    const [width, setWidth] = useState(0)
    const { width: winWidth } = useWindowResize()
  
    const handleResize = useCallback(() => {
      setWidth($wrap.current.scrollWidth)
    }, [])
  
    useResizeObserver($wrap, handleResize)
  
    useEffect(() => {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          $wrap.current,
          {
            x: 0
          },
          {
            x: -width + winWidth,
            ease: "none",
            scrollTrigger: {
              trigger: $root.current,
              start: "top top",
              end: () => "+=" + (width - winWidth),
              pin: $pin.current,
              invalidateOnRefresh: true,
              anticipatePin: 1,
              scrub: true
              // markers: true
            }
          }
        )
      })
  
      return () => ctx.revert()
    }, [width, winWidth])
  
    return (
      <div ref={$root} className={style.pinned-images}>
        <div ref={$pin} className={style.pin_wrap}>
          <div ref={$wrap} className={style.animation_wrap}>
            {images.map((image, i) => (
              <div className={style.image} key={i.toString()}>
                <img src={image} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  /*--------------------
  Closing statement
  --------------------*/
  const Spacer = () => {
    return (
      <div className={style.spacer}>
At ACROSS, we are committed to delivering excellence across all our services. Whether it's creating unforgettable events, connecting you with the perfect property, providing top-quality food products, enhancing your online shopping experience, or ensuring smooth transportation, our goal is to exceed your expectations at every turn. With a focus on innovation, reliability, and customer satisfaction, ACROSS is your trusted partner in achieving success and making every experience extraordinary.
      </div>
    )
  }
  
  /*--------------------
  APP
  --------------------*/
  const App = () => {
    return (
      <div>

        <Spacer />
        <PinnedImages
          images={[
            "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFuaW1hbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1578326457399-3b34dbbf23b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGFuaW1hbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1521651201144-634f700b36ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGFuaW1hbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
          ]}
        />
      </div>
    )
  }
  
export default App
  