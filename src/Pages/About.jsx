import Hero from "../components/hero/Hero";
import OurMission from "../components/about-page/who-we-are/OurMission";
import History from "../components/about-page/history/History";
import CircularText from "../components/about-page/who-we-are/MovingText";
function About() {
  return (
    <main>

      <CircularText />
      <OurMission />
      <History />
    </main>
  );
}

export default About;
