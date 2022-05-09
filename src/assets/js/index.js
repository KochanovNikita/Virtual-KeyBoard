import "../sass/root.scss"
import { addKeys } from "./addKeys"
import { createBoard } from "./createBoard"
import { keysArray } from "./keys"

const BODY = document.querySelector("body")
const NUM = "1234567890-="

let isAlt = false
let isCtrl = false
let isShift = false
let toUpperCase = false
let currentLanguage

if (!localStorage.getItem("language")) {
    currentLanguage = true
} else {
    currentLanguage = localStorage.getItem("language")
}

BODY.innerHTML = `
    <div class="root">
        <h1>Virtual Key-Board</h1>
        <textarea></textarea>
        <div class="board">
            
        </div>
        <p>Клавиатура создана в операционной системе Windows</p>
        <p>Комбинация для переключения языка: левыe ctrl + alt</p>
        <p>Клавиши для изменения регистра: Caps Lock(нажать), левый Shift(зажать)</p>
    </div>
`
createBoard(currentLanguage, toUpperCase, NUM)
const TEXTAREA = document.querySelector("textarea")
const KEYS = document.querySelectorAll(".key")
const BOARD__KEYS = document.querySelectorAll(".board__keys")
const BACK_QOUTE = document.querySelector("#backqoute")

const upperCaseKey = () => {
    BACK_QOUTE.innerHTML = addKeys(currentLanguage, toUpperCase, keysArray.slice(0, 1))
    BOARD__KEYS[1].innerHTML = addKeys(currentLanguage, toUpperCase, keysArray.slice(13, 25))
    BOARD__KEYS[2].innerHTML = addKeys(currentLanguage, toUpperCase, keysArray.slice(25, 36))
    BOARD__KEYS[3].innerHTML = addKeys(currentLanguage, toUpperCase, keysArray.slice(36))
}

function KeyDown (event) {
    const currentKey = document.querySelector(".key[data-key='" + event.code + "'")
    if (currentKey !== null) {
        currentKey.classList.add("key__active")
        switch (event.code) {
        case "Backspace":
        case "Enter":
        case "Delete":
            TEXTAREA.focus()
            break
        case "Tab":
            event.preventDefault()
            TEXTAREA.value += "    "
            break
        case "CapsLock":
            event.preventDefault()
            toUpperCase = !toUpperCase
            upperCaseKey()
            break
        case "Space":
            event.preventDefault()
            TEXTAREA.value += "  "
            break
        case "ControlLeft":
            event.preventDefault()
            isCtrl = true
            break
        case "AltLeft":
            event.preventDefault()
            isAlt = true
            break
        case "ShiftLeft":
        case "ShiftRight":
            if (!isShift) {
                event.preventDefault()
                toUpperCase = !toUpperCase
                upperCaseKey()
                BOARD__KEYS[0].innerHTML = addKeys(currentLanguage, toUpperCase, keysArray.slice(1, 13))
                isShift = true
            }
            break
        default:
            event.preventDefault()
            if (event.code.includes("Arrow")) {
                TEXTAREA.value += currentKey.innerText
            }
            keysArray.forEach(({ code }) => {
                if (event.code === code) {
                    TEXTAREA.value += currentKey.innerText
                }
            })
            break
        }

        if (isAlt && isCtrl) {
            currentLanguage = !currentLanguage
            localStorage.setItem("language", currentLanguage)
            upperCaseKey()
        }
        event.stopPropagation()
    }
}

document.addEventListener("keydown", (event) => {
    KeyDown(event)
})

document.addEventListener("keyup", (event) => {
    event.preventDefault()
    const currentKey = document.querySelector(".key[data-key='" + event.code + "'")
    if (currentKey !== null) {
        currentKey.classList.remove("key__active")
        if ((event.code === "ShiftLeft" || event.code === "ShiftRight") && isShift) {
            toUpperCase = !toUpperCase
            upperCaseKey()
            BOARD__KEYS[0].innerHTML = addKeys(currentLanguage, toUpperCase, keysArray.slice(1, 13))
            isShift = false
        }
        isAlt = false
        isCtrl = false
    }
})

KEYS.forEach(key => {
    key.addEventListener("mousedown", () => {
        key.classList.add("key__active")
        TEXTAREA.value += key.innerText
    })
})

KEYS.forEach(key => {
    key.addEventListener("mouseup", () => {
        key.classList.remove("key__active")
    })
})
