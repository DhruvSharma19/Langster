import { Footer, Navbar } from "@/components/index"
import { About, Explore, Feedback, GetStarted, Hero, Insight, WhatsNew, Worlds } from "@/sections/index"

export default function Home() {
   return (
      <div className="overflow-hidden bg-[#1A232E]">
         <Navbar />
         <Hero />

         <div className="relative">
            <About />
            <div className="z-0 gradient-03" />
            <Explore />
         </div>

         <div className="relative">
            <GetStarted />
            <div className="z-0 gradient-04" />
            <WhatsNew />
         </div>

         <Worlds />

         <div className="relative">
            <Insight />
            <div className="z-0 gradient-05" />
            <Feedback />
         </div>

         <Footer />
      </div>
   )
}
