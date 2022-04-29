document.addEventListener('DOMContentLoaded', () => {
    const navigationClass = document.getElementById('navigation').classList

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 10) {
            navigationClass.add('nav_scrolled')

            return
        }

        navigationClass.remove('nav_scrolled')
    })
})
