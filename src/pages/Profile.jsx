import Navbar from "@/components/Navbar";

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Profile</h2>
        <p>This is the profile page. You can add user information and settings here.</p>
      </main>
    </div>
  );
};

export default Profile;
