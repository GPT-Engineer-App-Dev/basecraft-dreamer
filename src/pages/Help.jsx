import Navbar from "@/components/Navbar";

const Help = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Help</h2>
        <p>This is the help page. You can add FAQs, support information, or user guides here.</p>
      </main>
    </div>
  );
};

export default Help;
