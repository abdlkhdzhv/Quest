import { Provider } from "react-redux";
import store from "./redux/store";
import Main from "./pages/Main";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QuestsCompanies } from "./pages/QuestsCompanies";
import { ChoosingQuests } from "./pages/ChoosingQuests";
import BookingList from "./components/BookingList/BookingList";
import AuthComponent from "./components/Authorization/AuthComponent";
import RegisterComponent from "./components/Authorization/RegisterComp.tsx/RegisterComp";

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
  },
  {
    path: '/regist',
    element: <RegisterComponent />
  },
  {
    path: '/auth',
    element: <AuthComponent />
  },
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
