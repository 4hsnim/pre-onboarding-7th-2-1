import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "./components/pages/DetailPage";
import MainPage from "./components/pages/MainPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="detail/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
