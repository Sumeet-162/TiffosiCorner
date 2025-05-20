import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/theme-provider';
import { F1Provider } from './context/F1Context';
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Drivers from './pages/Drivers';
import Constructors from './pages/Constructors';
import Races from './pages/Races';
import News from './pages/News';
import About from './pages/About';
import Standings from './pages/Standings';
import Gallery from './pages/Gallery';
import History from './pages/History';
import FerrariDrivers from './pages/FerrariDrivers';
import './index.css';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" forcedTheme="dark">
      <F1Provider>
        <Router>
          <div className="flex flex-col min-h-screen max-w-[100vw] overflow-x-hidden bg-black font-montserrat">
            <Navbar />
            <main className="w-full py-0 pt-24 pb-0 px-0 flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/drivers" element={<Drivers />} />
                <Route path="/constructors" element={<Constructors />} />
                <Route path="/races" element={<Races />} />
                <Route path="/news" element={<News />} />
                <Route path="/about" element={<About />} />
                <Route path="/standings" element={<Standings />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/history" element={<History />} />
                <Route path="/ferrari-drivers" element={<FerrariDrivers />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </F1Provider>
    </ThemeProvider>
  );
}

export default App;
