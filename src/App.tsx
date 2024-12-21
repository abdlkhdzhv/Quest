import { Provider } from "react-redux";
import store from "./redux/store";
import Main from "./Pages/Main";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QuestsCompanies } from "./Pages/QuestsCompanies";
import BookingList from "./components/BookingList/BookingList";
import RegisterComponent from "./components/Authorization/RegisterComp/RegisterComp";
import { MainAuth } from "./components/Authorization/MainAuth/MainAuth";
import { Entry } from "./components/Authorization/Entry/Entry";
import { Account } from "./components/Authorization/Account/Account";
import QuestCard  from "./components/Card/QuestCard";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />
  },
  {
    path: '/questsCompanies',
    element: <QuestsCompanies />
  },
  {
    path: '/aboutQuest/:id',
    element: <QuestCard />
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
    element: <MainAuth />
  },
  {
    path: '/entry',
    element: <Entry />
  },
  {
    path: '/account',
    element: <Account />
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
