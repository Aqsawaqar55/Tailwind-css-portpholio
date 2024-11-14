import Image from 'next/image';
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaFacebookMessenger, FaLinkedin } from "react-icons/fa6";
import { SiVercel } from "react-icons/si";

export default function About() {
  return (
    <div className="relative w-full min-h-screen">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/cv/AdobeStock_964804641_Preview.jpeg"
          alt="Background image"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative flex flex-col items-center justify-center h-full text-center px-5 md:px-10 lg:px-20">
        <h1 className="text-orange-500 text-4xl md:text-5xl font-extrabold hover:text-purple-500 mt-10">
          ABOUT US
        </h1>
        
        <p className="text-white text-lg md:text-xl lg:text-2xl font-bold mt-6 max-w-3xl leading-relaxed">
          I’m a passionate frontend developer with a knack for crafting engaging
          and responsive user interfaces. Skilled in HTML, CSS, JavaScript, and
          TypeScript, I work with frameworks like React and Next.js to bring
          ideas to life on the web. My approach emphasizes clean code, usability,
          and aesthetic appeal to ensure every project is both functional and visually
          inviting. I’m always excited to learn, especially in areas like UX/UI design
          and emerging frontend technologies. Outside of coding, I enjoy exploring
          graphic design, which brings a creative touch to my development work.
        </p>

        <div className="flex gap-6 mt-10">
          <a href="https://www.facebook.com/AqsaAshraf" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className="h-12 w-12 text-white hover:text-orange-500 transition-colors duration-300" />
          </a>
          <a href="https://m.me/AqsaAshraf" target="_blank" rel="noopener noreferrer" aria-label="Messenger">
            <FaFacebookMessenger className="h-12 w-12 text-white hover:text-orange-500 transition-colors duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/AqsaWaqar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="h-12 w-12 text-white hover:text-orange-500 transition-colors duration-300" />
          </a>
          <a href="https://github.com/Aqsawaqar55" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="h-12 w-12 text-white hover:text-orange-500 transition-colors duration-300" />
          </a>
          <a href="https://vercel.com/Aqsawaqar55" target="_blank" rel="noopener noreferrer" aria-label="Vercel">
            <SiVercel className="h-12 w-12 text-white hover:text-orange-500 transition-colors duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
}
