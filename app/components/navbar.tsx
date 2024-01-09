import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
    return (
        <div className="w-full relative flex items-center max-w-2xl mx-auto px-4 py-5 justify-between">
           <Link href="/" className="font-bold text-3xl">
               Abbas<span className="text-primary">Blog</span>
           </Link>
           
           <ModeToggle />
        </div>
    )   
}