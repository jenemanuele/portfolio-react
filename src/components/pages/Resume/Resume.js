import React from "react";

function Resume() {
    return(
            <section>
                <div className="place-items-center">
                    <h1 className="page-header">Resume</h1>
                    {/* <h2 className="secondary-header">Proficiencies:</h2> */}
                </div>
                <div>
                    <h5>Front-End</h5>
                    <ol>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>Bootstrap</li>
                        <li>React</li>
                        <li>version control/Git</li> 
                        <li>Bulma</li>
                    </ol>
                    <br></br>
                    <h5>Back-End</h5>
                    <ol>
                        <li>APIs</li>
                        <li>NodeJS</li>
                        <li>Express</li>
                        <li>Model View Controller (MVC)</li>
                        <li>REST</li>
                        <li>Progressive Web Applications (PWA)</li>
                        <li>Git</li>
                        <li>npm</li>
                        <li>Jest</li>
                        <li>Webpack</li>
                    </ol>
                    <br></br>
                    <h5>Database</h5>
                    <ol>
                        <li>MySQL</li>
                        <li>Sequelize</li>
                        <li>NoSQL</li>
                        <li>SQLite</li>
                        <li>GraphQL</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                    </ol>
                </div>
            </section>
        );
    
}

export default Resume;