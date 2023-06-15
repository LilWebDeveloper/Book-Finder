import { Breadcrumbs, Link, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import PeopleIcon from "@mui/icons-material/People";
import AuthorList from "../components/Authors/AuthorsList";
import { useState } from "react";
import axios from "axios";
import { json } from "react-router-dom";
import useDebounce from "../utils/debounceHooks";

function AuthorsPage() {
  const [books, setBooks] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [author, setAuthor] = useState("");

  const authorHandler = (author: string): void => {
    setAuthor(author);
  };

  const prepareSearchQuery = (query: string) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=inauthor:${query}&maxResults=8&key=AIzaSyApptoYHF7DfR6_GRB5gHZher5Ms72uPek`;

    return encodeURI(url);
  };

  const searchData = async (): Promise<void> => {
    setLoading(true);
    const URL = prepareSearchQuery(author);

    const response = await axios.get(URL).catch((err) => {
      json({ message: "Could not fetch Books", status: 500 });
    });

    if (response) {
      setBooks(response.data.items);
    }

    setLoading(false);
  };

  useDebounce(author, 500, searchData);

  if (author) {
    return (
      <>
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
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              href="/authors"
            >
              <PeopleIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Authors List
            </Link>
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              color="rgb(192, 192, 192)"
            >
              <PersonIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              {author}
            </Typography>
          </Breadcrumbs>
        </div>
        <AuthorList isLoading={isLoading} books={books} breadcrumb={authorHandler} />
      </>
    );
  } else {
    return (
      <>
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
              <PeopleIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Authors List
            </Typography>
          </Breadcrumbs>
        </div>
        <AuthorList isLoading={isLoading} books={books} breadcrumb={authorHandler} />
      </>
    );
  }
}

export default AuthorsPage;
