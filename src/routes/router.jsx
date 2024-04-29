import { createBrowserRouter } from "react-router-dom";
import CountriesAllSpot from "../components/CountriesAllSpot";
import MainLayout from "../layouts/MainLayout/MainLayout";
import AddTouristSpot from "../pages/AddTouristSpot";
import AllTouristSpot from "../pages/AllTouristSpot";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyList from "../pages/MyList";
import Register from "../pages/Register";
import TouristSpotCardDetails from "../pages/TouristSpotCardDetails";
import UpdateTouristSpot from "../pages/UpdateTouristSpot";
import ProtectedRoute from "./../components/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
        path: "/allTouristSpot",
        element: <AllTouristSpot />,
        loader: () =>
          fetch("https://jr-travelo-server.vercel.app/allTouristSpots"),
      },
      {
        path: "/allTouristSpot/:id",
        element: (
          <ProtectedRoute>
            <TouristSpotCardDetails />
          </ProtectedRoute>
        ),
        loader: (params) =>
          fetch(
            `https://jr-travelo-server.vercel.app/allTouristSpots/${params.params.id}`
          ),
      },
      {
        path: "/addTouristSpot",
        element: (
          <ProtectedRoute>
            <AddTouristSpot />
          </ProtectedRoute>
        ),
      },
      {
        path: "/myList",
        element: (
          <ProtectedRoute>
            <MyList />
          </ProtectedRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <ProtectedRoute>
            <UpdateTouristSpot />
          </ProtectedRoute>
        ),
        loader: (params) =>
          fetch(
            `https://jr-travelo-server.vercel.app/allTouristSpots/${params.params.id}`
          ),
      },
      {
        path: "/countries/:countryName",
        element: (
          <ProtectedRoute>
            <CountriesAllSpot />
          </ProtectedRoute>
        ),
        loader: (params) =>
          fetch(
            `https://jr-travelo-server.vercel.app/subCategories/${params.params.countryName}`
          ),
      },
    ],
  },
]);
