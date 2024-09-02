import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import LandingPage from './pages/landing-page/LandingPage.tsx'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<LandingPage />} >

        </Route>
    )
);

export default router;