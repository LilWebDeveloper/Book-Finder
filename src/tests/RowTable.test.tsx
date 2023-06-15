import { render, screen } from "@testing-library/react";
import Row from "../components/BooksList/Row";
import createData from "../utils/CreateData";

test("Row renders the data correctly", () => {
  const row = createData(
    "1",
    "Book Title",
    "Country",
    "Subtitle",
    "2023-06-15",
    ["Author 1", "Author 2"],
    "image.jpg",
    "9.99",
    "USD"
  );

  render(
    <table>
      <tbody>
        <Row row={row} />
      </tbody>
    </table>
  );

  expect(screen.getByText(row.title)).toBeInTheDocument();
  expect(screen.getByText(row.subtitle)).toBeInTheDocument();
  expect(screen.getByText(row.country)).toBeInTheDocument();
});
