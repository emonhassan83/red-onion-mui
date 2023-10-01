import { Box, Container } from "@mui/material";
import React from "react";
import TabButtons from "../custom/TabButtons";
import useMeals from "../../hooks/useMeals";
import FoodCard from "../FoodCard/FoodCard";

const categories = ['breakfast', 'lunch', 'dinner'];

const FoodCategory = () => {
  const [value, setValue] = React.useState(0);

  const { meals, loading } = useMeals(categories[value]);
  console.log(meals);

  return (
    <Box>
      <Container maxWidth="lg">
        <Box
          sx={{
            maxWidth: 500,
            mx: "auto",
          }}
        >
          <TabButtons value={value} setValue={setValue} />
        </Box>
        <Box sx={{
          display: "grid",
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          justifyContent: "center",
          gap: "20px",
          mt: 8,
        }}>
          {
            !loading && meals?.map(meal => <FoodCard meal={meal}/>)
          }
          {
            loading && <>Loading...</>
          }
        </Box>
      </Container>
    </Box>
  );
};

export default FoodCategory;
