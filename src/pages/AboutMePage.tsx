import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";

function AboutMePage() {
  return (
    <div>
      <Breadcrumbs sx={{ color: "rgb(192, 192, 192)", mt: "1vh" }} aria-label="breadcrumb">
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
          <InfoIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          About me
        </Typography>
      </Breadcrumbs>
      <Box sx={{ m: "auto", maxWidth: {sm: '90%', md: '50%'} }}>
        <h1>Hi, I'm Kacper</h1>
        <h3>
          Motivated and aspiring programmer seeking a trainee or junior react
          developer position in a dynamic organization to kick-start my career
          in software development. With a solid foundation in programming
          fundamentals and a strong desire to learn and grow, I am eager to
          contribute to a team and gain practical experience in a professional
          setting. Passionate fast car hobbyist.
        </h3>
        <h3>
          I wanted invite you to explore a project that I have been working on
          recently. I believe that your expertise and insights would be valuable
          in further developing and refining this project. The project, titled&nbsp;
          <Link href="https://github.com/LilWebDeveloper/TakfornyingApp" underline="always">
            {'Takfornying - Management Web Application'}
          </Link>
          , is focused on React Framework and Express.js. I have put
          considerable effort into building a robust and functional solution,
          and I am excited to share it with professionals like you who have a
          keen interest in writing code :)
        </h3>
      </Box>
    </div>
  );
}

export default AboutMePage;
