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
import { BookType } from "../../interfaces/Book";

interface BreadcrumbType {
  breadcrumb: (author: string) => void;
  books: BookType[];
  isLoading: boolean;
}

function AuthorList(props: BreadcrumbType) {
  

  
  return (
    <>
      <ImageListItem className={classes.title} key="Subheader">
        <ListSubheader component="div">Select Author</ListSubheader>
      </ImageListItem>
      <ImageList
        sx={{ maxWidth: {sm: '90%', md: '50%'}, height: "50vh", m: "auto" }}
        cols={4}
        role={"imgDisplay"}
      >
        {authors.map((author) => (
          <ImageListItem className={classes.item} key={author.img}>
            <img src={`${author.img}`} alt={author.title} loading="lazy" />
            <ImageListItemBar
              title={author.title}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${author.title}`}
                  onClick={() => props.breadcrumb(author.title)}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      <BooksTable books={props.books} />
      {props.isLoading && (
          <LoadingWrapper>
            <CircularProgress />
          </LoadingWrapper>
        )}
    </>
  );
}

export const authors = [
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
