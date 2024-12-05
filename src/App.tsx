import Banner from "./pages/Banner";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Banner />
      </Provider>
    </>
  );
}

export default App;
