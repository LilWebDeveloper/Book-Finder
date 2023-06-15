import {
  CircularProgress,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import classes from "../../styles/Authors.module.css";
import BooksTable from "../BooksList/BooksTable";
import { LoadingWrapper } from "../../styles/LoadingWrapper";
import { useEffect, useState } from "react";
import axios from "axios";
import { json } from "react-router-dom";
import useDebounce from "../../utils/debounceHooks";

interface BreadcrumbType {
    breadcrumb: (author: string) => void;
  }

function AuthorList(props: BreadcrumbType) {
  const [books, setBooks] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [author, setAuthor] = useState("");

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

  const authorHandle = (author: string): void => {
    setAuthor(author);
  };

  useEffect(() => {
    props.breadcrumb(author)
  }, [props, author])

  return (
    <>
      <ImageListItem className={classes.title} key="Subheader">
        <ListSubheader component="div">Select Author</ListSubheader>
      </ImageListItem>
      <ImageList sx={{ width: "80%", height: "40vh", m: "auto" }} cols={4}>
        {itemData.map((item) => (
          <ImageListItem className={classes.item} key={item.img}>
            <img src={`${item.img}`} alt={item.title} loading="lazy" />
            <ImageListItemBar
              title={item.title}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                  onClick={() => authorHandle(item.title)}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      <BooksTable books={books} />
      {isLoading && (
        <LoadingWrapper>
          <CircularProgress />
        </LoadingWrapper>
      )}
    </>
  );
}

const itemData = [
  {
    img: "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQDY2EBrfJ6oygfb3rSljgdk1aHee5aK1b0RTDBeJOrW13fAoX3H7-GYa7bTs7BIR44",
    title: "Adam Mickiewicz",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/1/17/Juliusz_S%C5%82owacki_1.PNG",
    title: "Juliusz Słowacki",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Zygmunt_Krasi%C5%84ski_portrait.jpg/1200px-Zygmunt_Krasi%C5%84ski_portrait.jpg",
    title: "Zygmunt Krasiński",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Cyprian_Kamil_Norwid_foto.jpg",
    title: "Cyprian Norwid",
  },
];

export default AuthorList;
