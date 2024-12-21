import Card from "../components/Card/Card";
import QuestList from "../components/QuestList/QuestList";
import Banner from "../components/Banner/Banner";

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
        <AboutQuest />
        <Footer />
        <Compilation />
        <AboutSection />
    </>
  );
}

export default Main;
