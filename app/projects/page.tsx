"use client";
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { TbArrowBarToRight } from "react-icons/tb";
import Link from 'next/link';
import Image from 'next/image';
import styles from "../projects/project.module.css";

export default function Project() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="bg-[#191919] flex flex-col justify-center items-center py-8">
      <h1 className="text-purple-500 text-6xl md:text-8xl font-bold mb-10">OUR PROJECTS</h1>
      
      {/* Embla Carousel */}
      <div className={`${styles.embla} ${styles.main}`} ref={emblaRef}>
        <div className={styles.embla__container}>
          
          
          <div className={styles.embla__slide}>
            <Link href="cv/panacloud.html">
              <div className="text-white flex justify-center items-center">
                <Image
                  src="/cv/screenshot-pana.png"
                  alt="Panacloud Project"
                  height={320}
                  width={320}
                  className={styles.miles1}
                />
              </div>
            </Link>

            <Link href="https://www.figma.com/proto/CZZRjCAOWmG9uoQ0WqBGyw/Untitled">
              <div className="text-white flex justify-center items-center">
                <Image
                  src="/cv/WhatsApp Image 2024-11-07 at 04.29.58_0240609f.jpg"
                  alt="Figma Prototype"
                  height={200}
                  width={200}
                  className={styles.miles1}
                />
              </div>
            </Link>

            <Link href="cv/RESUME BUILDER.html">
              <div className="text-white flex justify-center items-center">
                <Image
                  src="/cv/blur-resume-pic.jpeg"
                  alt="Resume Builder Project"
                  height={300}
                  width={300}
                  className={styles.miles1}
                />
              </div>
            </Link>
          </div>
          
         
          <div className={styles.embla__slide}>
            <Link href="https://docs.google.com/presentation/d/1br8BF2W5r8oHRH8US01FyJM3-VW7hLBUWJ4nPuUTE-Y/edit?usp=sharing">
              <div className="text-white flex justify-center items-center">
                <Image
                  src="/cv/WhatsApp Image 2024-11-07 at 04.44.02_274f5971.jpg"
                  alt="Google Presentation Project"
                  height={200}
                  width={200}
                  className={styles.miles1}
                />
              </div>
            </Link>

            <Link href="cv/Aqsa resume.html">
              <div className="text-white flex justify-center items-center">
                <Image
                  src="/cv/Screenshot_7-11-2024_8414_.jpeg"
                  alt="Aqsa Resume Project"
                  height={350}
                  width={350}
                  className={styles.miles1}
                />
              </div>
            </Link>

            <Link href="cv/calculater.html">
              <div className="text-white flex justify-center items-center">
                <Image
                  src="/cv/cal.jpeg"
                  alt="Calculator Project"
                  height={250}
                  width={250}
                  className={styles.miles1}
                />
              </div>
            </Link>
          </div>
          
        
          <div className={styles.embla__slide}>
            <Link href="cv/form.html">
              <div className="text-white flex justify-center items-center">
                <Image
                  src="/cv/resume-form1.jpeg"
                  alt="Resume Form Project"
                  height={350}
                  width={350}
                  className={styles.miles1}
                />
              </div>
            </Link>

            <Link href="cv/panacloud.html">
              <div className="text-white flex justify-center items-center">
                <Image
                  src="/cv/screenshot-pana.png"
                  alt="Panacloud Project"
                  height={320}
                  width={320}
                  className={styles.miles1}
                />
              </div>
            </Link>

          </div>
        </div>
      </div>

      
      <button className="bg-purple-500 w-56 rounded-2xl mt-6 text-2xl font-bold flex items-center justify-center gap-2 py-2 text-white hover:bg-purple-600 transition-all">
        See more <TbArrowBarToRight />
      </button>
    </div>
  );
}
