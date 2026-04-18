import { Routes, Route } from "react-router-dom";
import { Navbar1 } from "./components/ui/navbar-1";
import { HomePage } from "./pages/HomePage";
import { ExperiencePage } from "./pages/ExperiencePage";
import { AboutMePage } from "./pages/AboutMePage";
import { ScrollToTop } from "./components/shared/ScrollToTop";
import { AuroraBackground } from "./components/ui/aurora-background";

export default function App() {
  return (
    <div className="relative min-h-screen text-white selection:bg-white/20 selection:text-white">
      <AuroraBackground className="fixed inset-0 z-[-1] !h-screen w-full bg-black dark:bg-black pointer-events-none" />
      <div className="relative z-10 w-full min-h-screen">
        <ScrollToTop />
        <Navbar1 />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/experience" element={<ExperiencePage />} />
        </Routes>
      </div>
    </div>
  );
}
