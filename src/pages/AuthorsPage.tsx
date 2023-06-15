import { Breadcrumbs, Link, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import PeopleIcon from '@mui/icons-material/People';
import AuthorList from "../components/Authors/AuthorList";
import { useState } from "react";

function AuthorsPage() {
  const [breadcrumb, setBreadcrumb] = useState("");

  const breadcrumbHandler = (author: string): void => {
    setBreadcrumb(author);
  };

  if (breadcrumb) {
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
              {breadcrumb}
            </Typography>
          </Breadcrumbs>
        </div>
        <AuthorList breadcrumb={breadcrumbHandler} />
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
        <AuthorList breadcrumb={breadcrumbHandler} />
      </>
    );
  }
}

export default AuthorsPage;
