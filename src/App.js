import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ViewAllEvents from './pages/ViewAllEvents';
import AboutUs from './pages/AboutUs'
import './App.css';
import { LanguageProvider } from './components/LanguageContext';

function App() {
  return (
    <LanguageProvider>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/event" element={<ViewAllEvents/>} />
      <Route path="/aboutus" element={<AboutUs/>} />
    </Routes>
    </LanguageProvider>
  );
}

export default App;
