import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage:
          "url('https://cdn.durable.co/getty/baxG5ofyUMNTQW6P5OlBp2POnkovpMxKdHWZk6aKoB54uofwlV1wGix6sh7GedQ6.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        transition: "transform 0.5s ease-out", // Smooth transition
        "&:hover": {
          transform: "scale(0.95)", // Zoom-out effect on hover
        },
      }}
    >
      <Card
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: 3,
          borderRadius: 3,
        }}
      >
        <CardContent>
          <Typography variant="h3" sx={{ color: "orange", fontWeight: "bold" }}>
            Track Your Expenses Smartly
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "rgb(137, 54, 48)", marginTop: 2 }}
          >
            Manage your finances efficiently with AI-powered tracking system.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Home;
