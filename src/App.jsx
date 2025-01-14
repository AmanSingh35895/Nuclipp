import { BrowserRouter, Route, Routes } from "react-router-dom";

//screens
import {Home} from "./pages/Home/Home";
import {OurStory} from "./pages/Our story/OurStory";
import Faq from "./pages/FAQ/Faq";
import OurServices from "./pages/Our_Services/OurServices";
import Results from "./pages/Result and Success/Results";
import Pricing from "./pages/Pricing/Pricing";
import { ContactUs } from "./pages/Contact_us/ContactUs";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our_story" element={<OurStory />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/result_and_sucess" element={<Results />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
