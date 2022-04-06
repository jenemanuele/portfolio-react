import React from 'react';
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names

function NavBar({ currentPage, handlePageChange }) {
    return (
     <header>
       <div className="header">                
        <h1><span className="Jen"> Jen</span>nifer Emanuele</h1>
        </div>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a
                href="#about"
                onClick={() => handlePageChange('About')}
                // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
              >
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}
                // Check to see if the currentPage is `portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#resume"
                onClick={() => handlePageChange('Resume')}
                // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
              >
                Resume
              </a>
            </li>
          </ul>
      </header>
    );
  }
  
  export default NavBar;
  

// const NavBar = (props) => {
//     const { currentTab, setCurrentTab } = props;

//         return (
//         <header>
//             <div className="header">
//                 <h1><span className="Jen"> Jen</span>nifer Emanuele</h1>
//                 {/* <div>
//                 <img src="./images/Jen-E-small.jpg" alt="Head shot of Jennifer Emanuele" /></span>
//                </div> */}
                
//                 <div> 
//                     <ul className="flex-row mobile-view">
//                         <li className={currentTab === "about" ? "mx-2 navActive" : "mx-2"}>
//                             <span onClick={() => setCurrentTab("about")}>About Me</span>
//                         </li>
//                         <li className={currentTab === "portfolio" ? "mx-2 navActive" : "mx-2"}>
//                             <span onClick={() => setCurrentTab("portfolio")}>Portfolio</span>
//                         </li>
//                         <li className={currentTab === "contact" ? "mx-2 navActive" : "mx-2"}>
//                             <span onClick={() => setCurrentTab("contact")}>Contact</span>
//                         </li>
//                         <li className={currentTab === "resume" ? "mx-2 navActive" : "mx-2"}>
//                             <span onClick={() => setCurrentTab("resume")}>Resume</span>
//                         </li>                      
//                     </ul>
//                 </div>
//             </div>
//         </header>
//     );
// }
// export default NavBar;