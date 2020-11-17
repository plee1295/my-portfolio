import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
	title: 'Parker Lee | Developer',
	lang: 'en',
	description: 'Welcome to my website'
};

// HERO DATA
export const heroData = {
	title: 'Hello, my name is ',
	name: 'Parker Lee',
	subtitle: "I'm a Full Stack Developer",
	cta: 'Know More'
};

// ABOUT DATA
export const aboutData = {
	img: 'profile.jpg',
	paragraphOne:
		'I am a Full Stack Software Developer and Computer Science student graduating in December 2020. Before pursuing a degree, I began coding as a self-taught developer. I am a fast learner with excellent communication and time management skills.',
	paragraphTwo:
		'The bulk of my experience is as a JavaScript developer, mainly React and Node. With that being said, I am constantly learning new technologies and do my best to use the best technology for the current project. ',
	paragraphThree: 'You can view my up to date resume in Google Docs by clicking the button below.',
	resume: 'https://docs.google.com/document/d/1zjoh5TKXBpECa7eIeGtT3ooZcT_85G7GPlpUnjFZJR4/edit?usp=sharing'
};

// PROJECTS DATA
export const projectsData = [
	{
		id: nanoid(),
		img: 'covid.jpg',
		title: 'Covid-19 Tracker',
		info:
			'This project was created using React.js, Material UI, and Firebase for deployment. It connects to the disease.sh API to get actual up-to-date statistics on covid-19 for each country and displays this data using the react-leaflet library.',
		info2: '',
		url: 'https://covid-tracker-c1e38.web.app/',
		repo: 'https://github.com/plee1295/covid-tracker'
	},
	{
		id: nanoid(),
		img: 'zoom.jpg',
		title: 'Zoom Clone',
		info:
			'This project was created using Node.js and Heroku for deployment. This application allows users to connect to a live video and chat interface for real-time communication.',
		info2: '',
		url: 'https://warm-hamlet-71922.herokuapp.com/',
		repo: 'https://github.com/plee1295/zoom-clone'
	}
];

// CONTACT DATA
export const contactData = {
	cta: 'Would you like to work with me? Awesome!',
	btn: "Let's Talk",
	email: 'parker.lee.1295@gmail.com'
};

// FOOTER DATA
export const footerData = {
	networks: [
		{
			id: nanoid(),
			name: 'linkedin',
			url: 'https://www.linkedin.com/in/parker-lee-cs/'
		},
		{
			id: nanoid(),
			name: 'github',
			url: 'https://github.com/plee1295'
		}
	]
};

// Github start/fork buttons
export const githubButtons = {
	isEnabled: false
};
