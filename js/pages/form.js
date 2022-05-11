const setVillageListener = () => {
    const desaContainerElement = document.getElementById('form-desa-container')
    const kelurahanElement = document.getElementById('form-kelurahan')
    const fromVillageElement = document.getElementById('form-from-village')

    if (!fromVillageElement) {
        return
    }

    fromVillageElement.addEventListener('click', (e) => {
        if (fromVillageElement.checked) {
            kelurahanElement.disabled = true
            desaContainerElement.style.display = 'block'
        } else {
            kelurahanElement.disabled = false
            desaContainerElement.style.display = 'none'
        }
    })
}

document.addEventListener('DOMContentLoaded', () => {
    setVillageListener()
})
