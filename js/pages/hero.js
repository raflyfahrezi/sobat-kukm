let countDownInterval

const getTime = (day, hour, minute) => {
    let newDay = day
    let newMinute = minute
    let newHour = hour

    if (minute > 0) {
        newMinute = minute - 1
    } else {
        newMinute = 59

        if (hour > 0) {
            newHour = hour - 1
        } else {
            newHour = 59
            newDay = day - 1
        }
    }

    return {
        day: newDay,
        hour: newHour,
        minute: newMinute,
    }
}

const startCountDown = (dayElement, hourElement, minuteElement) => {
    let tim = getTime(Number(dayElement.innerText), Number(hourElement.innerText), Number(minuteElement.innerText));
    dayElement.innerText = tim.day
    hourElement.innerText = tim.hour
    minuteElement.innerText = tim.minute
    countDownInterval = setInterval(() => {
        const day = Number(dayElement.innerText)
        const hour = Number(hourElement.innerText)
        const minute = Number(minuteElement.innerText)

        const time = getTime(day, hour, minute)

        dayElement.innerText = time.day
        hourElement.innerText = time.hour
        minuteElement.innerText = time.minute

        if (time.day === 0 && time.hour === 0 && time.minute === 0) {
            stopCountDown()
        }
    }, 1000 * 60)
}

const stopCountDown = () => {
    clearInterval(countDownInterval)
}

const setCountDown = () => {
    const dayElement = document.getElementById('countdown--timeNumberDay')
    const hourElement = document.getElementById('countdown--timeNumberHours')
    const minuteElement = document.getElementById(
        'countdown--timeNumberMinutes'
    )

    if (!dayElement) {
        return
    }
    if (minuteElement.innerText == '') return;

    setTimeout(() => {
        startCountDown(dayElement, hourElement, minuteElement)
    }, 1000 * (60 - new Date().getSeconds()))
}

document.addEventListener('DOMContentLoaded', () => {
    setCountDown()
})
