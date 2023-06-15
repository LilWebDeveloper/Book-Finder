import { screen, render } from "@testing-library/react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Row from "../components/BooksList/Row";

const row = {
  id: "1",
  title: "Lalka",
  country: "PL",
  subtitle: "No Subtitle",
  publishedDate: "1985",
  authors: ["Bolesław Prus"],
  img: "No Cover",
  price: "15.5",
  currencyCode: "PLN",
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Row key={row.id} row={row} />}></Route>
  )
);

test("Render rows table", async () => {
  render(<RouterProvider router={router} />);

  const tableBodyElement = screen.getByRole("rows");
  expect(tableBodyElement).toHaveTextContent(row.title);
  expect(tableBodyElement).toHaveTextContent(row.subtitle);
  expect(tableBodyElement).toHaveTextContent(row.country);
});
