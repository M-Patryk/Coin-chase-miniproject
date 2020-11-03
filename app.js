function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const character = document.querySelector('#player')
const coin = document.querySelector('#coin')

window.addEventListener('keyup', function(e){
	if(e.key === 'ArrowDown'){
		const currentTop = extractPosition(character.style.top)
		character.style.top = `${currentTop + 50}px`
	} else if (e.key === 'ArrowUp'){
		const currentTop = extractPosition(character.style.top)
		character.style.top = `${currentTop - 50}px`
	} else if (e.key === 'ArrowLeft'){
		const currentLeft = extractPosition(character.style.left)
		character.style.transform = 'scale(-1,1)'
		character.style.left = `${currentLeft - 50}px`
	} else if (e.key === 'ArrowRight'){
		const currentLeft = extractPosition(character.style.left)
		character.style.transform = 'scale(1,1)'
		character.style.left = `${currentLeft + 50}px`
	}
	if(isTouching(character, coin)) moveCoin()
})

const extractPosition = (pos) => {
	if(!pos) return 100
	return parseInt(pos.slice(0,-2))
}

const moveCoin = () => {
	const coinLeftPos = Math.floor(Math.random() * window.innerWidth)
	const coinTopPos = Math.floor(Math.random() * window.innerHeight)
	return coin.style.top = `${coinTopPos}px`,
	coin.style.left = `${coinLeftPos}px`
	
}
moveCoin()