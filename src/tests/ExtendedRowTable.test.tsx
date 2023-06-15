import { render, screen } from "@testing-library/react";
import ExtendedRow from "../components/BooksList/ExtendedRow";
import createData from "../utils/CreateData";
import { Table } from "@mui/material";

test("ExtendedRow renders the data correctly", () => {
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
    <Table>
        <ExtendedRow row={row} />
    </Table>
  );

  expect(screen.getByText(row.publishedDate)).toBeInTheDocument();
  expect(screen.getByText(row.authors[0])).toBeInTheDocument();
  expect(screen.getByText(row.authors[1])).toBeInTheDocument();
  expect(
    screen.getByText(`${row.price} ${row.currencyCode}`)
  ).toBeInTheDocument();
});
