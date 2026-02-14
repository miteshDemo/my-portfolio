import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  AppBar,
  Toolbar,
  Paper,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import CodeIcon from "@mui/icons-material/Code";

// ✅ Import the same background images used in Start page
import darkBg from "../profileImg/react.jpg";       // dark mode image
import lightBg from "../profileImg/reactlight.png"; // light mode image

// Motion-enhanced components
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionGrid = motion(Grid);
const MotionCard = motion(Card);

const projects = [
  {
    title: "Modern-Notes",
    description:
      "A responsive web-based Notes Application that allows users to create, edit, delete, and organize notes efficiently. The app includes features like category-based color coding, pin/unpin notes, search functionality, dark/light mode toggle, character counter, trash management with restore and permanent delete options, and localStorage data persistence. Designed with a clean UI and smooth user experience to demonstrate strong JavaScript, DOM manipulation, and front-end development skills.",
    techStack: "HTML, CSS & Javascript",
    link: "https://modern-notes27.vercel.app/",
    githubLink : "https://github.com/miteshDemo/Modern-Notes"
  }
];

const Navbar = () => (
  <AppBar
    position="static"
    sx={{
      background: "linear-gradient(90deg, #1e3c72, #2a5298)",
      boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",
    }}
  >
    <Toolbar sx={{ flexWrap: "wrap", justifyContent: "space-between" }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", color: "white", fontFamily: "Poppins, sans-serif", letterSpacing: "2px" }}>
        Mitesh's Portfolio
      </Typography>
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        {["about", "contact"].map((route) => (
          <Button
            key={route}
            component={Link}
            to={`/${route}`}
            sx={{
              fontWeight: "bold",
              textTransform: "none",
              color: "white",
              "&:hover": { color: "#ffd700" },
            }}
          >
            {route.charAt(0).toUpperCase() + route.slice(1)}
          </Button>
        ))}
      </Box>
    </Toolbar>
  </AppBar>
);

const Home = ({ mode }) => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <MotionBox
        sx={{
          minHeight: "calc(100vh - 64px)",
          py: 8,
          position: "relative",
          backgroundImage: `url(${mode === "dark" ? darkBg : lightBg})`,
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
            bgcolor: mode === "dark"
              ? "rgba(0,0,0,0.6)"
              : "rgba(255,255,255,0.6)",
            zIndex: 0,
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Paper
            elevation={6}
            sx={{
              p: 4,
              borderRadius: 4,
              bgcolor: mode === "dark" ? "rgba(30,30,30,0.9)" : "white",
              backdropFilter: "blur(6px)",
              color: "inherit",
            }}
          >

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <MotionTypography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  fontFamily: "Poppins, sans-serif",
                  color: mode === "dark" ? "#00bfff" : "#1e90ff",
                  letterSpacing: "2px"
                }}
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                🚀 My Projects
              </MotionTypography>

              <Button
                variant="outlined"
                color="primary"
                onClick={() => navigate("/")}
                sx={{ borderRadius: "20px", px: 3, fontWeight: "bold", fontFamily: "Poppins, sans-serif" }}
              >
                Back
              </Button>
            </Box>

            <Divider sx={{ mb: 4 }} />

            <Grid container spacing={3} justifyContent="center">
              {projects.map((project, index) => (
                <MotionGrid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={index}
                  sx={{ display: "flex" }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 * index, duration: 0.6 }}
                >
                  <MotionCard
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      borderRadius: 3,
                      bgcolor:
                        mode === "dark" ? "rgba(50,50,50,0.9)" : "white",
                      boxShadow: "0px 6px 20px rgba(0,0,0,0.2)",
                      transition: "all 0.3s ease",
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <CodeIcon color="primary" />
                        <Typography variant="h6" sx={{ fontWeight: "bold", fontFamily: "Poppins, sans-serif" }}>
                          {project.title}
                        </Typography>
                      </Box>
                      <Typography variant="body2" sx={{ mt: 1, fontFamily: "Poppins, sans-serif" }}>
                        {project.description}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ mt: 1, display: "block", color: "text.secondary", fontFamily: "Poppins, sans-serif" }}
                      >
                        Tech Stack : {project.techStack}
                      </Typography>
                    </CardContent>

                    <CardActions>
                      <Button
                        size="small"
                        variant="contained"
                        sx={{
                          fontFamily: "Poppins, sans-serif",
                          borderRadius: "20px",
                          fontWeight: "bold",
                          textTransform: "none",
                          background: "linear-gradient(90deg,#1e90ff,#00bfff)",
                          "&:hover": {
                            background: "linear-gradient(90deg,#00bfff,#1e90ff)",
                          },
                        }}
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </Button>
                      <Button
                        size="small"
                        variant="contained"
                        sx={{
                          fontFamily: "Poppins, sans-serif",
                          borderRadius: "20px",
                          fontWeight: "bold",
                          textTransform: "none",
                          background: "linear-gradient(90deg,#1e90ff,#00bfff)",
                          "&:hover": {
                            background: "linear-gradient(90deg,#00bfff,#1e90ff)",
                          },
                        }}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github
                      </Button>
                    </CardActions>
                  </MotionCard>
                </MotionGrid>
              ))}
            </Grid>
          </Paper>
        </Container>
      </MotionBox>
    </>
  );
};

export default Home;
