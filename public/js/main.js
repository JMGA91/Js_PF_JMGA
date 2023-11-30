const currSec = document.body.dataset.section;

document.querySelectorAll('nav .nav-item .nav-link').forEach(navLink=>{
	if (navLink.className.includes(currSec)) navLink.classList.add('active');
});

//movies//

if (document.querySelector('#wrapperCajitas')) {
    const wrapperCajitas = document.querySelector('#wrapperCajitas');
    let arrayFavs = [];
    if (localStorage.arrayFavs) {
        arrayFavs = localStorage.arrayFavs.split(',');
    }
    const insertCajitas = (dataArray, section)=>{
        // dataArray = Array.from(dataArray);
        for (let i = 0; i < dataArray.length; i++) {
            const element = dataArray[i];

            let classActive = '';

            if (arrayFavs.includes(element.name)) {
                classActive = 'active';
            }

            let tempDiv = document.createElement('div');

            if (section === 'home') {
                tempDiv.setAttribute('class', `cajita cajita_home cajita_home_${i}`);
                tempDiv.innerHTML = `
                    <button class="btnFav ${classActive}" data-name="${element.name}">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 206.333 206.333" style="enable-background:new 0 0 206.333 206.333;" xml:space="preserve"><path fill="#bf0101" d="M206.333,76.952c0,25.365-13.967,46.069-42.7,63.297c-36.253,21.737-54.063,47.905-54.239,48.167 c-1.393,2.076-3.729,3.321-6.228,3.321c-2.497,0-4.83-1.243-6.223-3.314C96.671,188.02,78.66,161.81,42.7,140.249 C13.967,123.021,0,102.316,0,76.952c0-30.228,19.701-62.354,56.211-62.354c24.457,0,39.282,10.829,46.956,18.941 c7.674-8.113,22.499-18.941,46.956-18.941C186.633,14.597,206.333,46.724,206.333,76.952z"/></svg>
                    </button>
                    <img src="${element.image}">
                    <p class="cajitaOverlay">
                        ${element.name}<br>
                    </p>
                `;
            }
            if (section === 'movies') {
                tempDiv.setAttribute('class', `cajita cajita_movie cajita_movie_${i}`);
                tempDiv.innerHTML = `
                    <button class="btnFav ${classActive}" data-name="${element.name}">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 206.333 206.333" style="enable-background:new 0 0 206.333 206.333;" xml:space="preserve"><path fill="#bf0101" d="M206.333,76.952c0,25.365-13.967,46.069-42.7,63.297c-36.253,21.737-54.063,47.905-54.239,48.167 c-1.393,2.076-3.729,3.321-6.228,3.321c-2.497,0-4.83-1.243-6.223-3.314C96.671,188.02,78.66,161.81,42.7,140.249 C13.967,123.021,0,102.316,0,76.952c0-30.228,19.701-62.354,56.211-62.354c24.457,0,39.282,10.829,46.956,18.941 c7.674-8.113,22.499-18.941,46.956-18.941C186.633,14.597,206.333,46.724,206.333,76.952z"/></svg>
                    </button>
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
                    <button class="btnFav ${classActive}" data-name="${element.name}">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 206.333 206.333" style="enable-background:new 0 0 206.333 206.333;" xml:space="preserve"><path fill="#bf0101" d="M206.333,76.952c0,25.365-13.967,46.069-42.7,63.297c-36.253,21.737-54.063,47.905-54.239,48.167 c-1.393,2.076-3.729,3.321-6.228,3.321c-2.497,0-4.83-1.243-6.223-3.314C96.671,188.02,78.66,161.81,42.7,140.249 C13.967,123.021,0,102.316,0,76.952c0-30.228,19.701-62.354,56.211-62.354c24.457,0,39.282,10.829,46.956,18.941 c7.674-8.113,22.499-18.941,46.956-18.941C186.633,14.597,206.333,46.724,206.333,76.952z"/></svg>
                    </button>
                    <img src="${element.image}">
                    <p class="cajitaOverlay">
                        ${element.name}<br>
                        ${element.developed}<br>
                        ${element.year}<br>
                        ${element.platform}
                    </p>
                `;
            }
            if (section === 'search') {
                tempDiv.setAttribute('class', `cajita cajita_search cajita_search_${i}`);
                tempDiv.innerHTML = `
                    <button class="btnFav ${classActive}" data-name="${element.name}">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 206.333 206.333" style="enable-background:new 0 0 206.333 206.333;" xml:space="preserve"><path fill="#bf0101" d="M206.333,76.952c0,25.365-13.967,46.069-42.7,63.297c-36.253,21.737-54.063,47.905-54.239,48.167 c-1.393,2.076-3.729,3.321-6.228,3.321c-2.497,0-4.83-1.243-6.223-3.314C96.671,188.02,78.66,161.81,42.7,140.249 C13.967,123.021,0,102.316,0,76.952c0-30.228,19.701-62.354,56.211-62.354c24.457,0,39.282,10.829,46.956,18.941 c7.674-8.113,22.499-18.941,46.956-18.941C186.633,14.597,206.333,46.724,206.333,76.952z"/></svg>
                    </button>
                    <img src="${element.image}">
                    <p class="cajitaOverlay">
                        ${element.name}<br>
                    </p>
                `;
            }

            wrapperCajitas.append(tempDiv);
        }
    };
	const renderCajitas = (section)=>{
		section = section.toLowerCase();

		fetch(`http://localhost:6006/fp-api/${section}`)
		.then((res)=>{
			return res.json();
		})
		.then((res)=>{
			let dataArray = res;

			insertCajitas(dataArray, section);
		});
	};

    // add/remove favorites
    const addRemoveFav = (elmName, btnElm) => {
        elmName = elmName.toString();

        if (arrayFavs.includes(elmName)) {
            // remove from favs
            arrayFavs = arrayFavs.filter(val => val !== elmName);
            localStorage.setItem('arrayFavs', arrayFavs);
        } else {
            // add to favs
            arrayFavs.push(elmName);
            localStorage.setItem('arrayFavs', arrayFavs);
        }

        btnElm.classList.toggle('active');
    };

    window.addEventListener('click', (e)=>{
        const elm = e.target;

        if (elm.classList.contains('btnFav')) {
            addRemoveFav(elm.dataset.name, elm);
        }
    });

    // renderear cajitas segun seccion
	if (wrapperCajitas.classList.contains('cajitasHome')) {
		renderCajitas('home');
	}
	if (wrapperCajitas.classList.contains('cajitasMovies')) {
		renderCajitas('movies');
	}
	if (wrapperCajitas.classList.contains('cajitasGames')) {
		renderCajitas('games');
	}
	if (wrapperCajitas.classList.contains('cajitasSearch')) {
        insertCajitas(searchResults, 'search');
	}
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

// search form
document.querySelector('#headerSearchForm').addEventListener('submit', (e)=>{
    e.preventDefault();

    window.location = `/search/${e.target.querySelector('input').value}`;
});

window.addEventListener('load', ()=>{
    displayUserName();
});