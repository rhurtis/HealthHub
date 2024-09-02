import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import LandingPage from './pages/landing-page/LandingPage.tsx'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<LandingPage />} >

        </Route>
    )
);

export default router;