"use client";
import { motion } from "framer-motion";
// import Image from 'next/image'
// import profilePic from '../../public/images/pexels-bayram-yalçın-16662460.jpg'
// import { useEffect, useState } from "react";

const Page = () => {
  // const [offset, setOffset] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => setOffset((prev) => prev + 1), 100);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);
  return (
    <motion.div
      className="flex-1 bg-white hidden md:block pr-4"
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            delay: 1.7
          }
        }
      }}
      initial="hidden"
      animate="visible"
    >
      {/* <div className="flex gap-4">
        <div className="overflow-hidden h-screen">
          {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,].map(() =>
            <div className="mb-4">
              <Image
                src={profilePic}
                alt="Picture of the author"
              />
              {offset}
            </div>
          )}
        </div>
        <div className="overflow-hidden h-screen">
          {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,].map(() =>
            <div className="mb-4">
              <Image
                src={profilePic}
                alt="Picture of the author"
              />
            </div>
          )}

        </div>
      </div> */}
    </motion.div>
  )
};

export default Page;