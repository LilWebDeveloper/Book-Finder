import { Box, Breadcrumbs, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

function HomePage() {
  return (
    <>
      <div>
        <Breadcrumbs
          sx={{ color: "rgb(192, 192, 192)", mt: "1vh" }}
          aria-label="breadcrumb"
        >
          <Typography
            sx={{ display: "flex", alignItems: "center" }}
            color="rgb(192, 192, 192)"
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Home
          </Typography>
        </Breadcrumbs>
      </div>
      <Box
        sx={{
          maxWidth: { sm: "90%", md: "50%" },
          textAlign: "center",
          m: 'auto',
          pt: "4vh",
        }}
      >
        <h1>Welcome to BookFinder</h1>
      </Box>
      <Box
        sx={{
          maxWidth: { sm: "90%", md: "50%" },
          textAlign: "justify",
          m: "auto",
        }}
      >
        <h3>
          BookFinder is a user-friendly website that utilizes the Google Books
          API to help you search and discover books. With a vast database of
          titles, it allows you to explore a wide range of genres, authors, and
          subjects. BookFinder provides a simple and intuitive interface,
          enabling you to easily enter book titles to initiate your search. The
          website returns comprehensive results, displaying relevant book
          details such as the cover image, synopsis, publication information.
          Whether you're a bookworm or simply seeking a specific title,
          BookFinder serves as a valuable tool to explore and find the perfect
          book for your reading pleasure.
        </h3>
      </Box>
    </>
  );
}

export default HomePage;
