const menuBtn = document.querySelector('.menu')
const navigation = document.querySelector('.nav')
const navigationLink = document.querySelector('.nav .link')

menuBtn.addEventListener('click', () => {
	menuBtn.classList.toggle('active')
	navigation.classList.toggle('active')
})

navigationLink.forEach(link => {
	link.addEventListener('click', () => {
		menuBtn.classList.remove('active')
	  navigation.classList.remove('active')
	})
})