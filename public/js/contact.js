// CAPTCHA
const formulario = document.querySelector('#formulario');

const compare = (userInput) => {
	let result = false;
	const captchaSolution = 'td4eva';

	if (captchaSolution === userInput) result = true;

	return result;
};

const displayForm = ()=>{
	let resultadoComparativa = compare(document.querySelector('#wrapperCaptcha #captcha').value.toLowerCase());
	
	if (resultadoComparativa) {
		formulario.classList.add('active');
		document.querySelector('#wrapperCaptcha').classList.add('inactive');
	} else {
		Swal.fire({
			title: 'Error!',
			text: 'captcha incorrecto, volve a intentarlo',
			icon: 'error',
			confirmButtonText: 'OK'
		});
	}

};

document.querySelector('#wrapperCaptcha button').addEventListener('click', (e)=>{
	displayForm();
});

formulario.addEventListener('submit', (e)=>{
	e.preventDefault();
	
	const name = formulario.querySelector('input#name').value;
	const mensajeSubmit = document.createElement('p');
	mensajeSubmit.innerHTML = "Thanks, " + name + " for contact us!";
	
	formulario.classList.remove('active');
	formulario.classList.add('inactive');
	
	formulario.parentElement.append(mensajeSubmit);
});