import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import { Suspense } from "react";
import { Loader } from "./components/Loader";

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={routes} />;
    </Suspense>
  );
}
