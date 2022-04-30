const setNavigationToScrolled = () => {
    const navigationClass = document.getElementById('navigation').classList

    if (window.scrollY >= 10) {
        navigationClass.add('nav_scrolled')

        return
    }

    navigationClass.remove('nav_scrolled')
}

document.addEventListener('DOMContentLoaded', () => {
    setNavigationToScrolled()

    window.addEventListener('scroll', setNavigationToScrolled)
})
