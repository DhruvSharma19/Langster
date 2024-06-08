"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"

import { textContainer, textVariant2 } from "@/utils/motion"

interface ITextProps {
   title: any
   textStyles?: string
}

export const TypingText = ({ title, textStyles }: ITextProps) => (
   <motion.p variants={textContainer} className={`font-normal text-[14px] text-secondary-white ${textStyles}`}>
      {Array.from(title).map((letter, index) => (
         <motion.span variants={textVariant2} key={index}>
            {letter === "" ? "\u00A0" : (letter as ReactNode)}
         </motion.span>
      ))}
   </motion.p>
)

export const TitleText = ({ title, textStyles }: ITextProps) => (
   <motion.h1
      variants={textVariant2}
      initial="hidden"
      whileInView={"show"}
      className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}>
      {title}
   </motion.h1>
)
