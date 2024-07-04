import { Box, Typography } from "@mui/material";
import React from "react";
import LinkedIn from "../../Assets/Logo Linkedin-1.svg";
import Be from "../../Assets/Logo Be-1.svg";
import dribbble from "../../Assets/dribbble-ball-mark-1.svg";

function Footer() {
  return (
    <Box display={"flex"} flexDirection={{ xs: "column", sm: "row" }} my={10}>
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent={"space-between"}
      >
        {" "}
        <Typography>Your feedback is welcome 👍🏻</Typography>
        <Typography
          width={{ xs: "100vw", sm: "30vw" }}
          my={{ xs: "3vw", sm: "0vw" }}
          ml={{ xs: "-5vw", sm: "12vw" }}
        >
          Cristopher Galarce Arcila Product
        </Typography>
      </Box>
      <Box display="flex" sx={{ gap: { xs: 2, sm: 5 } }}>
        <Box ml={{ xs: "13vw", sm: "0vw" }}>
          <img src={LinkedIn} width={22} />
        </Box>
        <Box>
          <img src={Be} width={28} />
        </Box>
        <Box>
          <img src={dribbble} width={22} />
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
