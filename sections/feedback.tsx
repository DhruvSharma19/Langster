"use client"

import { motion } from "framer-motion"

import { fadeIn, staggerContainer, zoomIn } from "@/utils/motion"

export default function Feedback() {
   return (
      <section className={`paddings relative z-10`}>
         <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.25 }}
            className={`inner-width mx-auto flex lg:flex-row flex-col gap-6`}>
            <motion.div
               variants={fadeIn("right", "tween", 0.2, 1)}
               className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative">
               <div className="feedback-gradient"></div>
               <div>
                  <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">
                     Dhruv Sharma
                  </h4>
                  <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white">
                     Founder | FlowLink
                  </p>
               </div>

               <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white">
                  “With today&nbsp;s advanced technology, our language learning platform uses AI and gamification to revolutionize education. AI-generated voices and dynamic rewards make learning immersive, interactive, and enjoyable for all users.”
               </p>
            </motion.div>

            <motion.div
               variants={fadeIn("left", "tween", 0.2, 1)}
               className="relative flex items-center justify-center flex-1">
               <img
                  src="/planet-09.png"
                  alt="planet 09 image"
                  className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
               />

               <motion.div variants={zoomIn(0.4, 1)} className="absolute hidden lg:block -left-[10%] top-[3%]">
                  {/* <img src="/stamp.png" alt="stamp image" className="w-[155px] h-[155px] object-contain" /> */}
               </motion.div>
            </motion.div>
         </motion.div>
      </section>
   )
}
