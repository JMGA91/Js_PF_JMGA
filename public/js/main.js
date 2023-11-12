const currSec = document.body.dataset.section;

document.querySelectorAll('nav .nav-item .nav-link').forEach(navLink=>{
	if (navLink.className.includes(currSec)) navLink.classList.add('active');
});

//movies//

if (document.querySelector('#wrapperCajitas')) {
    const wrapperCajitas = document.querySelector('#wrapperCajitas');
	var renderCajitas = (section)=>{
		section = section.toLowerCase();

		fetch(`http://localhost:6006/fp-api/${section}`)
		.then((res)=>{
			return res.json();
		})
		.then((res)=>{
			let dataArray = res;

			for (let i = 0; i < dataArray.length; i++) {
				const element = dataArray[i];

				let tempDiv = document.createElement('div');

				if (section === 'home') {
					tempDiv.setAttribute('class', `cajita cajita_home cajita_home_${i}`);
					tempDiv.innerHTML = `
						<img src="${element.image}">
						<p class="cajitaOverlay">
							${element.name}<br>
						</p>
					`;
				}
				if (section === 'movies') {
					tempDiv.setAttribute('class', `cajita cajita_movie cajita_movie_${i}`);
					tempDiv.innerHTML = `
						<img src="${element.image}">
						<p class="cajitaOverlay">
							${element.name}<br>
							${element.category}<br>
							${element.directed}<br>
							${element.duration}
						</p>
					`;
				}
				if (section === 'games') {
					tempDiv.setAttribute('class', `cajita cajita_game cajita_game_${i}`);
					tempDiv.innerHTML = `
						<img src="${element.image}">
						<p class="cajitaOverlay">
							${element.name}<br>
							${element.developed}<br>
							${element.year}<br>
							${element.platform}
						</p>
					`;
				}
	
				wrapperCajitas.append(tempDiv);
			}
		});
	};

	if (wrapperCajitas.classList.contains('cajitasHome')) {
		renderCajitas('home');
	}
	if (wrapperCajitas.classList.contains('cajitasMovies')) {
		renderCajitas('movies');
	}

	if (wrapperCajitas.classList.contains('cajitasGames')) {
		renderCajitas('games');
	}

    /* var moviesArray = [
        {
            name: "65",
            category: "science fiction, action film",
            directed: "AScott Beck, Bryan Woods",
            duration: "93 minutes",
            image: "../assets/img/65.webp"
        },
        {
            name: "Ant-Man and the Wasp: Quantumania",
            category: "superhero film",
            directed: "Peyton Reed",
            duration: "124 minutes",
            image: "../assets/img/Ant_Man_y_la_Avispa_Quantumanaia-585469373-large.webp"
        },
        {
            name: "John Wick: Chapter 4",
            category: "neo-noir action thriller film",
            directed: "Chad Stahelski",
            duration: "169 minutes",
            image: "../assets/img/jw4.webp"
        },
        {
            name: "Shazam! Fury of the Gods",
            category: "superhero film",
            directed: "David F. Sandberg",
            duration: "130 minutes",
            image: "../assets/img/shazam.webp"
        },
        {
            name: "Knock at the Cabin",
            category: "apocalyptic psychological horror",
            directed: "M. Night Shyamalan",
            duration: "100 minutes",
            image: "../assets/img/knockatthecabin.webp"
        },
        {
            name: "Scream VI",
            category: "slasher film",
            directed: "Matt Bettinelli-Olpin, Tyler Gillett",
            duration: "122 minutes",
            image: "../assets/img/scream6.webp"
        },
        {
            name: "The Fabelmans",
            category: "coming-of-age drama film",
            directed: "Steven Spielberg",
            duration: "151 minutes",
            image: "../assets/img/Los_Fabelman-723163902-large.webp"
        },
        {
            name: "Jason Bourne",
            category: "action-thriller film",
            directed: "Paul Greengrass",
            duration: "123 minutes",
            image: "../assets/img/jason_bourne.webp"
        },
        {
            name: "V for Vendetta",
            category: "dystopian political action film",
            directed: "James McTeigue",
            duration: "133 minutes",
            image: "../assets/img/V_For_Vendetta.webp"
        },
        {
            name: "21 Blackjack",
            category: "heist drama film",
            directed: "Robert Luketic",
            duration: "123 minutes",
            image: "../assets/img/21_Blackjack.webp"
        }
    ];

    var gamesArray = [
        {
            name: "Monkey Island",
            developed: "Lucasfilm Games y Telltale Games",
            year: "1990",
            platform: "PC",
            image: "../assets/img/monkey.webp"
        },
        {
            name: "Reverie",
            developed: "Lucasfilm Games y Telltale Games",
            year: "1990",
            platform: "PC",
            image: "../assets/img/reverie.webp"
        },
        {
            name: "Synapse",
            developed: "Lucasfilm Games y Telltale Games",
            year: "1990",
            platform: "PC",
            image: "../assets/img/Synapse.webp"
        },
        {
            name: "Remnant 2",
            developed: "Lucasfilm Games y Telltale Games",
            year: "1990",
            platform: "PC",
            image: "../assets/img/remnant2.webp"
        },
        {
            name: "HL",
            developed: "Lucasfilm Games y Telltale Games",
            year: "1990",
            platform: "PC",
            image: "../assets/img/HL.webp"
        },
        {
            name: "Megaman",
            developed: "Lucasfilm Games y Telltale Games",
            year: "1990",
            platform: "PC",
            image: "../assets/img/megaman.webp"
        },
        {
            name: "DI2",
            developed: "Lucasfilm Games y Telltale Games",
            year: "1990",
            platform: "PC",
            image: "../assets/img/DI2.webp"
        },
        {
            name: "r6",
            developed: "Lucasfilm Games y Telltale Games",
            year: "1990",
            platform: "PC",
            image: "../assets/img/r6.webp"
        },
        {
            name: "doom_ftw",
            developed: "Lucasfilm Games y Telltale Games",
            year: "1990",
            platform: "PC",
            image: "../assets/img/doom_ftw.webp"
        },
        {
            name: "Skyrim",
            developed: "Lucasfilm Games y Telltale Games",
            year: "1990",
            platform: "PC",
            image: "../assets/img/skyrim.webp"
        }
    ]; */
    
	/* const getData = (type)=>{
		if (!type) return;
	
		fetch(`http://localhost:6006/fp-api/${type}`)
		.then((res)=>{
			return res.json();
		})
		.then((res)=>{
			res.forEach(elm=>{
				moviesArray.push(elm);
			});
		});
	}; */
    
    /* var homeArray = [];
    for (let i = 0; i < 10; i++) {
        const element = (i % 2 === 0) ? gamesArray[i]: moviesArray[i];
        homeArray.push(element);
    } */
    
    /* let dataArray;
    let generateCajita;
    if (wrapperCajitas.classList.contains('cajitasHome')) {
        dataArray = homeArray;
        generateCajita = (element, i)=>{
            let tempDiv = document.createElement('div');
            tempDiv.setAttribute('class', `cajita cajita_home cajita_home_${i}`);
            tempDiv.innerHTML = `
                <img src="${element.image}">
                <p class="cajitaOverlay">
                    ${element.name}<br>
                </p>
            `;

            wrapperCajitas.append(tempDiv);
        };
    }
    if (wrapperCajitas.classList.contains('cajitasMovies')) {
        dataArray = moviesArray;
        generateCajita = (element, i)=>{
            let tempDiv = document.createElement('div');
            tempDiv.setAttribute('class', `cajita cajita_movie cajita_movie_${i}`);
            tempDiv.innerHTML = `
                <img src="${element.image}">
                <p class="cajitaOverlay">
                    ${element.name}<br>
                    ${element.category}<br>
                    ${element.directed}<br>
                    ${element.duration}
                </p>
            `;

            wrapperCajitas.append(tempDiv);
        };
    }
    if (wrapperCajitas.classList.contains('cajitasGames')) {
        dataArray = gamesArray;
        generateCajita = (element, i)=>{
            let tempDiv = document.createElement('div');
            tempDiv.setAttribute('class', `cajita cajita_game cajita_game_${i}`);
            tempDiv.innerHTML = `
                <img src="${element.image}">
                <p class="cajitaOverlay">
                    ${element.name}<br>
                    ${element.developed}<br>
                    ${element.year}<br>
                    ${element.platform}
                </p>
            `;

            wrapperCajitas.append(tempDiv);
        };
    }

    for (let i = 0; i < dataArray.length; i++) {
        const element = dataArray[i];

        generateCajita(element, i);
    } */
}

const loginBtn = document.createElement ('button');
loginBtn.setAttribute ('id', 'loginBtn');
loginBtn.innerHTML = 'Login';
document.querySelector ('form[role="search"]').parentElement.append(loginBtn)

const displayUserName = ()=> {
    if (localStorage.getItem('username')) {
        document.querySelector('.saludoUsuario').innerHTML = 'Hola, ' + localStorage.username;
        
    }
}

const displayLogin = ()=> {
    const userName = prompt('username');
    localStorage.setItem('username',userName);
    // document.querySelector('.saludoUsuario').innerHTML = 'Hola, ' + userName;
    displayUserName();
};

loginBtn?.addEventListener('click', (e)=>{
    displayLogin();
});

window.addEventListener('load', ()=>{
    displayUserName();
});