import { Box } from "@mui/material";
import React from "react";
import FeatureHeader from "./FeatureHeader";
import FeaturedHero from "./FeatureHero";
import FeaturedInfo from "./FeaturedInfo";
import FeaturedLast from "./FeaturedLast";
import FeaturedProduct from "./FeaturedProduct";
import FeaturesServices from "./FeaturesServices";
import FeaturedHeading from "./FeaturedHeading";
import FeaturedFooter from "../Features/FeaturedFooter";

function FeaturedComponents() {
  return (
    <Box>
      <FeatureHeader />
      <FeaturedHero />
      <FeaturedHeading />
      <FeaturedProduct />
      <FeaturedInfo />
      <FeaturesServices />
      <FeaturedLast />
      <FeaturedFooter />
    </Box>
  );
}

export default FeaturedComponents;
