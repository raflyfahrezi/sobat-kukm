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

const setFormUploadFileKTP = () => {
    const formUploadFileKTPInput = document.getElementById(
        'form-upload-file-ktp-input'
    )

    const formUploadFileKTPImage = document.getElementById(
        'form-upload-file-ktp-image'
    )

    formUploadFileKTPImage.addEventListener('click', () => {
        formUploadFileKTPInput.click()
    })
}

const setFormUploadFileKK = () => {
    const formUploadFileKKInput = document.getElementById(
        'form-upload-file-kk-input'
    )

    const formUploadFileKKImage = document.getElementById(
        'form-upload-file-kk-image'
    )

    formUploadFileKKImage.addEventListener('click', () => {
        formUploadFileKKInput.click()
    })
}

const setFormUploadFileNIBSKU = () => {
    const formUploadFileNIBSKUInput = document.getElementById(
        'form-upload-file-nibsku-input'
    )

    const formUploadFileNIBSKUImage = document.getElementById(
        'form-upload-file-nibsku-image'
    )

    formUploadFileNIBSKUImage.addEventListener('click', () => {
        formUploadFileNIBSKUInput.click()
    })
}

document.addEventListener('DOMContentLoaded', () => {
    setVillageListener()
    setFormUploadFileKK()
    setFormUploadFileKTP()
    setFormUploadFileNIBSKU()
})
