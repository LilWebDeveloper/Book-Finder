import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import capitalizeFirst from "../../utils/CapitalizeFirst";
import { Fragment, useState } from "react";
import createData from "../../utils/CreateData";
import ExtendedRow from "./ExtendedRow";

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  let bgColor = "white";
  let lettersBold = "normal";

  if (open) {
    bgColor = "#1976d5";
    lettersBold = "bold";
  }

  return (
    <Fragment>
      <TableRow
        role={"rows"}
        sx={{
          backgroundColor: bgColor,
          "& > *": { borderBottom: "unset" },
        }}
      >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ fontWeight: lettersBold }}>
          <p>{row.title}</p>
        </TableCell>
        <TableCell align="left">
          {row.img ? (
            <img src={row.img} alt={row.title} height={75} />
          ) : (
            "No Cover"
          )}
        </TableCell>
        <TableCell align="left" sx={{ fontWeight: lettersBold }}>
          <p>{capitalizeFirst(row.subtitle)}</p>
        </TableCell>
        <TableCell align="left" sx={{ fontWeight: lettersBold }}>
          <p>{row.country}</p>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>Id</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      Publish Date
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} align="left">
                      Authors
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} align="left">
                      Price
                    </TableCell>
                  </TableRow>
                </TableHead>
                <ExtendedRow row={row}/>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
}

export default Row;
