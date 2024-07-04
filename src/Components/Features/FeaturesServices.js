import { Box, Typography } from "@mui/material";
import React from "react";
import { Assets } from "../../Assets";

function FeaturesServices() {
  return (
    <Box>
      <Box
        mt={{ md: -80, sm: -80 }}
        gap={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        textAlign={"center"}
        visibility={{ sm: "visible", xs: "hidden" }}
      >
        <Box>
          <Box sx={{ fontSize: "2vw" }}>✍️</Box>
          <Typography fontSize={"10px"} fontWeight={"bold"} my={1}>
            In Progress
          </Typography>{" "}
        </Box>
        <Box
          component={"img"}
          src={Assets.shape}
          sx={{ width: "4%", height: "6%" }}
        />
        <Box>
          <Box sx={{ fontSize: "2vw" }}>👀</Box>
          <Typography fontSize={"10px"} fontWeight={"bold"} mt={1}>
            Review
          </Typography>
        </Box>

        <Box
          component={"img"}
          src={Assets.shape}
          sx={{ width: "4%", height: "6%" }}
        />
        <Box>
          <Box sx={{ fontSize: "2vw" }}>👍</Box>
          <Typography fontSize={"10px"} fontWeight={"bold"} mt={1}>
            Done
          </Typography>
        </Box>
        <Box
          component={"img"}
          src={Assets.shape}
          sx={{ width: "4%", height: "6%" }}
        />
        <Box>
          <Box sx={{ fontSize: "2vw" }}>👍🚨</Box>
          <Typography fontSize={"10px"} fontWeight={"bold"} mt={1}>
            Done with Changes
          </Typography>
        </Box>
      </Box>
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
            ml: { md: -35, sm: -15 },
            mt: { xs: -100, md: -10, sm: -20 },
            fontSize: { sm: "35px", xs: "25px" },
            fontWeight: "bold",
          }}
        >
          📌 Primer hito
        </Typography>
        <Typography
          my={3}
          sx={{
            width: { md: "40vw", sm: "60vw" },
            ml: { md: "25%", sm: "21%" },
          }}
          color="#5D87A8"
        >
          El primer hito fue cumplir con el diseño de las vistas que ya se
          habían acordado con el cliente. Mejoré la usabilidad de la interfaz en
          el proceso de compra.
        </Typography>
        <Box
          component="img"
          src={Assets.frame48}
          mt={{ md: 3 }}
          sx={{
            width: { sm: "50vw", xs: "90vw" },
            ml: { md: 1 },
          }}
        />
      </Box>
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
            ml: { md: -35, sm: -15 },
            mt: { xs: -100, md: 40, sm: -20 },
            fontSize: { sm: "35px", xs: "25px" },
            fontWeight: "bold",
          }}
        >
          ⛰ Gran hito{" "}
        </Typography>
        <Typography
          my={3}
          sx={{
            width: { md: "40vw", sm: "60vw" },
            ml: { md: "25%", sm: "21%" },
          }}
          color="#5D87A8"
        >
          El primer hito fue cumplir con el diseño de las vistas que ya se
          habían acordado con el cliente. Mejoré la usabilidad de la interfaz en
          el proceso de compra.
        </Typography>
        <Box
          component={"img"}
          src={Assets.skeliton}
          height={400}
          width={500}
          maxHeight={{ xs: 20, md: 200, sm: 10 }}
          maxWidth={{ xs: 30, md: 300, sm: 20 }}
        />
        <Box
          component={"img"}
          src={Assets.vector}
          height={400}
          width={500}
          maxHeight={{ xs: 20, md: 200, sm: 10 }}
          maxWidth={{ xs: 30, md: 200, sm: 20 }}
        />
        <Box
          component={"img"}
          src={Assets.skelitonn}
          height={400}
          width={500}
          maxHeight={{ xs: 20, md: 200, sm: 10 }}
          maxWidth={{ xs: 30, md: 300, sm: 20 }}
        />
      </Box>
    </Box>
  );
}

export default FeaturesServices;
