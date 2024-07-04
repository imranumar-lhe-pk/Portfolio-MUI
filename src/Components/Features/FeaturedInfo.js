import { Box, Typography } from "@mui/material";
import React from "react";
import { Assets } from "../../Assets";

function FeaturedInfo() {
  return (
    <Box>
      <Box display={"flex"}>
        <Box
          display={"flex"}
          m={5}
          ml={{ md: 25, sm: 10, xs: "10" }}
          flexDirection={"column"}
        >
          <Box
            component={"img"}
            height={100}
            width={200}
            maxHeight={{ xs: 50, md: 50, sm: 50 }}
            maxWidth={{ xs: 100, md: 500, sm: 250 }}
            src={Assets.cap1}
          />
          <Box
            component={"img"}
            height={100}
            width={200}
            maxHeight={{ xs: 50, md: 50, sm: 50 }}
            maxWidth={{ xs: 100, md: 300, sm: 200 }}
            src={Assets.cap1}
          />
          <Box
            component={"img"}
            height={100}
            width={200}
            maxHeight={{ xs: 50, md: 50, sm: 50 }}
            maxWidth={{ xs: 100, md: 300, sm: 200 }}
            src={Assets.cap1}
          />
        </Box>
        <Box
          display={"flex"}
          mt={{ sm: 11, xs: 10 }}
          ml={{ md: 5, sm: -6, xs: -3 }}
        >
          <Box
            component={"img"}
            src={Assets.shape}
            height={50}
            width={60}
            maxHeight={{ xs: 20, md: 50, sm: 10 }}
            maxWidth={{ xs: 30, md: 50, sm: 20 }}
          />
        </Box>
        <Typography m={{ sm: 10, xs: 2 }} mt={{ xs: 8, sm: "" }}>
          🔤 Tipografía
          <Typography>🔤 Tipografía</Typography>
        </Typography>
      </Box>
      <Box
        display={"flex"}
        flexDirection={{ sm: "row", xs: "column" }}
        textAlign={"center"}
        gap={2}
      >
        <Typography bgcolor="#F5EDFF" p={2} ml={{ md: 9, sm: 2, xs: 0 }}>
          Semana 1
        </Typography>
        <Typography bgcolor="#F5EDFF" p={2} ml={{ md: 9, sm: 2, xs: 0 }}>
          Semana 2
        </Typography>
        <Typography bgcolor="#F5EDFF" p={2} ml={{ md: 9, sm: 2, xs: 0 }}>
          Semana 3
        </Typography>
        <Typography bgcolor="#F5EDFF" p={2} ml={{ md: 9, sm: 2, xs: 0 }}>
          Semana 4
        </Typography>
        <Typography bgcolor="#F5EDFF" p={2} ml={{ md: 9, sm: 2, xs: 0 }}>
          Semana 5
        </Typography>
      </Box>

      <Box>
        <Box
          component={"img"}
          src={Assets.table}
          mt={3}
          sx={{
            width: { sm: "60vw", xs: "90vw" },
            ml: { sm: 15 },
          }}
        />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        textAlign={"center"}
      >
        <Typography
          variant="h1"
          sx={{
            mt: { xs: 10, sm: 5 },
            fontSize: { sm: "35px", xs: "25px" },
            fontWeight: "bold",
          }}
        >
          🎨 UI Kit{" "}
          <Typography
            my={3}
            sx={{
              width: { md: "40vw", sm: "60vw", xs: "70vw" },
              ml: { md: "1%", sm: "10%", xs: "22%" },
            }}
            color="#5D87A8"
          >
            Trabajé en preparar el archivo de diseño para crear un UI Kit
            organizado en el que el equipo de desarrollo encontrara todas sus
            necesidades.
          </Typography>
          <Box
            component="img"
            src={Assets.group77}
            height={600}
            width={800}
            maxHeight={{ xs: 100, md: 200, sm: 150 }}
            maxWidth={{ xs: 450, md: 450, sm: 450 }}
          />
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        textAlign={"center"}
      >
        <Typography
          variant="h1"
          sx={{
            ml: { md: -25 },
            mt: { xs: -50, md: -60 },
            fontSize: { sm: "35px", xs: "25px" },
            fontWeight: "bold",
          }}
        >
          ‍💻 Workflow UI Design{" "}
          <Typography
            my={3}
            sx={{
              width: { md: "40vw", sm: "60vw" },
              ml: { md: "25%", sm: "10%" },
            }}
            color="#5D87A8"
          >
            Me preocupé de nivelar un lenguaje común con el equipo de
            desarrollo. Comunico mi flujo de trabajo en 4 fases, para que el
            equipo de desarrollo sepa de donde obtener los assets.
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
}

export default FeaturedInfo;
