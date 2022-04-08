import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => 

    <PortfolioContainer />;
// import Parallax from './components/parallax';
// continue working on Parallax functionality



// function App() {
//     const [currentTab, setCurrentTab] = useState("about");

//     //This function checks to see which tab is selected and then generated the appropriate tab
//     const renderTab =() => {
//       switch (currentTab) {
//         case "about":
//             return<About />;
        
//         case "portfolio":
//             return <Portfolio />
      
//         case "contact":
//             return <Contact />;

//         case "resume":
//             return <Resume />

//         default: 
//             return null;
//       }
//     };


//     return (
//       <div>
//             <NavBar />
//             <div className="mobile-header">
//                   <Cover currentTab={currentTab} setCurrentTab={setCurrentTab}></Cover>

//             </div>
//             <div>
//                   <main>{renderTab()}</main>
//             </div>
//             <div>
//                   <Footer></Footer>
//             </div>

//       </div>
//     )

  
// }

export default App;
