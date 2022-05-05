const setPasswordListener = () => {
    const passwordToggle = document.getElementById('passwordToggle')
    const passwordElement = document.getElementsByName('password')[0]

    if (!passwordToggle) {
        return
    }

    passwordToggle.addEventListener('click', () => {
        const type = passwordElement.getAttribute('type')

        console.log(type)

        if (type === 'password') {
            passwordElement.setAttribute('type', 'text')
        } else {
            passwordElement.setAttribute('type', 'password')
        }
    })
}

const setConfirmPasswordListener = () => {
    const passwordToggle = document.getElementById('confirmPasswordToggle')
    const passwordElement = document.getElementsByName('confirmPassword')[0]

    if (!passwordToggle) {
        return
    }

    passwordToggle.addEventListener('click', () => {
        const type = passwordElement.getAttribute('type')

        console.log(type)

        if (type === 'password') {
            passwordElement.setAttribute('type', 'text')
        } else {
            passwordElement.setAttribute('type', 'password')
        }
    })
}

document.addEventListener('DOMContentLoaded', () => {
    setPasswordListener()
    setConfirmPasswordListener()
})
