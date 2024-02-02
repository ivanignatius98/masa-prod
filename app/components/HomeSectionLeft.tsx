"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const Page = () => {
  const [animateScroll, setAnimateScroll] = useState(false);
  const [offset, setOffset] = useState(0);
  // useEffect(() => {
  //   if (animateScroll) {
  //     const interval = setInterval(() => setOffset((prev) => prev + 0.5), 10);
  //     return () => {
  //       clearInterval(interval);
  //     };
  //   }
  // }, [animateScroll]);
  useEffect(() => {
    const timeoutId = setTimeout(() => setAnimateScroll(true), 4000); // 1000 milliseconds (1 second)
    return () => clearTimeout(timeoutId);
  }, []);

  const [scrollDirection, setScrollDirection] = useState("");

  const handleScroll = (event: any) => {
    // Detect the scroll direction
    const direction = event.deltaY > 0 ? "down" : "up";
    console.log(event.deltaY);
    setOffset((prev) => prev + event.deltaY)
    // Update the scroll direction state
    setScrollDirection(direction);
  };
  return (
    <motion.main
      className="flex-1 bg-white hidden lg:block pr-8 overflow-hidden"
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            delay: 1.7,
          },
        },
      }}
      initial="hidden"
      animate="visible"
    >
      <div
        className="flex gap-8"
        onWheel={handleScroll}
        onTouchMove={handleScroll}
      >
        <div className="w-full">
          <div
            className="transition-all"
            style={{ transform: `translateY(-${offset}px) translateZ(0px)` }}
          >
            {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((v, i) => (
              <div key={i} className="mb-8 inline-block">
                <Image
                  className="aspect-[3/4] object-cover"
                  src={"https://placehold.co/800x1200/orange/white.png"}
                  alt="Picture of the author"
                  width={400}
                  height={600}
                />
              </div>
            ))}
          </div>
        </div>
        <div
          className="transition-all w-full"
          style={{ transform: `translateY(-${offset}px)  translateZ(0px)` }}
        >
          {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((v, i) => (
            <div key={i} className="mb-8 inline-block">
              <Image
                className="aspect-[2/3] object-cover"
                src={"https://placehold.co/800x1200/orange/white.png"}
                alt="Picture of the author"
                width={400}
                height={600}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.main>
  );
};

export default Page;
