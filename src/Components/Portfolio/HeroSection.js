import React from "react";
import { Box, theme, Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Assets } from "../../Assets";

function HeroSection() {
  const theme = useTheme();
  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Typography
          variant="h1"
          sx={{
            mt: { xs: 15, sm: 20 },
            letterSpacing: "",
            fontSize: { sm: "35px", xs: "25px" },
            fontWeight: "bold",
          }}
        >
          👋 Hi, I’m Cristopher{" "}
        </Typography>
        <Typography
          variant="h6"
          sx={{ width: { md: "29vw", sm: "55vw" } }}
          color="#5D87A8"
          mt={2}
        >
          I’m a Product Designer with a passion for participating in every stage
          of digital product, from discovery to delivery. Helping to focus the
          business goals on users.
        </Typography>
        <Box display={{ sm: "flex", xs: " " }} gap={2}>
          <Typography
            variant="h6"
            width="27vw"
            sx={{ display: { xs: "flex" }, width: { xs: "20" } }}
            color="#5D87A8"
            mt={2}
          >
            I’m looking for new opportunities. Previously, I worked at
            Multiplica Talent Chile.
          </Typography>
          <Typography mt={3} color="#5D87A8">
            Santiago de Chile
            <Typography>cristopher@galarce.pro</Typography>
          </Typography>
        </Box>
        <Typography mt={5}>👇 Check some projects</Typography>
      </Grid>
      <Grid
        container
        item
        xs={12}
        sm={6}
        sx={{
          marginTop: { md: "15vw", sm: "30vw" },
          position: "relative",
          width: "100%",
          visibility: { xs: "hidden", sm: "visible" },
        }}
      >
        <Box>
          <Box
            component="img"
            src={Assets.Home}
            alt="Home"
            sx={{
              width: "25vw",
              marginLeft: "12vw",
              boxShadow: "0px 0px 0px 1px rgb(0,0,0,0.1)",
            }}
          />
          <Box
            component={"img"}
            src={Assets.Frame16}
            alt="Frame 16"
            mt={{ sm: "30px" }}
            sx={{
              position: "absolute",
              top: "-20%",
              right: "50%",
              width: "12vw",
            }}
          />
          <Box
            component={"img"}
            src={Assets.Frame17}
            alt="Frame 17"
            sx={{
              position: "absolute",
              top: "-10%",
              right: "20%",
              width: "12vw",
            }}
          />

          <Box
            component={"img"}
            src={Assets.Frame14}
            alt="Frame 14"
            sx={{
              position: "absolute",
              top: { md: "40%", sm: "30%" },
              right: { md: "-10%", sm: "7%" },
              width: "12vw",
            }}
          />
          <Box
            component={"img"}
            src={Assets.Frame11}
            alt="Frame 11"
            sx={{
              position: "absolute",
              top: "7%",
              right: "3%",
              width: "8vw",
            }}
          />
          <Box
            component={"img"}
            src={Assets.Frame12}
            alt="Frame 12"
            sx={{
              position: "absolute",
              top: "20%",
              left: "19%",
              width: "8vw",
            }}
          />
          <Box
            component={"img"}
            src={Assets.Frame18}
            alt="Frame 18"
            sx={{
              position: "absolute",
              top: { md: "50%", sm: "36%" },
              left: "10%",
              width: "12vw",
            }}
          />
          <Box
            component={"img"}
            src={Assets.Frame13}
            alt="Frame 13"
            sx={{
              position: "absolute",
              top: { md: "89%", sm: "42%" },
              left: "38%",
              width: "8vw",
            }}
          />

          <Box
            component={"img"}
            src={Assets.Frame15}
            alt="Frame 15"
            sx={{
              position: "absolute",
              top: { md: "89%", sm: "42%" },
              left: "50%",
              width: "12vw",
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default HeroSection;
