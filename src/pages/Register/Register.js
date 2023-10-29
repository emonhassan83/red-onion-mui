import { Box, Button, Container, Typography } from "@mui/material";
import { AuthForm } from "./Register.style";
import OnionTextField from "../../components/custom/OnionTextField";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Register = () => {
  const { registerWithEmailAndPassword } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async ({ name, email, password }) => {
    await registerWithEmailAndPassword(name, email, password, navigate);
    reset();
  };

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
        <AuthForm component="form" onSubmit={handleSubmit(handleRegister)}>
          <Typography variant="h3" color="primary" textAlign="center">
            Sign Up
          </Typography>
          <OnionTextField
            type="text"
            placeholder="user name"
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
            error={errors.name}
            helperText={errors.name && errors.name.message}
          />
          <OnionTextField
            type="email"
            placeholder="user email"
            {...register("email", {
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
              required: {
                value: true,
                message: "Email is required",
              },
            })}
            error={errors.email}
            helperText={errors.email && errors.email.message}
          />
          <OnionTextField
            type="password"
            placeholder="user password"
            {...register("password", {
              required: {
                value: true,
                message: "Please input a password",
              },
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
            error={errors.password}
            helperText={errors.password && errors.password.message}
          />
          <Link
            to="/login"
            style={{
              color: "#f91944",
              fontSize: "12px",
            }}
          >
            Already have an account?
          </Link>
          <Button
            sx={{
              borderRadius: "8px",
            }}
            type="submit"
          >
            Sign Up
          </Button>
        </AuthForm>
      </Container>
    </Box>
  );
};

export default Register;
