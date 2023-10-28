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
        path: '/meal-details/:mealId',
        element: <MealDetails />,
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
        <div className="App">
          <CssBaseline />
          <RouterProvider router={router} />
        </div>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
