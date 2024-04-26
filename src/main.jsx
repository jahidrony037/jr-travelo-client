import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./AuthProvider/AuthProvider";
import "./index.css";
import MainLayout from "./layouts/MainLayout/MainLayout";
import { router } from "./routes/router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router}>
      <MainLayout />
    </RouterProvider>
    <ToastContainer />
  </AuthProvider>
);
