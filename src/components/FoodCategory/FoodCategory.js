import { Box, Container, Skeleton } from "@mui/material";
import React from "react";
import TabButtons from "../custom/TabButtons";
import useMeals from "../../hooks/useMeals";
import FoodCard from "../FoodCard/FoodCard";

const categories = ["breakfast", "lunch", "dinner"];

const FoodCategory = () => {
  const [value, setValue] = React.useState(0);

  const { meals, loading } = useMeals(categories[value]);


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
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            justifyContent: "center",
            gap: "20px",
            mt: 8,
          }}
        >
          {!loading && meals?.map((meal) => <FoodCard meal={meal} />)}
          {loading &&
            Array.from(
              new Array(6)).map((item) => (
                <Box sx={{
                  width: 330
                }}>
                  <Skeleton
                    variant="circular"
                    width={250}
                    height={250}
                    animation='wave'
                    sx={{
                      mx: 'auto',
                    }}
                  />
                  <Skeleton width={330} height={50} variant="text" />
                  <Skeleton width={330} height={100} variant="text" />
                  <Skeleton width={100} height={70} variant="text" sx={{
                    mx:'auto'
                  }}/>
                </Box>
              ))
            }
        </Box>
      </Container>
    </Box>
  );
};

export default FoodCategory;
