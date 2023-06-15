import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootPage from "./pages/RootPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
