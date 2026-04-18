import { Timeline } from "../components/Timeline/Timeline";
import { Contact } from "../components/Contact/Contact";
import { Footer } from "../components/shared/Footer";

export function ExperiencePage() {
  return (
    <div className="min-h-screen bg-transparent text-white pt-20">
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}
