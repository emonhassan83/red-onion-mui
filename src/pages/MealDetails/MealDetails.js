import { Box, Container, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { FlexBox } from "../../components/styled/FlexBox";
import useMealById from "../../hooks/useMealsById";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { CounterBox } from "./MealDetails.style";
import { useState } from "react";

const MealDetails = () => {
  const { mealId } = useParams();
  const { meal } = useMealById(mealId);
  console.log({ meal });

  const [quantity, setQuantity] = useState(0);

  return (
    <Box>
      <Container maxWidth="lg">
        <FlexBox sx={{ my: 5, gap: 10 }}>
          {/* meal details will go here */}
          <Box sx={{ flex: 1 }}>
            <Stack spacing={3}>
              <Typography variant="h4" fontWeight={600}>
                {meal?.title}
              </Typography>
              <Typography
                variant="body"
                color="primary.grayText"
                sx={{
                  width: 450,
                }}
              >
                {meal?.description}
              </Typography>

              <FlexBox>
                <Typography variant="h4" fontWeight={400}>
                  ${meal?.price}
                </Typography>
                
                <CounterBox>
                  <AddIcon />
                  <Typography variant="h5" sx={{width:'20px'}} fontWeight={600}>
                    {quantity}
                  </Typography>
                  <RemoveIcon />
                </CounterBox>
              </FlexBox>
            </Stack>
          </Box>

          {/* image will go here */}
          <Box sx={{ flex: 1 }}></Box>
        </FlexBox>
      </Container>
    </Box>
  );
};

export default MealDetails;
