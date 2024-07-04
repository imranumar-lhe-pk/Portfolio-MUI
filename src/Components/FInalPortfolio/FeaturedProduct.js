import { Box, Typography } from "@mui/material";
import React from "react";

function FeaturedProduct() {
  return (
    <Box>
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
            mt: { xs: 10, sm: "-20%" },
            fontSize: { sm: "35px", xs: "25px" },
            fontWeight: "bold",
          }}
        >
          Acerca del proyecto{" "}
          <Typography
            my={3}
            sx={{
              width: { md: "40vw", sm: "60vw" },
              ml: { md: "2%", sm: "10%" },
            }}
            color="#5D87A8"
          >
            Manantial es una compañía que vende agua purificada en varios
            formatos. A través de su sitio web, uno puede conocer los productos
            que están orientados a oficinas y lugares de trabajo como también al
            uso en el hogar.{" "}
          </Typography>
        </Typography>
      </Box>
      <Box
        mt={{ md: -40, xs: -10 }}
        display={"flex"}
        justifyContent={"space-around"}
      >
        <Typography bgcolor="#F5EDFF" fontSize={"1vw"} p={1}>
          El proyecto ya está en producción
        </Typography>
        <Typography bgcolor="#F5EDFF" fontSize={"1vw"} p={1}>
          El proyecto ya está en producción
        </Typography>
        <Typography bgcolor="#F5EDFF" fontSize={"1vw"} p={1}>
          El proyecto ya está en producción
        </Typography>
      </Box>
    </Box>
  );
}

export default FeaturedProduct;
