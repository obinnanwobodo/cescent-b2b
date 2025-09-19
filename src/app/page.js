import Image from "next/image";
import Navbar from "@/Components/Navbar/Navbar";
import Hero from "@/Components/Hero/Hero";
import Services from "@/Components/Services/Services";
import Case from "@/Components/Case/Case";
import Insight from "@/Components/Insight/Insight";

export default function Home() {
  return (
    <div>

<Navbar/>

<Hero/>

<Services/>

<Case/>

<Insight/>

    </div>
  );
}
