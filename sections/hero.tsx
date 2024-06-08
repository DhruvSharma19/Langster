"use client"

import { motion } from "framer-motion"

import { slideIn, staggerContainer, textVariant } from "@/utils/motion"

export default function Hero() {
   return (
      <section className={`y-paddings sm:pl-16 pl-6`}>
         <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`inner-width mx-auto flex flex-col`}>
            <div className="relative z-10 flex flex-col items-center justify-center">
               <motion.h1 variants={textVariant(1.1)} className={"hero-heading"}>
                  Langster
               </motion.h1>
               <motion.div variants={textVariant(1.2)} className="flex flex-row items-center justify-center">
                  <h1 className={"hero-heading"}>Ma</h1>
                  <div className={"hero-d-text"} />
                  <h1 className={"hero-heading"}>Ness</h1>
               </motion.div>
            </div>

            <motion.div
               variants={slideIn("right", "tween", 0.2, 1)}
               className="relative w-full md:-mt-[20px] -mt-[12px]">
               <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

               <img
                  src="/cover.png"
                  alt="hero_cover"
                  className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
               />

               {/* <a href="#explore">
                  <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
                     <img
                        src="/stamp.png"
                        alt="stamp"
                        className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
                     />
                  </div>
               </a> */}
            </motion.div>
         </motion.div>
      </section>
   )
}
