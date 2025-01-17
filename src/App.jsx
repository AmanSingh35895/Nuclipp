import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { OurStory } from "./pages/Our story/OurStory";
import { Pricing } from "./pages/Pricing/Pricing";
import { ContactUs } from "./pages/ContactUs/ContactUs";
import { FAQ } from "./pages/FAQ/FAQ";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our_story" element={<OurStory />} />
        <Route path="/services" element={<Home />} />
        <Route path="/result_and_sucess" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
