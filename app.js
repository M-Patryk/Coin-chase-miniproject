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

const character = document.querySelector('#player');
const coin = document.querySelector('#coin');

window.addEventListener('keyup', function(e) {
	if (e.key === 'ArrowDown') {
		moveVertical(character, 50);
	} else if (e.key === 'ArrowUp') {
		moveVertical(character, -50);
	} else if (e.key === 'ArrowLeft') {
		character.style.transform = 'scale(-1,1)';
		moveHorizontal(character, -50);
	} else if (e.key === 'ArrowRight') {
		character.style.transform = 'scale(1,1)';
		moveHorizontal(character, 50);
	}
	if (isTouching(character, coin)) moveCoin();
});

const moveVertical = (element, amount) => {
	const currentTop = extractPosition(element.style.top);
	element.style.top = `${currentTop + amount}px`;
};

const moveHorizontal = (element, amount) => {
	const currentLeft = extractPosition(element.style.left);
	element.style.left = `${currentLeft + amount}px `;
};

const extractPosition = (pos) => {
	if (!pos) return 100;
	return parseInt(pos.slice(0, -2));
};

const moveCoin = () => {
	const coinLeftPos = Math.floor(Math.random() * window.innerWidth);
	const coinTopPos = Math.floor(Math.random() * window.innerHeight);
	return (coin.style.top = `${coinTopPos}px`), (coin.style.left = `${coinLeftPos}px`);
};
moveCoin();
