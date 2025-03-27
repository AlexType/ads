import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.tsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Admin/Layout/index.tsx";
import { defaultFaq, defaultFeedback, defaultServices } from "./const.ts";

export type ServiceItem = {
  key: string;
  price: number;
  label: string;
  text: string;
};

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <Layout />,
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
