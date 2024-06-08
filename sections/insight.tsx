"use client"

import { motion } from "framer-motion"

import { staggerContainer } from "@/utils/motion"
import { InsightCard, TitleText, TypingText } from "@/components/index"

import { insights } from "@/constant"

export default function Insight() {
   return (
      <section className={`paddings relative z-10`}>
         <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.25 }}
            className={`inner-width mx-auto flex flex-col`}>
            <TypingText title={"| Insight"} textStyles={"text-center"} />
            <TitleText title={<>Insight about Langster</>} textStyles={"text-center"} />

            <div className="mt-[50px] flex flex-col gap-[30px]">
               {insights.map((item, index) => (
                  <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
               ))}
            </div>
         </motion.div>
      </section>
   )
}
