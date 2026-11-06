
import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-[#0B0D12] text-white">

        {/* Navigation */}
        <Navbar />

        {/* Main content */}
        <main>
  <Hero />
  <Works />
  <About />
  <Experience />
  <Tech />
  <Contact />
</main>

      </div>
    </BrowserRouter>
  );
};

export default App;
