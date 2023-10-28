import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { FlexBox } from "../../components/styled/FlexBox";
import useMealById from "../../hooks/useMealsById";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
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
                  <Typography
                    variant="h5"
                    sx={{ width: "20px" }}
                    fontWeight={600}
                  >
                    {quantity}
                  </Typography>
                  <RemoveIcon />
                </CounterBox>
              </FlexBox>
              <Button startIcon={<ShoppingCartOutlinedIcon/>} sx={{
                width: ['100%','100%','40%']
              }}>Add</Button>
            </Stack>
          </Box>

          {/* image will go here */}
          <Box sx={{ flex: 1 }}>
            <img src={meal?.defaultImage} alt="meal" style={{
              maxWidth: '100%',
              width: '500px',
              margin: '0 auto',
              display: 'block',
            }} />
          </Box>
        </FlexBox>
      </Container>
    </Box>
  );
};

export default MealDetails;
