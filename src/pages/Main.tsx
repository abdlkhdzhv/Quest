import Card from "../components/questList/Card";
import QuestList from "../components/questList/QuestList";
import Banner from "../components/Banner/Banner";
import { PopularQuest } from "../components/PopularQuest/PopularQuest";
import { AboutQuest } from "../components/AboutQuest/AboutQuest";
import { Footer } from "../components/Footer/Footer";
import { Compilation } from "../components/Compilation/Compilation";
import { AboutSection } from "../components/AboutSection/AboutSection";

function Main() {
  return (
    <>
        <Banner />
        <QuestList />
        <Card />   
        <PopularQuest />
        <AboutQuest />
        <Footer />
        <Compilation />
        <AboutSection />
    </>
  );
}

export default Main;
