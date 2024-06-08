"use client"

import { motion } from "framer-motion"

import { fadeIn } from "@/utils/motion"

interface IExploreCardProps {
   id: string
   title: string
   imgUrl: string
   index: number
   active: string
   handleClick: (id: string) => void
}

export default function ExploreCard({ index, id, title, imgUrl, active, handleClick }: IExploreCardProps) {
   return (
      <motion.div
         variants={fadeIn("right", "spring", index * 0.5, 0.75)}
         className={`relative ${active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"} 
         flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
         onClick={() => handleClick(id)}>
         <img src={imgUrl} alt={title} className="absolute object-cover w-full h-full rounded-[24px]" />
         {active !== id ? (
            <h3 className="font-semibold sm:text-[26px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
               {title}
            </h3>
         ) : (
            <div className="absolute bottom-0 flex-col justify-start w-full p-8 bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
               <div className={`flex-center w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}>
                  <img src="/headset.svg" alt="headset" className="object-contain w-1/2 h-1/2" />
               </div>
               <p className="font-normal text-[16px] leading-[20px] text-white uppercase">Enter the Langster</p>
               <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">{title}</h2>
            </div>
         )}
      </motion.div>
   )
}
