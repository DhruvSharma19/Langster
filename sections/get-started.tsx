"use client"

import { motion } from "framer-motion"

import { staggerContainer, fadeIn, planetVariants } from "@/utils/motion"
import { StartSteps, TitleText, TypingText } from "@/components/index"

import { startingFeatures } from "@/constant"

export default function GetStarted() {
   return (
      <section className={`paddings relative z-10`}>
         <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.25 }}
            className={`inner-width mx-auto flex lg:flex-row flex-col gap-8`}>
            <motion.div variants={planetVariants("left")} className={`flex-1 flex-center`}>
               <img src="/get-started.png" alt="get-started" className="w-[90%] h-[90%] object-contain" />
            </motion.div>
            <motion.div variants={fadeIn("left", "tween", 0.2, 1)} className="flex-[0.75] flex justify-center flex-col">
               <TypingText title={"| How Langster Works"} />
               <TitleText title={<>Get Started with just a few clicks</>} />
               <div className="mt-[31px] flex flex-col max-w-[380px] gap-[24px]">
                  {startingFeatures.map((feature, index) => (
                     <StartSteps key={feature} number={index + 1} text={feature} />
                  ))}
               </div>
            </motion.div>
         </motion.div>
      </section>
   )
}
