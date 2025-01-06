// submenu in mobile 
const showSubmenu = document.querySelector('#show-submenu')
const hideSubmenu = document.querySelector('#hide-submenu')
const ulSubmenu = document.querySelector('#submenu')

showSubmenu.addEventListener('click', () => {
    ulSubmenu.classList.remove('hidden')
    showSubmenu.classList.add('hidden')
    hideSubmenu.classList.remove('hidden')
})

hideSubmenu.addEventListener('click', () => {
    ulSubmenu.classList.add('hidden')
    showSubmenu.classList.remove('hidden')
    hideSubmenu.classList.add('hidden')
})


// search box in mobile 
const contentHeader = document.querySelector('#content-header')
const showSearchBox = document.querySelector('#show-search-box')
const hideSearchBox = document.querySelector('#hide-search-box')
const inputSearchBox = document.querySelector('#inp-search-box')
const showSearchBox2 = document.querySelector('#show-search-box2')

showSearchBox.addEventListener('click', showSearch)
showSearchBox2.addEventListener('click', showSearch)

function showSearch() {
    contentHeader.children[0].classList.add('hidden')
    contentHeader.children[1].classList.add('hidden')
    contentHeader.children[2].classList.add('hidden')
    contentHeader.children[3].classList.remove('hidden')
    inputSearchBox.focus()
}

hideSearchBox.addEventListener('click', () => {
    contentHeader.children[0].classList.remove('hidden')
    contentHeader.children[1].classList.remove('hidden')
    contentHeader.children[2].classList.remove('hidden')
    contentHeader.children[3].classList.add('hidden')
})


// submenu in desktop
const submenuDesktopLi = document.querySelectorAll('.submenu-desktop')

submenuDesktopLi.forEach(li => li.dataset.status = 'off')

submenuDesktopLi.forEach(li => {
    const children = li.querySelectorAll('ul, li, a')
    li.addEventListener('click', e => {
        e.stopImmediatePropagation()

        submenuDesktopLi.forEach(otherLi => {
            if (otherLi != li) {
                otherLi.children[2].classList.add('hidden')
                otherLi.dataset.status = 'off'
            }
        })

        if (li.dataset.status === 'off') {
            li.children[2].classList.remove('hidden')
            li.dataset.status = 'on'
        } else {
            li.children[2].classList.add('hidden')
            li.dataset.status = 'off'
        }
    })

    children.forEach(child => child.addEventListener('click', e => e.stopPropagation()))
})

document.addEventListener('click', e => {
    if (!e.target.classList.contains('.submenu-desktop')) {
        submenuDesktopLi.forEach(li => {
            li.children[2].classList.add('hidden')
            li.dataset.status = 'off'
        })
    }
})


// submenu work in mobile
const submenuWork = document.querySelector('#submenu-work')
const submenuWorkMenu = document.querySelector('#submenu-work-menu')

submenuWorkMenu.dataset.status = 'off'

submenuWork.addEventListener('click', () => {
    if (submenuWorkMenu.dataset.status === 'off') {
        submenuWorkMenu.classList.remove('hidden')
        submenuWorkMenu.dataset.status = 'on'
        submenuWork.children[1].classList.add('rotate-180')
    } else {
        submenuWorkMenu.classList.add('hidden')
        submenuWorkMenu.dataset.status = 'off'
        submenuWork.children[1].classList.remove('rotate-180')
    }
})


// accordion menu in work section
const h3Accordion = document.querySelectorAll('.h3Accordion')
const contentH3Accordion = document.querySelectorAll('.contentH3Accordion')
const imgH3Accordion = document.querySelector('.imgH3Accordion')

h3Accordion.forEach((h3, h3Index) => {
    h3.addEventListener('click', () => {

        contentH3Accordion.forEach((div, divIndex) => {
            if (h3Index != divIndex) {
                div.style.height = '0'
                div.style.overflow = 'hidden'
                div.dataset.status = 'off'
            }
        })

        h3Accordion.forEach((h3, h3I) => {
            if (h3Index != h3I) {
                h3.children[1].classList.remove('rotate-180')
            }
        })

        if (h3.nextElementSibling.dataset.status === 'off') {
            h3.nextElementSibling.style.height = 'auto'
            h3.nextElementSibling.style.overflow = 'visible'
            h3.nextElementSibling.dataset.status = 'on'
            h3.children[1].classList.add('rotate-180')
            const imgSrc = h3.nextElementSibling.children[1].getAttribute('src')
            imgH3Accordion.setAttribute('src', imgSrc)
            imgH3Accordion.classList.remove('animate-anime')
            setTimeout(() => {
                imgH3Accordion.classList.add('animate-anime')
            }, 10)

        } else {
            h3.nextElementSibling.style.height = '0'
            h3.nextElementSibling.style.overflow = 'hidden'
            h3.nextElementSibling.dataset.status = 'off'
            h3.children[1].classList.remove('rotate-180')
            imgH3Accordion.classList.add('animate-anime')
        }
    })
})