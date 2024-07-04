import React from "react";
import { Box, theme, Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Assets } from "../../Assets";

function FeaturedHero() {
  const theme = useTheme();
  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Typography
          variant="h1"
          sx={{
            mt: { xs: 5, sm: 20 },
            letterSpacing: "",
            fontSize: { sm: "35px", xs: "25px" },
            fontWeight: "bold",
          }}
        >
          <Typography mt={5} color="#5D87A8">
            Web responsive. UX-UI Design
          </Typography>
          CCU{" "}
        </Typography>
        <Typography
          variant="h6"
          sx={{ width: { md: "29vw", sm: "55vw" } }}
          color="#5D87A8"
          mt={2}
        >
          Participo en impulsar mejoras en UX y UI al Ecommerce web de
          Manantial.
        </Typography>
      </Grid>
      <Grid
        container
        item
        xs={12}
        sm={6}
        sx={{
          marginTop: { md: "15vw", sm: "30vw", xs: "10vw" },
          position: "relative",
          width: "100%",
          visibility: { xs: "visible", sm: "visible" },
        }}
      >
        <Box>
          <Box
            component="img"
            src={Assets.pgimg3}
            alt="Home"
            sx={{
              width: { sm: "25vw", xs: "70vw" },
              marginLeft: "12vw",
              boxShadow: "0px 0px 0px 1px rgb(0,0,0,0.1)",
            }}
          />
          <Box
            component={"img"}
            src={Assets.pageimg3}
            alt="Frame 18"
            sx={{
              position: "absolute",
              top: { md: "30%", sm: "36%", xs: "15vw" },
              left: { sm: "10%", xs: "0%" },
              width: { sm: "12vw", xs: "30vw" },
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default FeaturedHero;
