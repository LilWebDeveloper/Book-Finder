import { TableBody, TableCell, TableRow } from "@mui/material";
import createData from "../../utils/CreateData";

export default function ExtendedRow(row: { row: ReturnType<typeof createData>; }) {
    const data = row.row
  return (
    <TableBody role={"extended-rows"}>
      <TableRow key={data.id}>
        <TableCell component="th" scope="row">
          <p>{data.id}</p>
        </TableCell>
        <TableCell>{data.publishedDate}</TableCell>
        <TableCell align="left">
          {data.authors.map((author) => (
            <p key={author}>{author} </p>
          ))}
        </TableCell>
        <TableCell align="left">
          <p>
            {data.price} {data.currencyCode}
          </p>
        </TableCell>
      </TableRow>
    </TableBody>
  );
}
