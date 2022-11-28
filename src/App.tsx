import { Route, Routes } from "react-router-dom";
import Chapters from "./pages/ChaptersWithVerse";
import { Home } from "./pages/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/chapters/:bookName/:cap" element={<Chapters />} />
      </Route>
    </Routes>
  );
}
