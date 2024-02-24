import Podcast from "./component/Podcast/Podcast";
import Buttons from "./component/Buttons/Buttons";
import Allbanner from "./component/Allbanner/Allbanner";

export default function Home() {


  return (
    <main className="  bg-[#191919]">
      <Allbanner></Allbanner>
      <Buttons></Buttons>
      <Podcast first={0} second={5}></Podcast>

    </main>
  );
}
