import Image from "next/image";

export default function Skill() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image with Blur */}
      <Image
        src="/cv/skills.jpg"
        alt="Background showcasing skills"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 -z-10 filter blur-md"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 -z-10"></div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-5 md:px-10">
        <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-semibold mb-10">
          Our Skills
        </h1>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10">
          <div className="flex flex-col items-center">
            <Image
              src="/cv/html.png"
              alt="HTML logo"
              height={150}
              width={150}
              className="rounded-full"
            />
            <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mt-4">HTML</h1>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/cv/css3-emblem-blue-shield-and-white-text-vector.jpg"
              alt="CSS logo"
              height={150}
              width={150}
              className="rounded-full"
            />
            <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mt-4">CSS</h1>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/cv/canva.jpg"
              alt="Canva logo"
              height={150}
              width={150}
              className="rounded-full"
            />
            <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mt-4">CANVA</h1>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/cv/png-transparent-typescript-hd-logo-thumbnail.png"
              alt="TypeScript logo"
              height={150}
              width={150}
              className="rounded-full"
            />
            <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mt-4">TypeScript</h1>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/cv/next.jpg"
              alt="Next.js logo"
              height={150}
              width={150}
              className="rounded-full"
            />
            <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mt-4">NEXT.JS</h1>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/cv/shedcn.png"
              alt="SHEDcn logo"
              height={150}
              width={150}
              className="rounded-full"
            />
            <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mt-4">SHEDcn</h1>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/cv/png-transparent-figma-app-logo-tech-companies-thumbnail.png"
              alt="Figma logo"
              height={150}
              width={150}
              className="rounded-full"
            />
            <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mt-4">FIGMA</h1>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/cv/javascript_logo.png"
              alt="JavaScript logo"
              height={150}
              width={150}
              className="rounded-full"
            />
            <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mt-4">JavaScript</h1>
          </div>
        </div>
      </div>
    </div>
  );
}


