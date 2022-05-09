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
    currentLanguage = "en"
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
        <p>Клавиши для изменения регистра: Caps Lock(нажать), Shift(зажать)</p>
    </div>
`
createBoard(currentLanguage, toUpperCase, NUM)
const TEXTAREA = document.querySelector("textarea")
const BOARD__KEYS = document.querySelectorAll(".board__keys")
const BACK_QOUTE = document.querySelector("#backqoute")

const upperCaseKey = () => {
    BACK_QOUTE.innerHTML = addKeys(currentLanguage, toUpperCase, keysArray.slice(0, 1))
    BOARD__KEYS[1].innerHTML = addKeys(currentLanguage, toUpperCase, keysArray.slice(13, 25))
    BOARD__KEYS[2].innerHTML = addKeys(currentLanguage, toUpperCase, keysArray.slice(25, 36))
    BOARD__KEYS[3].innerHTML = addKeys(currentLanguage, toUpperCase, keysArray.slice(36))
}

const shiftClick = () => {
    upperCaseKey()
    BOARD__KEYS[0].innerHTML = addKeys(currentLanguage, toUpperCase, keysArray.slice(1, 13))
}

document.addEventListener("keydown", (event) => {
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
                shiftClick()
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
            currentLanguage === "en" ? currentLanguage = "ru" : currentLanguage = "en"
            localStorage.setItem("language", currentLanguage)
            upperCaseKey()
        }
        event.stopPropagation()
    }
})

document.addEventListener("keyup", (event) => {
    event.preventDefault()
    const currentKey = document.querySelector(".key[data-key='" + event.code + "'")
    if (currentKey !== null) {
        currentKey.classList.remove("key__active")
        if ((event.code === "ShiftLeft" || event.code === "ShiftRight") && isShift) {
            toUpperCase = !toUpperCase
            shiftClick()
            isShift = false
        }
        isAlt = false
        isCtrl = false
    }
})

function getCaretPos () {
    TEXTAREA.focus()
    if (TEXTAREA.selectionStart) return TEXTAREA.selectionStart
    else if (document.selection) {
        const sel = document.selection.createRange()
        const clone = sel.duplicate()
        sel.collapse(true)
        clone.moveToElementText(TEXTAREA)
        clone.setEndPoint("EndToEnd", sel)
        return clone.text.length
    }
    return 0
}

document.addEventListener("mousedown", (event) => {
    if (event.target.classList.contains("key")) {
        const f = keysArray.find(({ code }) => code === event.target.dataset.key)
        if (f || event.target.dataset.key.includes("Arrow")) { TEXTAREA.value += event.target.innerText }
    }
    switch (event.target.dataset.key) {
    case "Tab" :
        TEXTAREA.value += "    "
        break
    case "CapsLock":
        toUpperCase = !toUpperCase
        upperCaseKey()
        break
    case "Space":
        TEXTAREA.value += "  "
        break
    case "ShiftLeft":
    case "ShiftRight":
        if (!isShift) {
            event.preventDefault()
            toUpperCase = !toUpperCase
            shiftClick()
            isShift = true
        }
        break
    case "Backspace":
        if (TEXTAREA.value.length > 0) {
            TEXTAREA.setRangeText("", getCaretPos() - 1, getCaretPos(), "select")
        }
        break
    case "Delete":
        if (getCaretPos() !== TEXTAREA.value.length) {
            TEXTAREA.setRangeText("", getCaretPos(), getCaretPos() + 1, "select")
        }
        break
    default:
        break
    }
})

document.addEventListener("mouseup", (event) => {
    if ((event.target.dataset.key === "ShiftLeft" || event.target.dataset.key === "ShiftRight") && isShift) {
        toUpperCase = !toUpperCase
        shiftClick()
        isShift = false
    }
})
