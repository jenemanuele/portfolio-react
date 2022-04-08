import React from 'react';
import Project from '../Project'

function Portfolio() {
    const projects = [
        {
            name: 'Sheet of Inventory',
            description: 'Sheet-of-Inventory a instrument warehouse application that allows the user to easily find, update, and add to current inventory.',
            image: '../../SheetOfInventory.JPG',
            technology: [
                'HTML & CSS',
                'JavaScript',
                'Node.js',
                'Express.js',
                'Handlebars',
                'MySQL',
                'Sequelize',
            ],
            github: 'https://github.com/jenemanuele/Sheet-Of-Inventory',
            deployed: 'https://protected-mountain-13917.herokuapp.com/login'
        },
        {
			name: 'Cocktails Tonight',
			description: 'Purpose A website application that gives users a random cocktail and a random recipe per a search button for a fun date night or cocktail night at home! Also a YouTube pop-out window for a video on how to make your recipe.',
			image: '../../../SheetOfInventory.JPG',
			technologies: [
				'HTML & CSS',
				'Bulma',
				'JavaScript',
				'jQuery',
				'Google Fonts',				
			],
			github: 'https://github.com/Rod0352/Cocktails-Tonight',
			deployed: 'https://rod0352.github.io/Cocktails-Tonight/',
		},
        {
			name: 'Budget Tracker',
			description: 'A budget tracker that will work with or without an internet connection. Items will be added to the db after the internet connection is established using a service worker.',
			image: '../../../BudgetTracker.JPG',
			technologies: [
				'JavaScript',
				'MongoDB',
				'IndexedDB',
				'Service Worker',
				'Node.js',
				'Express.js',				
			],
			github: 'https://github.com/jenemanuele/Budget-Tracker',
			deployed: 'https://safe-fjord-62308.herokuapp.com/',
		},
        {
			name: 'Workday Scheduler',
			description: 'A website that offers day scheduling by date, with color codes for past, present and future',
			// image: '',
			technologies: [
				
			],
			github: 'https://github.com/jenemanuele/Workday-scheduler',
			deployed: 'https://jenemanuele.github.io/Workday-scheduler/',
		},
        {
			name: 'Password Generator',
			description: 'Application that combines the front and back end that allows a user to generate a password combination of 8 to 128 characters based on selected criteria.',
			image: 'Password-Gen.JPG',
			technologies: [
				'HTML & CSS',
				'JavaScript',
				
			],
			github: 'https://github.com/jenemanuele/Password-generator',
			deployed: 'https://jenemanuele.github.io/Password-generator/',
		},
        {
			name: 'README-generator',
			description: 'Back-end utility that generates a readme file for github.',
			image: 'README-generator.JPG',
			technologies: [
				'Node.js',
				'Inquirer',	
			],
			github: 'https://github.com/jenemanuele/README-generator',
			deployed: 'Back-end project',
		},
    ];

    return (
        <section>
			<div>
				<h1 className="page-header">Portfolio</h1>
			</div>
			<div>
				<ul>
					<li>
						<Project projects={projects[0]}></Project>
					</li>
					<li>
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul>
					<li>
						<Project projects={projects[2]}></Project>
					</li>
					<li>
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul>
					<li>
						<Project projects={projects[4]}></Project>
					</li>
					<li>
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
    );
}

export default Portfolio;