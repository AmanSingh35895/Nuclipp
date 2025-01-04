import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { OurStory } from "./pages/Our story/OurStory"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/our_story" element = {<OurStory />} />
        <Route path = "/services" element = {<Home />} />
        <Route path = "/result_and_sucess" element = {<Home />} />
        <Route path = "/pricing" element = {<Home />} />
        <Route path = "/contact_us" element = {<Home />} />
        <Route path = "/faq" element = {<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
