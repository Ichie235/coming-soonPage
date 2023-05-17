import './App.css';
import Navbar from './components/Navbar/NavBar';
import ComingSoon from './components/page/ComingSoon';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div style={{position:"relative"}}>
    <Navbar />
    <ComingSoon />
    <Footer />
    </div>
  );
}

export default App;
