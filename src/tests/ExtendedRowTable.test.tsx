import { screen, render } from "@testing-library/react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ExtendedRow from "../components/BooksList/ExtendedRow";

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
    <Route path="/" element={<ExtendedRow row={row} />}></Route>
  )
);

test("Render extended rows table", async () => {
  render(<RouterProvider router={router} />);

  const tableBodyElement = screen.getByRole("extended-rows");
  expect(tableBodyElement).toHaveTextContent(row.id);
  expect(tableBodyElement).toHaveTextContent(row.publishedDate);
  expect(tableBodyElement).toHaveTextContent(row.authors[0]);
  expect(tableBodyElement).toHaveTextContent(row.price);
  expect(tableBodyElement).toHaveTextContent(row.currencyCode);
});
