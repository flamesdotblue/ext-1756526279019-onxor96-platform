import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] h-72 w-72 rounded-full bg-gradient-to-tr from-pink-400 via-fuchsia-400 to-purple-400 opacity-20 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] h-80 w-80 rounded-full bg-gradient-to-tr from-sky-400 via-cyan-400 to-teal-400 opacity-20 blur-3xl" />
      </div>
      <NavBar />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
