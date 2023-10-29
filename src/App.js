import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import { ThemeProvider } from "@mui/material";
import { theme } from "./components/theme/theme";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import AuthContextProvider from "./context/AuthContextProvider";
import MealDetails from "./pages/MealDetails/MealDetails";
import Checkout from "./pages/Checkout/Checkout";
import OrderStatus from "./pages/OrderStatus/OrderStatus";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CartContextProvider from "./context/CartContextProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/meal-details/:mealId",
        element: (
          <PrivateRoute>
            <MealDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/order-status",
        element: <OrderStatus />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <CartContextProvider>
          <div className="App">
            <CssBaseline />
            <RouterProvider router={router} />
          </div>
        </CartContextProvider>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
