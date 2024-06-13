import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import "./assets/styles/reset.css";
import "./assets/styles/main.css";
import RootLayout from "./layouts/RootLayout";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: (
      <RootLayout>
        <ErrorPage />
      </RootLayout>
    ),
    children: [
      { index: true, element: <HomePage /> },

      { path: "contact", element: <ContactPage /> },
      {
        path: "portfolio",
        element: <PortfolioPage />,
        loader: async () => {
          try {
            const response = await fetch("/assets/projects.json", {
              cache: "no-store",
            });

            if (!response.ok) {
              throw new Error("Failed to fetch projects");
            }

            const data = await response.json();
            return { success: true, data: { ...data } };
          } catch (err) {
            console.error(err);
            return { success: false };
          }
        },
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
