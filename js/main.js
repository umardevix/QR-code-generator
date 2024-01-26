// https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=hello


const form = document.querySelector('#form')
const input = document.querySelector('#input')
const cardQr = document.querySelector('#qrCode')


form.addEventListener('submit', (event) => {
	event.preventDefault()
	cardQr.innerHTML = ''
	const api = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${input.value}`

	if (input.value.length > 0) {
		cardQr.classList.add('open')
		cardQr.innerHTML = `<img src="${api}" alt="Qr-code">`
		input.value = ''
	}
	else {
		input.classList.add('input-red')
		cardQr.classList.add('none')
	}

})