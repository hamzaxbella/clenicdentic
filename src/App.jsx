import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// layouts
import { RootLayout } from "./layouts/RootLayout";
// pages
import { Accueil } from "./pages/Accueil";
import { Apropos } from "./pages/Apropos";
import { Contacter } from "./pages/Contacter";
import {Service} from './pages/Service'
import { TermsOfUse } from "./pages/TermsOfUse";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { NotFound } from "./pages/NotFound";
import { Sitemap } from "./pages/Sitemap";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Accueil/>}/>
        <Route path="about" element={<Apropos/>}/>
        <Route path=":service" element={<Service/>}/>
        <Route path="contact" element={<Contacter/>}/>
        <Route path="privacy" element={<PrivacyPolicy/>}/>
        <Route path="terms" element={<TermsOfUse/>}/>
        <Route path="map" element = {<Sitemap/>}/>

        <Route path="*" element={<NotFound/>}/>
      </Route>
    )
  )
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;