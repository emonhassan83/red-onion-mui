import { Box, Button, Container, IconButton, Stack } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { FlexBox } from "../styled/FlexBox";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import LogoutIcon from '@mui/icons-material/Logout';

const Header = () => {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
 };
 console.log(user);
 
  return (
    <Container>
      <FlexBox
        justifyContent="space-between"
        sx={{
          padding: "2rem 0",
        }}
      >
        <Box to='/' component={Link}>
        <img
          src="https://i.ibb.co/GV0gqff/logo2.png"
          alt="Logo"
          style={{
            width: "160px",
          }}
        />
        </Box>

        <Stack
          direction="row"
          spacing={4}
          sx={{
            alignItems: "center",
          }}
        >
          <IconButton>
            <ShoppingCartOutlinedIcon />
          </IconButton>

          {!user && (
                     <>
                        <Button
                           variant='text'
                           sx={{ color: '#191919' }}
                           to='/login'
                           component={Link}
                        >
                           Sign In
                        </Button>
                        <Button to='/register' component={Link}>
                           Sign Up
                        </Button>
                     </>
                  )}

                  {user && (
                     <>
                        <Button variant='text' sx={{ color: '#191919' }}>
                           {user.displayName}
                        </Button>
                        <IconButton onClick={handleLogout}>
                           <LogoutIcon />
                        </IconButton>
                     </>
                  )}
        </Stack>
      </FlexBox>
    </Container>
  );
};

export default Header;
