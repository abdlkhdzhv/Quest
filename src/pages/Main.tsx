import Banner from "../pages/Banner";
import Card from "../components/questList/Card";
import QuestList from "../components/questList/QuestList";
import BookingList from "../components/questList/BookingList";

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
