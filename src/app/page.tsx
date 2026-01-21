"use client";

import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import Services from "@/components/sections/services";
import Testimonials from "@/components/sections/testimonials";
import Works from "@/components/sections/works";

const Page = () => {
  return (
    <body>
      <Header/>
      <About/>
      <Works/>
      <Services/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </body>
  )
}

export default Page;
