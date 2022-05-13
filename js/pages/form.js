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

    if (!formUploadFileKTPImage) {
        return
    }

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

    if (!formUploadFileKKImage) {
        return
    }

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

    if (!formUploadFileNIBSKUImage) {
        return
    }

    formUploadFileNIBSKUImage.addEventListener('click', () => {
        formUploadFileNIBSKUInput.click()
    })
}

const setFormNextStep4 = () => {
    const formNextStep4Element = document.getElementById(
        'form-button-next-step-4'
    )

    const modalConfirmationElement = document.getElementById(
        'form-modal-confirmation'
    )

    if (!formNextStep4Element) {
        return
    }

    formNextStep4Element.addEventListener('click', () => {
        modalConfirmationElement.style.display = 'grid'
    })
}

const setFormNextStep4Batal = () => {
    const formNextStep4BatalElement = document.getElementById(
        'form-modal-confirmation-batal'
    )

    const modalConfirmationElement = document.getElementById(
        'form-modal-confirmation'
    )

    if (!formNextStep4BatalElement) {
        return
    }

    formNextStep4BatalElement.addEventListener('click', () => {
        modalConfirmationElement.style.display = 'none'
    })
}

document.addEventListener('DOMContentLoaded', () => {
    setFormNextStep4()
    setVillageListener()
    setFormUploadFileKK()
    setFormUploadFileKTP()
    setFormNextStep4Batal()
    setFormUploadFileNIBSKU()
})
