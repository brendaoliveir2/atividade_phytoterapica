import Header from './Components/Header'
import Menu from './Components/Menu';
import Section from './Components/Section';
import Section1 from './Components/Section1';
import Produtos from './Components/Produtos';
import SignUp from './Components/Signup';
import Vegano from './Components/Areavegana';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
    <Header />
    <Menu />
    <Section />
    <Section1 />
    <Produtos />
    <SignUp />
    <Vegano />
    <Footer />
    </div>
  );
}

export default App;
