import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";

const Index = () => {
  const [inputValue, setInputValue] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-8">
        {isLoggedIn ? (
          <>
            <h2 className="text-xl font-semibold mb-4">Welcome back!</h2>
            <p className="mb-4">You are now logged in. Feel free to explore the app.</p>
          </>
        ) : (
          <>
            <h2 className="text-xl font-semibold mb-4">Welcome to My App</h2>
            <p className="mb-4">Please log in to access all features.</p>
          </>
        )}
        
        {isLoggedIn && (
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Enter something..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Button onClick={() => alert(`You entered: ${inputValue}`)}>
              Submit
            </Button>
          </div>
        )}
      </main>

      <footer className="bg-secondary text-secondary-foreground p-4 text-center">
        <p>&copy; 2024 My App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
