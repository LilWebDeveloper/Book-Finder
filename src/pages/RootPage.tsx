import { Outlet } from "react-router-dom";
import classes from "../styles/Root.module.css";
import NavBar from "../components/NavBar/NavBar";
import { Box } from "@mui/material";

function Root() {
  return (
    <>
      <NavBar />
      <Box sx={{ boxShadow: 3 }} className={classes.root}>
        <Outlet />
      </Box>
    </>
  );
}

export default function RootPage() {
  return <Root />;
}
