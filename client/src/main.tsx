import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import FeaturePage from "./pages/FeaturePage/FeaturePage.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";
import { Layout } from "./components/layout.tsx";
import "./index.css";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<NotFoundPage />}>
      <Route index element={<HomePage />} />
      <Route path="features/:featureId" element={<FeaturePage />} />
    </Route>
  )
);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
