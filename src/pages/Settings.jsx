import Navbar from "@/components/Navbar";

const Settings = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Settings</h2>
        <p>This is the settings page. You can add various application settings here.</p>
      </main>
    </div>
  );
};

export default Settings;
