import Link from "next/link";
import Image from "next/image";



export default function Hero() {
  return (
    <div className="min-h-screen w-full bg-[#191919]">
     
      <div className="flex flex-col md:flex-row items-center gap-5 lg:gap-[100px] p-5 md:p-10 lg:pl-20">
        <div className="text-white mt-10 flex flex-col items-start md:items-center">
          <h1 className="text-[40px] md:text-[60px] lg:text-[80px] font-extrabold">HELLO</h1>
          <h2 className="text-[30px] md:text-[45px] lg:text-[60px] font-semibold">
            I M <span className="text-orange-500">Aqsa Waqar</span>
          </h2>
          <h3 className="text-[25px] md:text-[40px] lg:text-[50px] font-semibold text-orange-500">
            Frontend Web Designer
          </h3>
          <p className="text-[16px] md:text-[20px] lg:text-[25px] mt-5 md:mt-8 text-justify md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ipsam amet hic adipisci nam error nobis odio blanditiis. Lorem ipsum dolor sit. Lorem, ipsum. Lorem ipsum dolor, sit amet consectetur adipisicing. Lorem ipsum dolor sit.
          </p>
          <Link href="/contact">
            <button className="border-2 bg-purple-500 p-2 h-[40px] w-[100px] md:h-[50px] md:w-[120px] rounded-md text-[16px] md:text-[20px] text-white hover:border-orange-500 mt-5">
              HIRE ME
            </button>
          </Link>
        </div>

        <div className="h-[200px] w-[200px] md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px] rounded-[25%] flex items-center justify-center mt-5 md:mt-0">
          <Image src="/cv/developer.jpg" alt="img" width={400} height={400} className="rounded-[25%]" />
        </div>
      </div>
    </div>
  );
}
