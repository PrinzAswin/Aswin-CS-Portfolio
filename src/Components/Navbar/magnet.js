import { gsap } from "gsap/gsap-core"
const magneto = document.querySelector('.magneto')
const magnetoText = document.querySelector('.magneto .text')

const magnet = () => {
    const activeMagneto = (event) => {
        let boundBox = magneto.getBoundingClientRect()
        const magnetoStrength = 40
        const magnetoTextStrength = 80
        const newX = ((event.clientX - boundBox.left) / magneto.offsetWidth) - 0.5
        const newY = ((event.clientX - boundBox.top) / magneto.offsetHeight) - 0.5

        // dbgr.innerHTML = 'cursorX: ' + event.clientX + '<br>boxLeft: ' + Math.ceil(boundBox.left) + '<br>cursorInsideBtn: ' + Math.ceil(event.clientX - boundBox.left) + '<br>relativetotalwidth: ' + ((event.clientX - boundBox.left) / magneto.offsetWidth).toFixed(2) + '<br>shifted: ' + ((event.clientX - boundBox.left) / magneto.offsetWidth - 0.5).toFixed(2)


        gsap.to(magneto, {
            duration: 1,
            x: newX * magnetoStrength,
            y: newY * magnetoStrength,

        })
        gsap.to(magnetoText, {
            duration: 1,
            x: newX * magnetoTextStrength,
            y: newY * magnetoTextStrength,

        })
    }


    const resetMagneto = (event) => {

    }

    magneto.addEventListener('mousemove', activeMagneto)
    magneto.addEventListener('mousemove', resetMagneto)
}

export default magnet