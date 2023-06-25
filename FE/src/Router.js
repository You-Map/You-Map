import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import Intro from "./pages/Intro";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Place from "./pages/Place";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/main" element={<Main />} />
        <Route path="/place/:placeID" element={<Place />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
