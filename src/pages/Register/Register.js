import { Box, Container } from "@mui/material";

const Register = () => {
  return (
    <Box
      sx={{
        height: "90vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container>
        <Box
          sx={{
            width: "100%",
            maxWidth: 500,
            mx: "auto",
            mt: 10,
            display: "flex",
            flexDirection: "column",
            gap: 3,
            p: 2,
          }}
        ></Box>
      </Container>
    </Box>
  );
};

export default Register;
