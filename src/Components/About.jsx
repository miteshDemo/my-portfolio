import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Avatar,
  Divider,
  Grid,
  Paper,
  AppBar,
  Toolbar,
  Button,
  Table,
  TableBody,
  TableCell,
  TableRow,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import profileImg from "../profileImg/mitesh_img.jpg"; 

const MotionTypography = motion(Typography);
const MotionBox = motion(Box);
const MotionGrid = motion(Grid);

const Navbar = () => (
  <AppBar position="static" sx={{ backgroundColor: "blue" }}>
    <Toolbar sx={{ flexWrap: "wrap", justifyContent: "space-between" }}>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Mitesh's Portfolio
      </Typography>
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        {["Home", "About", "Contact"].map((route) => (
          <Button
            key={route}
            component={Link}
            to={`/${route.toLowerCase()}`}
            color="inherit"
            sx={{
              fontWeight: "bold",
              textTransform: "none",
              transition: "all 0.3s ease",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            {route}
          </Button>
        ))}
      </Box>
    </Toolbar>
  </AppBar>
);

const About = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <>
      <Navbar />

      <MotionBox
        sx={{
          minHeight: "calc(100vh - 64px)",
          backgroundColor: isDarkMode ? "#121212" : "#f9f9f9",
          py: 8,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Container maxWidth="md">
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 4,
              backgroundColor: isDarkMode ? "#1e1e1e" : "#fff",
              color: isDarkMode ? "white" : "inherit",
            }}
          >
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} sm={4}>
                <Avatar
                  alt="Mitesh"
                  src={profileImg}
                  sx={{
                    width: 150,
                    height: 150,
                    border: "3px solid blue",
                    margin: "0 auto",
                  }}
                />
              </Grid>

              <MotionGrid
                item
                xs={12}
                sm={8}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Typography variant="h4" sx={{ fontWeight: "bold", color: "blue" }}>
                  About Me
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: "bold", color: "white" }} paragraph>
                  I'm Mitesh, a passionate ReactJS Developer experienced in building scalable, user-friendly web applications using the Frontend stack (HTML | CSS | TailwindCSS | Material UI | Redux | React.js).
                </Typography>
                <Typography variant="body1"sx={{ fontWeight: "bold", color: "white" }} paragraph>
                  I focus on clean code, responsive design, and delivering seamless user experiences with attention to performance and maintainability.
                </Typography>
              </MotionGrid>
            </Grid>

            <Divider sx={{ my: 4 }} />

            <MotionBox
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                GitHub
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Link:{" "}
                <a
                  href="https://github.com/miteshDemo?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ fontWeight : "bold"}}
                >
                  github.com/miteshDemo
                </a>
              </Typography>

              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                Skills & Tools
              </Typography>
              <Table sx={{ mb: 4 }}>
                <TableBody>
                  <TableRow>
                    <TableCell>Operating System</TableCell>
                    <TableCell>Windows</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Frontend</TableCell>
                    <TableCell>React, HTML5, CSS3, Tailwind, MUI, React-Router</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Other Tools</TableCell>
                    <TableCell>GitHub, VS Code, Vercel-Host-App</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                Hobbies
              </Typography>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Sports</TableCell>
                    <TableCell>Cricket, Volleyball</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Outdoor</TableCell>
                    <TableCell>Traveling, Trekking</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Creative</TableCell>
                    <TableCell>Videography, Editing Videos & Photos(Mobile)</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </MotionBox>
          </Paper>
        </Container>
      </MotionBox>
    </>
  );
};

export default About;
