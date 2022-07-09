import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGE = 'show-error-message';

type FunctionShowError = (input: HTMLInputElement, message: string) => void;
type FunctionHideMessage = (form: HTMLFormElement) => void;
type FunctioncheckForEmptyFields = (...args: HTMLInputElement[]) => void;
type FunctioncheckForequalPassword = (firstPasswordInput: HTMLInputElement, secondPasswordInput: HTMLInputElement) => void;
type FunctionCheckEmail = (input: HTMLInputElement) => void;

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', function (event) {
	event.preventDefault();
	hideAllErrorMessages(this);
	checkForEmptyFields(username, email, password, password2);
	checkEmail(email);
	checkForequalPassword(password, password2);
	if (shouldSendForm(this)) {
		console.log('Enviado.');
	}
});

const hideAllErrorMessages: FunctionHideMessage = (form) => {
	form.querySelectorAll(`.${SHOW_ERROR_MESSAGE}`).forEach(item => {item.classList.remove(SHOW_ERROR_MESSAGE);});
};

const showErrorMessage: FunctionShowError = (input, message) => {
	const formFields = input.parentElement as HTMLDivElement;
	const errorMessage = formFields.querySelector('.error-message') as HTMLSpanElement;

	errorMessage.innerText = message;
	formFields.classList.add(SHOW_ERROR_MESSAGE);
};

const checkForEmptyFields: FunctioncheckForEmptyFields = (...args) => {
	args.forEach(element => {
		if (!element.value){
			showErrorMessage(element, `Campo ${element.name} não pode ficar vazio`);
		}
	});
};

const checkForequalPassword: FunctioncheckForequalPassword = (firstPasswordInput, secondPasswordInput) => {
	if (firstPasswordInput.value !== secondPasswordInput.value) {
		showErrorMessage(secondPasswordInput, 'Senhas diferentes');
		showErrorMessage(firstPasswordInput, 'Senhas diferentes');
	}
};

const checkEmail: FunctionCheckEmail = (input) => {
	if (!isEmail(input.value)){
		showErrorMessage(input, 'Email inválido');    
	} 
};

const shouldSendForm = (input: HTMLFormElement) => {
	let send = true;

	if (input.querySelectorAll(`.${SHOW_ERROR_MESSAGE}`).length > 0) {
		send = false;
	}

	return send;
};