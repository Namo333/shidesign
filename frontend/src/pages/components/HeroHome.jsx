import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

import Case1 from '../../assets/img/case 01.svg'
import Case2 from '../../assets/img/case 02.svg'
import Case3 from '../../assets/img/case 03.svg'
import Case4 from '../../assets/img/case 04.svg'
import Case5 from '../../assets/img/case 05.svg'

const HeroHome = () => (
  <section className="flex flex-col items-center py-12 md:py-20">
    <h1 className="max-w-3xl text-center text-3xl md:text-5xl font-normal leading-relaxed md:mb-8">
      Мы не студия, <br /> но дизайнить умеем
    </h1>

    <main className='flex flex-col gap-[28px]'>
      <div className="w-full">
        <LazyLoadImage className="w-full" effect="blur" src={Case1} alt="case1" />
      </div>
      
      <div className="w-full flex flex-col sm:flex-row gap-[28px]">
        <div className="w-full sm:w-2/3">
          <LazyLoadImage className="w-full  object-cover h-full" effect="blur" src={Case2} alt="case2" />
        </div>
        <div className="w-full sm:w-1/3">
          <LazyLoadImage className="w-full object-cover h-full" effect="blur" src={Case3} alt="case3" />
        </div>
      </div>

      <div className="w-full flex flex-col sm:flex-row gap-[28px]">
        <div className="w-full sm:w-1/2">
          <LazyLoadImage className="w-full object-cover h-full" effect="blur" src={Case4} alt="case4" />
        </div>
        <div className="w-full sm:w-1/2">
          <LazyLoadImage className="w-full object-cover h-full" effect="blur" src={Case5} alt="case5" />
        </div>
      </div>
    </main>
  </section>
);

export default HeroHome;