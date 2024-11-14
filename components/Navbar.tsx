import Link from 'next/link';

export default function Nav(){
    return (<>
     <nav className="h-[80px] w-full flex justify-between items-center px-5 md:px-10 lg:px-20 bg-[#191919]">
        <h1 className="text-lg text-purple-500 lg:text-pink-500 h-4 text-[20px]">
          MY PORTFOLIO
        </h1>
        <ul className="hidden md:flex gap-5 lg:gap-10 mt-[20px]">
         <Link href="/home"><li className="text-orange-500 text-[16px] lg:text-[20px] font-semibold hover:text-white underline">HOME</li></Link> 
          <Link href="/about"><li className="text-pink-500 text-[16px] lg:text-[20px] font-semibold hover:text-orange-500">ABOUT</li></Link> 
          <Link href="/skills" ><li className="text-pink-500 text-[16px] lg:text-[20px] font-semibold hover:text-orange-500">SKILLS</li></Link> 
          <Link href="/contact"><li className="text-pink-500 text-[16px] lg:text-[20px] font-semibold hover:text-orange-500">CONTACT</li></Link>
          <Link href="/projects"><li className="text-pink-500 text-[16px] lg:text-[20px] font-semibold hover:text-orange-500">PROJECTS</li></Link>
        </ul>
        <Link href="/cv/ourcv.pdf">
          <button className="border-2 bg-purple-500 p-2 h-[40px] w-[80px] md:h-[50px] md:w-[100px] rounded-md text-[14px] md:text-[20px] text-white hover:border-orange-500">
            CV
          </button>
        </Link>
      </nav>
</>)
}