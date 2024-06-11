"use client"

import { motion } from "framer-motion"

import { navVariants } from "@/utils/motion"
import { Loader } from "lucide-react";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav variants={navVariants} initial="hidden" whileInView="show" className={`x-paddings py-8 relative flex items-center justify-between`}>
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className={`inner-width mx-auto flex justify-between gap-8`}>
        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">Langster</h2>
      </div>
      <ClerkLoading>
        <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
      </ClerkLoading>
      <ClerkLoaded>
        <SignedIn>
          <Button size="lg" variant="ghost"  className=" mr-[5px] ">
            <Link href="/learn" >
              Get Started
            </Link>
          </Button>
          <UserButton
            afterSignOutUrl="/"
          />
        </SignedIn>
        <SignedOut>
          <SignInButton
            mode="modal"
            afterSignInUrl="/learn"
            afterSignUpUrl="/learn"
          >
            <Button size="lg" variant="ghost">
              Login
            </Button>
          </SignInButton>
        </SignedOut>
      </ClerkLoaded>


    </motion.nav>
  )
}
