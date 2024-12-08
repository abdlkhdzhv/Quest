import Card from "../components/questList/Card";
import QuestList from "../components/questList/QuestList";
import BookingList from "../components/questList/BookingList";
import Banner from "../components/Banner/Banner";

function Main() {
  return (
    <>
        <Banner />
        <QuestList />
        <Card />
        <BookingList />     
    </>
  );
}

export default Main;
