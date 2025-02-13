
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

import {useRouter} from 'next/navigation'
import {usePathname} from 'next/navigation'

const Nav = () => {
 const path = usePathname();
  const router = useRouter();

  const handleRedirect = () => {
    if (path !== "/") {
      router.push("/");
    } else {
      router.push("/quiz/1");
    }
  }; 
  return (
    <nav>

    <div className="flex h-5 items-center space-x-4 text-sm">
    <div className="font-inter cursor-pointer transition-transform duration-300 hover:scale-110">
    <Link href="/" >Home</Link></div>
    <Separator orientation="vertical" />
    <div className="font-inter cursor-pointer transition-transform duration-300 hover:scale-110">
    <Link href="https://dhg-freiburg.de/"> DHG</Link></div>
    <Separator orientation="vertical" />
    <div className="font-inter cursor-pointer transition-transform duration-300 hover:scale-110">
    <Link href="https://dhg-freiburg.de/schulleben/schule-als-staat/">Schule als Staat</Link>
    </div>
    <button onClick={handleRedirect} className="font-poppins font-bold inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-8 font-medium text-neutral-50 shadow-lg shadow-neutral-500/20 transition active:scale-95 shadow-xl rounded-xl">Quiz</button>

    </div>
    </nav>
  )
}

export default Nav;
