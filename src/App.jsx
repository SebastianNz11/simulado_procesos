import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { Lifo } from "./Lifo";
import { Fifo } from "./Fifo";
import { Vrs } from "./Vrs";

export const App = () => {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lifo" element={<Lifo />} />
          <Route path="/fifo" element={<Fifo />} />
          <Route path="/vrs" element={<Vrs />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};
