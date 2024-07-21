const maxWidth = matchMedia("(max-width: 768px)");
const bodyCareer = document.querySelector('.career__content');

function moveBlocksToButtons(){
	tabsBtns.forEach(button => {
		tabId = button.getAttribute('data-tab');
		tab = document.querySelector(tabId);

		button.insertAdjacentElement('afterend', tab)
	})
}
function moveBlocksToBody() {
	tabsBtns.forEach(button => {
		tabId = button.getAttribute('data-tab');
		tab = document.querySelector(tabId);
		bodyCareer.append(tab);
		console.log(bodyCareer);
	})
}
function hasActiveClass(items){
	return Array.from(items).some(button => button.classList.contains('_tab-active'));
}
function addClassActive(){
	if(!hasActiveClass(tabsBtns)) {
		tabsBtns[0].classList.add('_tab-active');
		tabsItems[0].classList.add('_tab-active');
	}
}
function checkHeight(){
	for(item of tabsItems) {
		if(item.classList.contains('_tab-active')) {
			item.style.maxHeight = item.scrollHeight + 'px';
		}
	}
}
const handleBlocks = () => {
	if (window.innerWidth <= 768) {
		moveBlocksToButtons()
		checkHeight()
	} else {
		moveBlocksToBody()
		addClassActive()
	}
}
maxWidth.addEventListener('change', handleBlocks)
handleBlocks();