import Image from "next/image";
import Navbar from "./component/navbar/Navbar";
import Podcast from "./component/Podcast/Podcast";
import Banner from "./component/Banner/Banner";
import Buttons from "./component/Buttons/Buttons";
import LoggedBanner from "./component/LoggedBanner/LoggedBanner";

export default function Home() {
  let user = true
  return (
    <main className="  bg-[#191919]">
      {user ? <LoggedBanner></LoggedBanner>  :<Banner></Banner>  }
      <Buttons></Buttons>
      <Podcast first={0} second={5}></Podcast>

    </main>
  );
}
