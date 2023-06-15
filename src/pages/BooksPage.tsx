import { Breadcrumbs, CircularProgress, Link, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import SearchBar from "../components/SearchBar";
import classes from "../styles/BooksPage.module.css";
import { useState } from "react";
import { LoadingWrapper } from "../styles/LoadingWrapper";
import { json } from "react-router-dom";
import useDebounce from "../utils/debounceHooks";
import axios from 'axios'
import BooksList from "../components/BooksList/BooksList";

function BooksPage() {
  const [bookTitle, setBookTitle] = useState("");
  const [books, setBooks] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const search = (bookTitle: string): void => {
    setBookTitle(bookTitle);
  };

  const prepareSearchQuery = (query: string) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${query}&maxResults=8&key=AIzaSyApptoYHF7DfR6_GRB5gHZher5Ms72uPek`;

    return encodeURI(url);
  };

  const searchData = async (): Promise<void> => {
    setLoading(true);
    const URL = prepareSearchQuery(bookTitle);

    const response = await axios.get(URL).catch((err) => {
      json({ message: "Could not fetch Books", status: 500 });
    });

    if (response) {
      setBooks(response.data.items);
    }

    setLoading(false);
  };

  useDebounce(bookTitle, 500, searchData);

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
      <BooksList books={books} />
      {isLoading && (
        <LoadingWrapper>
          <CircularProgress />
        </LoadingWrapper>
      )}
    </div>
  );
}

export default BooksPage;
