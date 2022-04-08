
import React, { useState} from "react";
import NavBar from "../NavBar";
import Cover from "../pages/Cover";
import About from "../pages/About";
import Footer from "../pages/Footer";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import Resume from "../pages/Resume";

// import Parallax from './components/parallax';
// continue working on Parallax functionality

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Resume') {
            return <Resume/>;
        }
        return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
    <div>
        {/* We are passing the currentPage from state and the function to update it */}
        <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
        <Cover />
        {/* Here we are calling the renderPage method which will return a component  */}
        {renderPage()}
        <Footer />
    </div>   
    );
}