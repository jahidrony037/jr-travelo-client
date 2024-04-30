import AOS from "aos";
import "aos/dist/aos.css";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./AuthProvider/AuthProvider";
import "./index.css";
import MainLayout from "./layouts/MainLayout/MainLayout";
import { router } from "./routes/router";
AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <AuthProvider>
      <RouterProvider router={router}>
        <MainLayout />
      </RouterProvider>
      <ToastContainer />
    </AuthProvider>
  </HelmetProvider>
);
