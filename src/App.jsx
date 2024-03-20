import React, { useState, useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Import your components and pages
import { RootLayout } from "./layouts/RootLayout";
import { Accueil } from "./pages/Accueil";
import { Apropos } from "./pages/Apropos";
import { Contacter } from "./pages/Contacter";
import { Service } from "./pages/Service";
import { TermsOfUse } from "./pages/TermsOfUse";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { NotFound } from "./pages/NotFound";
import { Sitemap } from "./pages/Sitemap";
import { LoadingScreen } from "./components/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add event listener for window load event
    window.addEventListener("load", handleLoad);

    // Cleanup function
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  const handleLoad = () => {
    // Once all resources have loaded, set isLoading to false
    setIsLoading(false);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Accueil />} />
        <Route path="about" element={<Apropos />} />
        <Route path=":service" element={<Service />} />
        <Route path="contact" element={<Contacter />} />
        <Route path="privacy" element={<PrivacyPolicy />} />
        <Route path="terms" element={<TermsOfUse />} />
        <Route path="map" element={<Sitemap />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <div className="App">
      {/* {isLoading ? (
        <LoadingScreen />
      ) : ( */}
        <RouterProvider router={router} />
      {/* )} */}
    </div>
  );
}

export default App;
