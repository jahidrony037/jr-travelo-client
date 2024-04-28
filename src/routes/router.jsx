import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import AddTouristSpot from "../pages/AddTouristSpot";
import AllTouristSpot from "../pages/AllTouristSpot";
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
        loader: () => fetch("http://localhost:5000/allTouristSpots"),
      },
      {
        path: "/allTouristSpot/:id",
        element: <TouristSpotCardDetails />,
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
        element: <UpdateTouristSpot />,
        loader: (params) =>
          fetch(`http://localhost:5000/allTouristSpots/${params.params.id}`),
      },
    ],
  },
]);
