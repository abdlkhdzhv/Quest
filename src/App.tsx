import Banner from "./pages/Banner";
import { Provider } from "react-redux";
import store from "./redux/store";
import Card from "./components/questList/Card";
import QuestList from "./components/questList/QuestList";
import BookingList from "./components/questList/BookingList"

function App() {
  return (
    <>
      <Provider store={store}>
        <Banner />
        <QuestList />
        <Card />
        <BookingList />
      </Provider>
    </>
  );
}

export default App;
