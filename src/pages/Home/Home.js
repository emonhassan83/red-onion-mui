import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import FoodCategory from "../../components/FoodCategory/FoodCategory";
import { Stack } from "@mui/material";

const Home = () => {
  return (
    <Stack spacing={10}>
      <HeroSection />
      <FoodCategory/>
    </Stack>
  );
};

export default Home;
