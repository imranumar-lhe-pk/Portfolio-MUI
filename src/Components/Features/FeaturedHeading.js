import { Box, Typography } from "@mui/material";
import React from "react";
import { Assets } from "../../Assets";

function FeaturedHeading() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      textAlign="center"
    >
      <Typography
        variant="h1"
        sx={{
          mt: { xs: 10, sm: "20%" },
          fontSize: { sm: "35px", xs: "25px" },
          fontWeight: "bold",
        }}
      >
        Acerca del proyecto{" "}
        <Typography
          my={3}
          sx={{
            width: { md: "40vw", sm: "60vw" },
            ml: { md: "25%", sm: "10%" },
          }}
          color="#5D87A8"
        >
          Manantial es una compañía que vende agua purificada en varios
          formatos. A través de su sitio web, uno puede conocer los productos
          que están orientados a oficinas y lugares de trabajo como también al
          uso en el hogar.{" "}
        </Typography>
        <Box
          component="img"
          src={Assets.group}
          sx={{
            width: { sm: "70vw", xs: "90vw" },
          }}
        />
      </Typography>
    </Box>
  );
}

export default FeaturedHeading;
