import './App.css';

import NAVBAR from './components/Navbar/NavBar'
import ComingSoon from './components/page/ComingSoon';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div style={{position:"relative"}}>
    <NAVBAR />
    <ComingSoon />
    <Footer />
    </div>
  );
}

export default App;
