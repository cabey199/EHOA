import "./global.css";
import { createRoot, Root } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Join from "./pages/Join";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";
import ThankYou from "./pages/ThankYou";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/join" element={<Join />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

declare global {
  interface Window {
    __REACT_ROOT__?: Root;
  }
}

const container = document.getElementById("root")!;
if (!window.__REACT_ROOT__) {
  window.__REACT_ROOT__ = createRoot(container);
}
window.__REACT_ROOT__.render(<App />);
