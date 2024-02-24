import Image from "next/image";
import Navbar from "./component/navbar/Navbar";
import Podcast from "./component/Podcast/Podcast";
import Banner from "./component/Banner/Banner";

export default function Home() {
  return (
    <main className="  bg-[#191919]">
     <Banner></Banner>
<Podcast first={0} second={5}></Podcast>
     
    </main>
  );
}
