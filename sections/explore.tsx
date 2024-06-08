"use client"

import { useState } from "react"
import { motion } from "framer-motion"

import { staggerContainer } from "@/utils/motion"
import { ExploreCard, TitleText, TypingText } from "@/components/index"

import { exploreWorlds } from "@/constant"

export default function Explore() {
   const [active, setActive] = useState("world-1")

   return (
      <section className={`paddings`} id="explore">
         <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.25 }}
            className={`inner-width mx-auto flex flex-col`}>
            <TypingText title={"| The World"} textStyles={"text-center"} />
            <TitleText
               title={
                  <>
                     Choose the Language you want <br className="hidden md:block" /> to learn
                  </>
               }
               textStyles={"text-center"}
            />

            <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
               {exploreWorlds.map((world, index) => (
                  <ExploreCard index={index} key={world.id} {...world} active={active} handleClick={setActive} />
               ))}
            </div>
         </motion.div>
      </section>
   )
}
