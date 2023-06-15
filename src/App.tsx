import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootPage from "./pages/RootPage";
import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";
import BooksPage from "./pages/BooksPage";

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
        path: "/books",
        element: <BooksPage />,
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
