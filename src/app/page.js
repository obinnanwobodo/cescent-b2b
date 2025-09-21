import Image from "next/image";
import Navbar from "@/Components/Navbar/Navbar";
import Hero from "@/Components/Hero/Hero";
import Services from "@/Components/Services/Services";
import Case from "@/Components/Case/Case";
import Insight from "@/Components/Insight/Insight";
import Testimonials from "@/Components/Testimonials/Testimonials";
import About from "@/Components/About/About";
import Process from "@/Components/Process/Process";
import Contact from "@/Components/Contacts/Contact";
import Footer from "@/Components/Footer/Footer";

export default function Home() {
  return (
    <div>

<div id="nav id">
  
<Navbar/>
</div>


<div id="hero">
  <Hero/>
</div>


<div id="service">
  
<Services/>
</div>

<div id="case">
  <Case/>

</div>


<div id="insight">
  <Insight/>
</div>


<div id="testimonials">
  <Testimonials/>
</div>


<div id="about">
  <About/>
</div>


<div id="process">
  <Process/>
</div>



<div id="contact">
  <Contact/>
</div>



<div id="footer">
  <Footer/>
</div>

    </div>
  );
}
