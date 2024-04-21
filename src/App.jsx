import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { Lifo } from "./Lifo";
import { Fifo } from "./Fifo";

export const App = () => {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lifo" element={<Lifo />} />
          <Route path="/fifo" element={<Fifo />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};
