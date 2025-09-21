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

export default function Home() {
  return (
    <div>

<div>
  
<Navbar/>
</div>


<div>
  <Hero/>
</div>


<div>
  
<Services/>
</div>

<div>
  <Case/>

</div>


<div>
  <Insight/>
</div>


<div>
  <Testimonials/>
</div>


<div>
  <About/>
</div>


<div>
  <Process/>
</div>



<div>
  <Contact/>
</div>

    </div>
  );
}
