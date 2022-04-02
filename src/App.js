import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState} from "react";
import NavBar from "./components/NavBar";
import Cover from "./components/Cover";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import { Nav } from 'react-bootstrap';
// import Parallax from './components/parallax';
// continue working on Parallax functionality



function App() {
    const [currentTab, setCurrentTab] = useState("about");

    //This function checks to see which tab is selected and then generated the appropriate tab
    const renderTab =() => {
      switch (currentTab) {
        case "about":
            return<About />;
        
        case "portfolio":
            return <Portfolio />
      
        case "contact":
            return <Contact />;

        case "resume":
            return <Resume />

        default: 
            return null;
      }
    };


    return (
      <div>
            <NavBar />
            <div className="mobile-header">
                  <Cover currentTab={currentTab} setCurrentTab={setCurrentTab}></Cover>

            </div>
            <div>
                  <main>{renderTab()}</main>
            </div>
            <div>
                  <Footer></Footer>
            </div>

      </div>
    )

  
}

export default App;
