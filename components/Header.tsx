import Link from "next/link"
import Nav from "./Nav"
import BurgerMenu from "./BurgerMenu"

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white">
    <header className="pt-[40px] pb-[20px] pl-8 xl:pl-12 ">
    <div className="container mx-auto flex justify-between ">
    <Link href="/">
    <div className="flex flex-col gap-0 mt-[-10px] text-center ml-[-20px]">
      <h3 className="font-playfair inline font-semibold">DHG</h3>
      <p className="font-playfair inline mt-[-5px]">Schule als Staat</p>
      </div>
    </Link>

    {/* Desktop Nav*/}
    <div className="hidden md:flex items-center gap-8">
      <Nav/>
    </div>

    {/* Mobile Nav*/}
    <div className="pr-8 md:hidden">
     <BurgerMenu/>
    </div>
    </div>
    </header>
    </header>
  )
}

export default Header;
