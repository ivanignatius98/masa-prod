"use client";
import "./styles.css";
import { TitleTexts } from "@components/TitleTexts";
import { motion } from "framer-motion";
import Sidebar from "@components/Sidebar";
import { Fragment, useEffect, useState } from "react";
import Image from "next/image";

export default function App() {
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

  return (
    <Fragment>
      <main className="flex-1 h-svh"
      >
        <div className="fixed w-full lg:w-1/2 ml-auto h-svh pointer-events-none right-0">
          <div className="flex flex-col justify-between w-full h-full pt-52 pb-20 pr-20">
            <TitleTexts />
            <motion.div
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
              className="ml-auto max-w-80"
            >
              <p className="text-2xl leading-none tracking-tighter">
                We believe buying decisions are driven by emotion.
              </p>
              <div className="mt-6 font-bold">ABOUT US</div>
            </motion.div>
          </div>
        </div>
        <motion.div
          className="hidden lg:flex gap-8 w-1/2 bg-white pr-8"
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
          <div className="w-full ">
            <div
              className="transition-all  overflow-hidden"
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
            {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((v, i) => (
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
        </motion.div>

      </main>

      <Sidebar />
    </Fragment>
  );
}
