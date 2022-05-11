window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 540) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2 //linha alvo

  const sectionTop = section.offsetTop //topo da seção

  const sectionHeight = section.offsetHeight //altura da seção

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop //o topo da seção chegou ou ultrapassou o topo

  const sectionEndsAt = sectionTop + sectionHeight //onde termina a seção

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine //final da seção passou a linha alvo

  //limites da seção, ! significa não
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')

  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')

  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 800
}).reveal(`
  #home,
  #home img,
  #home .stats,
  #services,
  #services header,
  #services .cards,
  #about,
  #about header,
  #about .content`)
