import { Box, Typography } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

function FeatureHeader() {
  const navigate = useNavigate();
  return (
    <Box>
      <Box display={"flex"}>
        <ArrowBackIcon
          onClick={() => navigate(-1)}
          fontSize="large"
          color="#AF48FF"
          sx={{
            backgroundColor: "#F8F2FF",
            mt: "5px",
            color: "#AF48FF",
            p: "5px",
          }}
        />
        <Typography
          mt={1}
          ml={{ md: "20vw", sm: "10vw" }}
          color="#AF48FF"
          bgcolor="#F5EDFF"
          p={1}
          visibility={{ sm: "visible", xs: "hidden" }}
        >
          Due to a Non-Disclosure Agreement, the information on this project is
          limited.
        </Typography>
      </Box>
    </Box>
  );
}

export default FeatureHeader;
