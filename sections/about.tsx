"use client"

import { motion } from "framer-motion"

import { TypingText } from "@/components/index"
import { fadeIn, staggerContainer } from "@/utils/motion"

export default function About() {
   return (
      <section className={`paddings relative z-10`}>
         <div className="gradient-02" />
         <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.25 }}
            className={`inner-width mx-auto flex-center flex-col`}>
            <TypingText title="| About Langster" textStyles="text-center" />

            <motion.p
               variants={fadeIn("up", "tween", 0.2, 1)}
               className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white leading-[54px]">
               <span className="font-extrabold text-white">Langster </span>
               Langster is revolutionizing the future of language learning, offering an immersive and interactive experience that feels incredibly real. Dive into a world where <span className="font-extrabold text-white">AI-driven</span> voices and gamified lessons bring your learning to life. With Langster, you can feel the excitement and engagement as if you&nbsp;re in a <span className="font-extrabold text-white">virtual classroom</span>, making language acquisition an adventure.
            </motion.p>

            <motion.img
               variants={fadeIn("up", "tween", 0.3, 1)}
               src="/arrow-down.svg"
               alt="arrow down"
               className="w-[18px] h-[28px] object-contain mt-[28px]"
            />
         </motion.div>
      </section>
   )
}
