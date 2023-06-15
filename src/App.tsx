import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootPage from "./pages/RootPage";
import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/aboutme',
        element: <AboutMePage />
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
