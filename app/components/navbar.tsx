'use client';

import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { useUser } from "@clerk/nextjs";

export default function Navbar() {
    const {user, isLoaded} = useUser();
    return (
        <div className="w-full relative flex items-center max-w-2xl mx-auto px-4 py-5 justify-between">
           <Link href="/" className="font-bold text-3xl">
               Mystic<span className="text-primary">Pakistan</span>
           </Link>
           <Link href="/dashboard" className="">Dahboard</Link>
           
           <ModeToggle />
        </div>
    )   
}