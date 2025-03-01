"use client";

import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Header from "@/components/sections/header";
import Services from "@/components/sections/services";
import Testimonials from "@/components/sections/testimonials";
import Works from "@/components/sections/works";

const Page = () => {
  return (
    <body>
      <Header/>
      <About/>
      <Services/>
      <Works/>
      <Testimonials/>
      <Contact/>
    </body>
  )
}

export default Page;
