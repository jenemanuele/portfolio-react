import './App.css';
import NavBar from "./components/NavBar";
import Cover from "./components/Cover";
import About from "./components/About";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
    
      <NavBar />
      <Cover />
      <About />    
      <div>
        <Footer />
      </div>
    </div>

  
  );

  
}

export default App;
