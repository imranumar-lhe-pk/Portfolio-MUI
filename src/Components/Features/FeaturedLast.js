import { Box, Typography } from "@mui/material";
import React from "react";
import { Assets } from "../../Assets";

function FeaturedLast() {
  return (
    <Box>
      <Box>
        <Box
          mt={{ md: -20, sm: -0 }}
          gap={2}
          justifyContent="center"
          alignItems="center"
          minHeight="10vh"
          textAlign={"center"}
        >
          <Typography
            variant="h1"
            sx={{
              ml: { md: -60, sm: -15 },
              mt: { xs: -100, md: 40, sm: -20 },
              fontSize: { sm: "35px", xs: "25px" },
              fontWeight: "bold",
            }}
          >
            Actualmente{" "}
          </Typography>
          <Typography
            my={3}
            sx={{
              width: { md: "40vw", sm: "60vw" },
              ml: { md: "17%", sm: "21%" },
            }}
            color="#5D87A8"
          >
            El primer hito fue cumplir con el diseño de las vistas que ya se
            habían acordado con el cliente. Mejoré la usabilidad de la interfaz
            en el proceso de compra.
          </Typography>

          <Box>
            <Box
              component={"img"}
              src={Assets.banner}
              sx={{
                height: { xs: "20px", sm: "10px", md: "900px" },
                width: { xs: "30px", sm: "20px", md: "45vw" },
                marginBottom: "20px", // Add some margin to separate it from the images below
              }}
            />
            <Box
              component={"img"}
              src={Assets.bannerLast}
              sx={{
                height: { xs: "20px", sm: "10px", md: "100%" },
                width: { xs: "30px", sm: "20px", md: "100px" },
                marginBottom: "", // Adjust as needed
                marginLeft: "10px", // Adjust as needed
              }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Box
                component={"img"}
                src={Assets.img}
                sx={{ marginRight: "10px" }}
              />
              <Box
                component={"img"}
                src={Assets.img2}
                sx={{ marginLeft: "10px" }}
              />
              <Box
                component={"img"}
                src={Assets.img2}
                sx={{ marginLeft: "10px" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default FeaturedLast;
