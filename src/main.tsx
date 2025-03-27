import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Admin/Layout/index.tsx";
import Services from "./components/Admin/Services/index.tsx";
import { defaultFaq, defaultFeedback, defaultServices } from "./const.ts";

export type ServiceItem = {
  key: string;
  price: number;
  label: string;
  text: string;
};

const router = createBrowserRouter([
  {
    path: "/ads",
    element: <App />,
  },
  {
    path: "/ads/admin",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Services />,
      },
    ],
  },
]);

if (!localStorage.getItem("services")) {
  localStorage.setItem("services", JSON.stringify(defaultServices));
}
if (!localStorage.getItem("faq")) {
  localStorage.setItem("faq", JSON.stringify(defaultFaq));
}
if (!localStorage.getItem("feedback")) {
  localStorage.setItem("feedback", JSON.stringify(defaultFeedback));
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
