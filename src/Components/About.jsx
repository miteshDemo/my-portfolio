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

// ✅ Import same background images as Home
import darkBg from "../profileImg/react.jpg"; // dark mode image
import lightBg from "../profileImg/reactlight.png"; // light mode image

const MotionTypography = motion(Typography);
const MotionBox = motion(Box);
const MotionGrid = motion(Grid);

const Navbar = () => (
  <AppBar
    position="static"
    sx={{
      background: "linear-gradient(90deg, #1e3c72, #2a5298)",
      boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",
    }}
  >
    <Toolbar sx={{ flexWrap: "wrap", justifyContent: "space-between" }}>
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          color: "white",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        Mitesh's Portfolio
      </Typography>
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        {["Home", "About", "Contact"].map((route) => (
          <Button
            key={route}
            component={Link}
            to={`/${route.toLowerCase()}`}
            sx={{
              fontWeight: "bold",
              textTransform: "none",
              color: "white",
              "&:hover": { color: "#ffd700" },
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
          py: 8,
          position: "relative",
          backgroundImage: `url(${isDarkMode ? darkBg : lightBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Overlay for readability */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bgcolor: isDarkMode ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.6)",
            zIndex: 0,
          }}
        />

        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
          <Paper
            elevation={6}
            sx={{
              p: 4,
              borderRadius: 4,
              bgcolor: isDarkMode ? "rgba(30,30,30,0.9)" : "white",
              backdropFilter: "blur(6px)",
              color: "inherit",
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
                    border: "3px solid #1e90ff",
                    margin: "0 auto",
                    boxShadow: "0px 4px 20px rgba(0,0,0,0.3)",
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
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    color: isDarkMode ? "#00bfff" : "#1e90ff",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  About Me
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mt: 2, fontFamily: "Poppins, sans-serif", fontWeight:"bold" }}
                  paragraph
                >
                  I'm Mitesh, a passionate ReactJS Developer experienced in
                  building scalable, user-friendly web applications using the
                  Frontend stack (HTML | CSS | TailwindCSS | Material UI | Redux
                  | React.js).
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mt: 1, fontFamily: "Poppins, sans-serif", fontWeight:"bold" }}
                  paragraph
                >
                  I focus on clean code, responsive design, and delivering
                  seamless user experiences with attention to performance and
                  maintainability.
                </Typography>
              </MotionGrid>
            </Grid>

            <Divider sx={{ my: 4 }} />

            <MotionBox
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                  color: isDarkMode ? "#00bfff" : "blue",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                GitHub
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 3, fontFamily: "Poppins, sans-serif" }}
              >
                Link:{" "}
                <a
                  href="https://github.com/miteshDemo?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontWeight: "bold",
                    color: isDarkMode ? "#00bfff" : "#1e90ff",
                  }}
                >
                  github.com/miteshDemo
                </a>
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                  color: isDarkMode ? "#00bfff" : "blue",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Skills & Tools
              </Typography>
              <Table sx={{ mb: 4 }}>
                <TableBody>
                  <TableRow>
                    <TableCell
                      sx={{
                        fontWeight: "bold",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      Operating System
                    </TableCell>
                    <TableCell sx={{ fontFamily: "Poppins, sans-serif" }}>
                      Windows
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{
                        fontWeight: "bold",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      Frontend
                    </TableCell>
                    <TableCell sx={{ fontFamily: "Poppins, sans-serif" }}>
                      React, HTML5, CSS3, Tailwind, MUI, React-Router
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{
                        fontWeight: "bold",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      Other Tools
                    </TableCell>
                    <TableCell sx={{ fontFamily: "Poppins, sans-serif" }}>
                      GitHub, VS Code, Vercel-Host-App
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                  color: isDarkMode ? "#00bfff" : "blue",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Hobbies
              </Typography>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell
                      sx={{
                        fontWeight: "bold",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      Sports
                    </TableCell>
                    <TableCell sx={{ fontFamily: "Poppins, sans-serif" }}>
                      Cricket, Volleyball
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{
                        fontWeight: "bold",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      Outdoor
                    </TableCell>
                    <TableCell sx={{ fontFamily: "Poppins, sans-serif" }}>
                      Traveling, Trekking
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{
                        fontWeight: "bold",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      Creative
                    </TableCell>
                    <TableCell sx={{ fontFamily: "Poppins, sans-serif" }}>
                      Videography, Editing Videos & Photos (Mobile)
                    </TableCell>
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
