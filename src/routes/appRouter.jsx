import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Spinner from "../components/UI/Spinner/Spinner";

const Home = lazy(() => import("../pages/Home/Home"));
const Results = lazy(() => import("../pages/Results/Results"));


function AppRouter() {
  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<>NOT FOUND</>} />
          <Route path='results' element={<Results />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default AppRouter;