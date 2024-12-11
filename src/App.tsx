import { Provider } from "react-redux";
import store from "./redux/store";
import Main from "./pages/Main";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QuestsCompanies } from "./pages/QuestsCompanies";
import { ChoosingQuests } from "./pages/ChoosingQuests";
import BookingList from "./components/BookingList/BookingList";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />
  },
  {
    path: '/choosingQuests',
    element: <ChoosingQuests/>
  },
  {
    path: '/questsCompanies',
    element: <QuestsCompanies />
  },
  {
    path: '/myQuests',
    element: <BookingList />
  }
])

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
