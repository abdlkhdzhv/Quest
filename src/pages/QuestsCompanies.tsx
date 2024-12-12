import React from 'react'
import { Header } from '../components/HeaderQuestCompany/Header'
import { BodySlider } from '../components/Sliders/BodySlider'
import Card from "../components/questList/Card";
import { AboutSection } from '../components/AboutSection/AboutSection';
import { AboutQuest } from '../components/AboutQuest/AboutQuest';
import { Footer } from '../components/Footer/Footer';
import QuestsInPopular from '../components/PopularQuest/QuestsInPopular';

export const QuestsCompanies = () => {
  return (
    <div>
        <Header />
        <BodySlider />
        <Card />
        <AboutSection />
        <QuestsInPopular />
        <AboutQuest />
        <Footer />
    </div>
  )
}
