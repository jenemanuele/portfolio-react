import "./NavBar.css";

const NavBar = () => (
    <header>
        <div className="header">
            <h1><span className="Jen"> Jen</span>nifer Emanuele</h1>
            

            <div>
                <ul>
                     {/* <li>
                        <a href="#project-1"> Cocktails Tonight!</a>
                    </li>
                    <li>
                        <a href="#project-2">A Sheet of Inventory</a>
                    </li>
                    <li>
                        <a href="#project-3">Workday Scheduler</a>
                    </li>
                    <li>
                        <a href="#project-4">Readme generator</a>
                    </li> */}
                    <li>
                        <a href="#about-me">About me</a>
                    </li>
                    <li>
                        <a href="mailto:jemanuele@gmail.com">Contact</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#resume">Resume</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
)

export default NavBar;