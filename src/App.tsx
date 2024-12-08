import { Provider } from "react-redux";
import store from "./redux/store";
import  Main  from "./pages/Main";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { QuestsCompanies } from "./pages/QuestsCompanies";
// import { ChoosingQuests } from "./pages/ChoosingQuests";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />
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
