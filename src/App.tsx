import Profile from "./components/Profile";
import Button from "./components/ui/Button";
import { Search, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Toaster } from "sonner";
import FormWithDate from "./day6/FormWithDate";
import SummaryChart from "./day6/SummaryChart";
import CarouselDemo from "./day6/CarouselDemo";

const App: React.FC = () => {
  const [submissions, setSubmissions] = useState<any[]>([]);

  function handleNewSubmission(data: any) {
    setSubmissions((prev) => [...prev, data]);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      <Toaster />
      
      {/* Original UI Components */}
      <div className="p-4 bg-white rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">UI Components Demo</h2>
        <div className="space-y-4">
          <Profile name="Mudi" age={22} />
          <Profile name="Beginner Student" />
          
          <div className="bg-success text-white p-4 rounded-xl">
            Tailwind Design Token Test
          </div>
          
          <div className="text-sm md:text-lg lg:text-2xl">Responsive text</div>
          
          <button className="bg-brand hover:bg-blue-700 text-white px-4 py-2 rounded">
            Hover me
          </button>

          <div className="flex flex-wrap gap-4 mt-6">
            <Button>Default Button</Button>
            <Button variant="danger">Danger Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button size="lg">Big Button</Button>
            <Button size="sm">Small Button</Button>
            <Button variant="success">Success</Button>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <Search className="w-5 h-5 text-blue-500" />
            <span>Search Icon Test</span>
          </div>

          <motion.div
            className="mt-6 p-4 bg-brand text-white rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            I animated into view!
          </motion.div>

          <section className="bg-gray-50 p-8 rounded-xl border">
            <h1 className="text-2xl font-bold mb-4">Welcome</h1>
            <p className="mb-4">This is my first real Tailwind section.</p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">
              Get Started
            </button>
          </section>
        </div>
      </div>

      {/* Day6 Components */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Form & Data Visualization</h2>
        <FormWithDate onSubmitData={handleNewSubmission} />

        {submissions.length > 0 && (
          <div className="mt-6">
            <SummaryChart data={submissions} />
          </div>
        )}

        <div className="mt-6">
          <CarouselDemo />
        </div>
      </div>
    </div>
  );
};

export default App;
