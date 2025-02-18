import { ReactNode } from "react";
import { Swiper, SwiperProps } from "swiper/react";
import { A11y, Autoplay, Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import '../../css/swiper.css';

interface SlideSwiperProps {
  settings: SwiperProps;
  children: ReactNode;
}
export default function SwiperSlider ({children, settings}: SlideSwiperProps) {
  return <Swiper modules={[Pagination, A11y, Autoplay]} {...settings}> {children} </Swiper>;
}
