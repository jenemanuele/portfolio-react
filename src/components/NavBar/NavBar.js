import React from 'react';
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names

function NavBar({ currentPage, handlePageChange }) {
    return (
        <header>
          <div className="header">                
            <h1><span className="Jen"> Jen</span>nifer Emanuele</h1>
                  <div>
                    <ul className="nav link">
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
                          href="#"
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
              </div> 
            </div>
          </header>

    );
  }
  
  export default NavBar;
  