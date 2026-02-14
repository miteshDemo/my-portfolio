import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Avatar,
  AppBar,
  Toolbar,
  CircularProgress,
  IconButton,
} from "@mui/material";
import darkBg from "../profileImg/react.jpg";
import lightBg from "../profileImg/reactlight.png";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import profileImg from "../profileImg/mitesh_img.jpg";

const MotionTypography = motion(Typography);
const MotionBox = motion(Box);

const Start = ({ toggleMode, mode }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRedirect = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  };

  return (
    <>
      {/* Stylish AppBar */}
      <AppBar
        position="static"
        sx={{
          background:
            mode === "dark"
              ? "linear-gradient(90deg, #001f3f, #0074D9)"
              : "linear-gradient(90deg, #87CEFA, #1E90FF)",
          boxShadow:
            mode === "dark"
              ? "0px 0px 15px rgba(0,191,255,0.7)"
              : "0px 4px 10px rgba(0,0,0,0.2)",
          transition: "all 0.5s ease",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <MotionTypography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontFamily: "Poppins, sans-serif",
              letterSpacing: "2px",
            }}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Mitesh's Portfolio
          </MotionTypography>

          <Button
            onClick={toggleMode}
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#fff",
              fontWeight: "bold",
              fontFamily: "Poppins, sans-serif",
              borderRadius: "20px",
              px: 2,
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.15)",
                borderColor: "#fff",
              },
            }}
            startIcon={mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          >
            {mode === "dark" ? "Light"  : "Dark" }
          </Button>
        </Toolbar>
      </AppBar>

      {/* Smooth Fade-in Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Box
          sx={{
            minHeight: "calc(100vh - 64px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "text.primary",
            paddingY: 8,
            position: "relative",
            overflow: "hidden",
            backgroundImage: `url(${mode === "dark" ? darkBg : lightBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Container
            maxWidth="md"
            sx={{ textAlign: "center", position: "relative", zIndex: 1 }}
          >
            {/* Floating Avatar */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Avatar
                alt="Mitesh"
                src={profileImg}
                sx={{
                  width: 200,
                  height: 200,
                  margin: "0 auto",
                  marginBottom: 2,
                  border:
                    mode === "dark" ? "4px solid #00bfff" : "4px solid #1e90ff",
                  boxShadow:
                    mode === "dark"
                      ? "0px 0px 25px rgba(0,191,255,0.8)"
                      : "0px 4px 20px rgba(0,0,0,0.2)",
                  animation: "float 3s ease-in-out infinite",
                }}
              />
            </motion.div>

            {/* Heading */}
            <MotionTypography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: "bold",
                color: mode === "dark" ? "#00bfff" : "#1e90ff",
                fontFamily: "Poppins, sans-serif",
                letterSpacing: "2px",
              }}
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Hi, I'm Mitesh
            </MotionTypography>

            {/* Typewriter with Glow */}
            <MotionTypography
              variant="h5"
              component="p"
              gutterBottom
              sx={{
                letterSpacing: "2px",
                marginBottom: 4,
                fontFamily: "Poppins, sans-serif",
                color: mode === "dark" ? "#e0e0e0" : "#333",
                textShadow:
                  mode === "dark"
                    ? "0px 0px 10px rgba(0,191,255,0.7)"
                    : "0px 0px 6px rgba(30,144,255,0.5)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              <Typewriter
                words={["A ReactJs Developer", "A Frontend Developer"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </MotionTypography>

            {/* Explore Button with Pulse */}
            <MotionBox
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              sx={{ display: "flex", justifyContent: "center", gap: 2 }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={handleRedirect}
                sx={{
                  fontWeight: "bold",
                  fontFamily: "Poppins, sans-serif",
                  px: 4,
                  py: 1.5,
                  borderRadius: "30px",
                  boxShadow:
                    mode === "dark"
                      ? "0px 0px 20px rgba(0,191,255,0.7)"
                      : "0px 4px 15px rgba(0,0,0,0.2)",
                  transition: "all 0.3s",
                  animation: !loading ? "pulse 2s infinite" : "none",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow:
                      mode === "dark"
                        ? "0px 0px 30px rgba(0,191,255,0.9)"
                        : "0px 6px 20px rgba(0,0,0,0.3)",
                  },
                }}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <CircularProgress
                      size={20}
                      color="inherit"
                      sx={{ mr: 1 }}
                    />
                    Loading...
                  </>
                ) : (
                  "Explore"
                )}
              </Button>
            </MotionBox>
          </Container>
        </Box>
      </motion.div>

      {/* Keyframes for animations */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
        `}
      </style>
    </>
  );
};

export default Start;
