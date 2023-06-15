import { Breadcrumbs, Link, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import SearchBar from "../components/SearchBar";
import classes from "../styles/BooksPage.module.css";
import { useState } from "react";

function BooksPage() {
  const [bookTitle, setBookTitle] = useState("");

  const search = (bookTitle: string): void => {
    setBookTitle(bookTitle);
  };

  return (
    <div>
      <div>
        <Breadcrumbs
          sx={{ color: "rgb(192, 192, 192)", mt: "1vh" }}
          aria-label="breadcrumb"
        >
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            href="/"
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Home
          </Link>
          <Typography
            sx={{ display: "flex", alignItems: "center" }}
            color="rgb(192, 192, 192)"
          >
            <AutoStoriesIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Books list
          </Typography>
        </Breadcrumbs>
      </div>
      <div className={classes.searchBar}>
        <SearchBar search={search} />
      </div>
    </div>
  );
}

export default BooksPage;
