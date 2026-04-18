import { Stack } from "../components/Stack/Stack";
import { Contact } from "../components/Contact/Contact";
import { Footer } from "../components/shared/Footer";

export function StackPage() {
  return (
    <div className="min-h-screen bg-transparent text-white pt-20">
      <Stack />
      <Contact />
      <Footer />
    </div>
  );
}
