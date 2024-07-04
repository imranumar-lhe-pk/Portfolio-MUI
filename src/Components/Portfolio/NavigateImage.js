import React from "react";
import { Box, Grid } from "@mui/material";
import thumbnail from "../../Assets/Thumbnail.png";
import thumbnail1 from "../../Assets/Thumbnail (1).png";
import thumbnail2 from "../../Assets/Thumbnail (2).png";
import { Assets } from "../../Assets";
import { useNavigate } from "react-router-dom";

function NavigateImage() {
  const navigate = useNavigate();
  const FirstCardHandler = () => {
    navigate("/FeaturedComponents");
  };
  const secondCardHandler = () => {
    navigate("/FinalComponents");
  };
  return (
    <Box
      mt={{ sm: "10vw", xs: "-10vw" }}
      sx={{ marginLeft: { sm: "-5vw", xs: "-15vw" } }}
      display={"flex"}
      flexDirection={{ xs: "column", sm: "row" }}
    >
      <Box
        onClick={FirstCardHandler}
        component="img"
        alt="Thumbnail"
        src={Assets.thumbnail}
        height={350}
        width={500}
        maxHeight={{ xs: 250, md: 300, sm: 150 }}
        maxWidth={{ xs: 350, md: 450, sm: 250 }}
      />
      <Box
        onClick={secondCardHandler}
        component="img"
        alt="Thumbnail"
        src={Assets.thumbnail1}
        height={350}
        width={500}
        maxHeight={{ xs: 250, md: 300, sm: 150 }}
        maxWidth={{ xs: 350, md: 450, sm: 250 }}
      />
      <Box
        component="img"
        alt="Thumbnail"
        src={Assets.thumbnail2}
        height={350}
        width={500}
        maxHeight={{ xs: 250, md: 300, sm: 150 }}
        maxWidth={{ xs: 350, md: 450, sm: 250 }}
      />
    </Box>
  );
}

export default NavigateImage;
