const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require("fs");
// const pathToFile = path.join(process.cwd(), './src/public/users/default/favorites.json');
const readDb = (pathToFile)=>{
	let dataDb = '';
	try {
		// try to get favorites.json
		fs.readFileSync(pathToFile);
		dataDb = fs.readFileSync(pathToFile);
	} catch (e) {
		// create empty favorites.json if doesn't exists
		fs.writeFile(pathToFile, '', (err) => {
			if (err) throw err;
		});
	}
	dataDb = dataDb.toString();

	if (dataDb === '' || dataDb === '[]') dataDb = [];

	if (dataDb.length > 0) {
		dataDb = JSON.parse(dataDb);
	} else {
		dataDb = 'noData';
	}

	return dataDb;
};

const renderHome = (req, res)=>{
	// res.send('Hello World!');
	res.render('index.html', {currSec: 'home'});
};

// ROUTES FOR FRONT END
router.all('/', renderHome);
router.all('/home', renderHome);

router.all('/movies', (req, res)=>{
	res.render('movies.html', {currSec: 'movies'});
});
router.all('/books', (req, res)=>{
	res.render('books.html', {currSec: 'books'});
});
router.all('/games', (req, res)=>{
	res.render('games.html', {currSec: 'games'});
});
router.all('/contact', (req, res)=>{
	res.render('contact.html', {currSec: 'contact'});
});
router.all('/search/:query', (req, res)=>{
	let searchResults = [];
	const query = req.params.query.toLowerCase();
	const moviesArray = readDb(path.join(process.cwd(), `./public/db/movies.json`));
	const gamesArray = readDb(path.join(process.cwd(), `./public/db/games.json`));

	for (let i = 0; i < moviesArray.length; i++) {
		const element = moviesArray[i];
		const elementName = element.name.toLowerCase();
		if (elementName.includes(query)) {
			searchResults.push(element);
		}
	}
	for (let i = 0; i < gamesArray.length; i++) {
		const element = gamesArray[i];
		const elementName = element.name.toLowerCase();
		if (elementName.includes(query)) {
			searchResults.push(element);
		}
	}

	// searchResults = searchResults.toString();
	res.render('search-results.html', {currSec: 'searchResults', query: query, searchResults: searchResults});
	/* res.send(`searchResults: ${searchResults}`);
	res.end(); */
});

// ROUTES FOR API
router.all('/fp-api/:type', (req, res)=>{
	// console.log('req.params: ', req.params);
	// console.log('req.params.type: ', req.params.type);
	const typeRequested = req.params.type;
	// console.log('typeRequested: ', typeRequested);

	if (typeRequested != 'home' && typeRequested != 'movies' && typeRequested != 'games') {
		res.send(`Invalid type of request: ${typeRequested}`);
		res.end();
	}

	let dataDb;
	if (typeRequested === 'home') {
		let homeArray = [];
		let moviesArray = readDb(path.join(process.cwd(), `./public/db/movies.json`));
		let gamesArray = readDb(path.join(process.cwd(), `./public/db/games.json`));

		for (let i = 0; i < 10; i++) {
			const element = (i % 2 === 0) ? gamesArray[i]: moviesArray[i];
			homeArray.push(element);
		}
		
		dataDb = homeArray;
	} else {
		const pathToFile = path.join(process.cwd(), `./public/db/${typeRequested}.json`);
		dataDb = readDb(pathToFile);
	}

	if (dataDb != '') res.send(dataDb);
});

module.exports = router;