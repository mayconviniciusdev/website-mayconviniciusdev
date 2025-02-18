import SwiperSlider from "../ui/swiperSlider";
import { SwiperProps, SwiperSlide } from "swiper/react";

import Image from 'next/image';
import backgroundImage from '../../../public/backgroundImage.png'
import logoWhite from '../../../public/logoWhite.png'

export default function About() {
  const settings: SwiperProps = {
    slidesPerView: 1,
    pagination: {clickable: true},
    autoplay: true,
  }
  return (
    <div>
      <SwiperSlider settings={settings}>
        <SwiperSlide>
          <div 
          style={{position: 'relative', width: '100%', height: '630px'}}>
            <Image
            src={backgroundImage}
            alt="Banner"
            quality={100}
            layout="fill"
            objectFit="cover"/>
            
            <div 
            style={{position: 'absolute', width: '150px', height: '150px',
            top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
              <Image
              src={logoWhite}
              alt="Logo"
              quality={100}
              layout="fill"
              objectFit="contain"/>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div 
          style={{position: 'relative', width: '100%', height: '630px'}}>
              <Image
              src={backgroundImage}
              alt="Banner"
              quality={100}
              layout="fill"
              objectFit="cover"/>
              
              <div 
              style={{position: 'absolute', top: '50%',
              left: '50%', transform: 'translate(-50%, -50%)'}}>
                <div className=' text-white text-xl font-bold'>
                  <h2>Programação,</h2>
                  <h2>Desenvolvimento e </h2>
                  <h2>Tecnologia!</h2>
                </div>
              </div>
          </div>
        </SwiperSlide>
      </SwiperSlider>


    </div>
  );
}