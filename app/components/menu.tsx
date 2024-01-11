import Link from "next/link";


export default function Menu(){
    return(
        <div className="w-full relative items-center max-w-2xl mx-auto px-4 py-5 justify-between">
         <ul className="md:flex space-x-4 text-xl font-semibold md:justify-between font-mono text-center">
           <li><Link href="/pakistan" className="hover:scale-90 transition-all">Pakistan</Link></li>
           <li><Link href="/sports" className="hover:scale-90 transition">Sports</Link></li>
           <li><Link href="/tech" className="hover:scale-90 transition">Tech</Link></li>
           <li><Link href="/food" className="hover:scale-90 transition">Food</Link></li>
         </ul>
        </div>
    )
}