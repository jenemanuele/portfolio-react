// import "./NavBar.css";

const NavBar = (props) => {
    const { currentTab, setCurrentTab } = props;

        return (
        <header>
            <div className="header">
                <h1><span className="Jen"> Jen</span>nifer Emanuele</h1>
                

                <div>
                    <ul className="flex-row mobile-view">
                        <li className={currentTab === "about" ? "mx-2 navActive" : "mx-2"}>
                            <span onClick={() => setCurrentTab("about")}>About me</span>
                        </li>
                        <li className={currentTab === "portfolio" ? "mx-2 navActive" : "mx-2"}>
                            <span onClick={() => setCurrentTab("portfolio")}>Portfolio</span>
                        </li>
                        <li className={currentTab === "contact" ? "mx-2 navActive" : "mx-2"}>
                            <span onClick={() => setCurrentTab("contact")}>Contact</span>
                        </li>
                        <li className={currentTab === "resume" ? "mx-2 navActive" : "mx-2"}>
                            <span onClick={() => setCurrentTab("resume")}>Resume</span>
                        </li>                      
                    </ul>
                </div>
            </div>
        </header>
    );
}
export default NavBar;