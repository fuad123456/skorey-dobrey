const buttonHiddens = document.querySelector('.btn-hid')
buttonHiddens.addEventListener('click',function(){
	let hiddenText = document.querySelector('.hidden-text')
	
	if(hiddenText.classList.contains('d-none')){
		hiddenText.classList.remove('d-none')
		this.innerHTML = 'Скрыть'
	}
	else{
		hiddenText.classList.add('d-none')
		this.innerHTML = 'Увидеть полностью'
	}
})