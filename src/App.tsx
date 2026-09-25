import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import NewApplication from "./pages/newApplication/NewApplication";
import { BrowserRouter, Route, Routes } from "react-router";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new_application" element={<NewApplication />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
