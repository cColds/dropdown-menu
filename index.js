function toggleDropdownMenu(dropdownMenu) {
  const dropdownMenuValue = dropdownMenu.dataset.dropdownMenuActive
  dropdownMenu.dataset.dropdownMenuActive = dropdownMenuValue === 'true' ? false : true
}

function hideDropdownMenu() {
    const dropdownMenus = document.querySelectorAll("[data-dropdown-menu-active]")
    dropdownMenus.forEach(dropdownMenu => {
      if (dropdownMenu.dataset.dropdownMenuActive === 'true') {
        dropdownMenu.dataset.dropdownMenuActive = 'false'
      }
  })
}

const navLinks = document.querySelector('.nav-links')

navLinks.addEventListener('click',(e) => {
  if (e.target.classList.value.includes('nav-links')) {
    return
  }

  const dropdownMenu = e.target.closest('li')
  if (dropdownMenu.dataset.dropdownMenuActive === 'false') {
    hideDropdownMenu()
  }

  toggleDropdownMenu(dropdownMenu)

})

document.body.addEventListener('click', (e) => {
if (!e.target.closest('.nav-item')) {
    hideDropdownMenu()
}})



