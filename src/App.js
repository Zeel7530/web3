import './App.css';
import Footer from './layout/footer/Footer';
import Header from './layout/header/Header';
import Barnd from './pages/barnd/Barnd';
import Hero from './pages/hero/Hero';
import Level from './pages/level/Level';
import Project from './pages/project/Project';
import '../src/assets/css/Responsive.css';
import '../src/assets/font/stylesheet.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Barnd />
      <Project />
      <Level />
      <Footer />

    </div>
  );
}

export default App;
