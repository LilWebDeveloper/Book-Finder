import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import createData from "../../utils/CreateData";
import Row from "./Row";
import { BookType } from "../../interfaces/Book";

function BooksTable(books: { books: BookType[] }) {
  const items = books.books;

  if (items.length !== 0) {
    const rows = items.map((book) =>
      createData(
        book.id,
        book.volumeInfo.title,
        book.saleInfo.country,
        book.volumeInfo?.subtitle || "No Subtitle",
        book.volumeInfo.publishedDate,
        book.volumeInfo.authors,
        book.volumeInfo?.imageLinks?.smallThumbnail,
        book.saleInfo?.listPrice?.amount || "No",
        book.saleInfo?.listPrice?.currencyCode || "Price"
      )
    );

    return (
      <TableContainer
        sx={{ mt: "2vh", borderRadius: "15px" }}
        component={Paper}
      >
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#1976d5" }}>
              <TableCell />
              <TableCell sx={{ fontWeight: "bold" }}>Title</TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="left">
                Cover
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="left">
                Subtitle
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="left">
                Country
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.id} row={row}/>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  } else
    return (
      <Box sx={{ textAlign: "center", mt: "15vh" }}>
        <h3>Table of books will be displayed here :)</h3>
      </Box>
    );
}

export default BooksTable;
