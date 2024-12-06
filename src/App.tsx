import Banner from "./pages/Banner";
import { Provider } from "react-redux";
import store from "./redux/store";
import Card from "./components/questList/Card";
import QuestList from "./components/questList/QuestList";

function App() {
  return (
    <>
      <Provider store={store}>
        <Banner />
        <QuestList />
        <Card />
      </Provider>
    </>
  );
}

export default App;
