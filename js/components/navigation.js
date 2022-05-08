const setNavigationToScrolled = () => {
    const navigationClass = document.getElementById('navigation').classList

    if (window.scrollY >= 10) {
        navigationClass.add('nav_scrolled')

        return
    }

    navigationClass.remove('nav_scrolled')
}

const NavMenuButtonExitListener = () => {
    const navMenuExitButton = document.getElementById('nav_menu_button_exit')

    if (!navMenuExitButton) {
        return
    }

    navMenuExitButton.addEventListener('click', () => {
        closeNavigation()
    })
}

const NavLinkItemListener = () => {
    const navLinkItem = document.getElementsByClassName(
        'nav_link_item_resposive'
    )

    for (let index = 0; index < navLinkItem.length; index++) {
        navLinkItem[index].addEventListener('click', () => {
            closeNavigation()
        })
    }
}

const NavMenuButtonListener = () => {
    const navMenuButton = document.getElementById('nav_menu_button')

    if (!navMenuButton) {
        return
    }

    navMenuButton.addEventListener('click', () => {
        openNavigation()
    })
}

const openNavigation = () => {
    const responsiveNavigation = document.getElementById('navigationResponsive')

    responsiveNavigation.style.display = 'block'

    setTimeout(() => {
        responsiveNavigation.style.opacity = 1
        NavMenuButtonExitListener()
        NavLinkItemListener()
    }, 100)
}

const closeNavigation = () => {
    const responsiveNavigation = document.getElementById('navigationResponsive')

    responsiveNavigation.style.opacity = 0

    setTimeout(() => {
        responsiveNavigation.style.display = 'none'
    }, 100)
}

document.addEventListener('DOMContentLoaded', () => {
    NavMenuButtonListener()
    setNavigationToScrolled()

    window.addEventListener('scroll', setNavigationToScrolled)
})
