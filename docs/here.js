const btn = document.querySelector('#seeit');


btn.addEventListener('click',() => {
	const input = document.querySelector('input');
 
 	input.setAttribute('value', window.atob('aGVsbG8='));
	 
	 
});