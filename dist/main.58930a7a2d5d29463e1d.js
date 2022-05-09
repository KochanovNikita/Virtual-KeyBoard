/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/sass/key.scss":
/*!**********************************!*\
  !*** ./src/assets/sass/key.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/sass/root.scss":
/*!***********************************!*\
  !*** ./src/assets/sass/root.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/css/font.css":
/*!*********************************!*\
  !*** ./src/assets/css/font.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/js/CreateKey.js":
/*!************************************!*\
  !*** ./src/assets/js/CreateKey.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateKey": () => (/* binding */ CreateKey)
/* harmony export */ });
class CreateKey {
    constructor (code, ru, en, ruUpper, enUpper) {
        this.code = code
        this.ru = ru
        this.en = en
        this.ruUpper = ruUpper
        this.enUpper = enUpper
    }
}


/***/ }),

/***/ "./src/assets/js/addKeys.js":
/*!**********************************!*\
  !*** ./src/assets/js/addKeys.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addKeys": () => (/* binding */ addKeys)
/* harmony export */ });
/* harmony import */ var _sass_key_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/key.scss */ "./src/assets/sass/key.scss");


const addKeys = (language, caseStyle, currentKeyLine) => {
    const array = []
    currentKeyLine.forEach(({ code, ruUpper, enUpper, ru, en }) => {
        let value
        if (caseStyle) {
            if (language === "ru") {
                value = ruUpper
            } else {
                value = enUpper
            }
        } else {
            if (language === "ru") {
                value = ru
            } else {
                value = en
            }
        }
        const KEY = `
        <button class="key" data-key="${code}">
            ${value}
        </button>
       `
        array.push(KEY)
    })
    return array.map(x => x).join("")
}


/***/ }),

/***/ "./src/assets/js/createBoard.js":
/*!**************************************!*\
  !*** ./src/assets/js/createBoard.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBoard": () => (/* binding */ createBoard)
/* harmony export */ });
/* harmony import */ var _addKeys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addKeys */ "./src/assets/js/addKeys.js");
/* harmony import */ var _css_font_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/font.css */ "./src/assets/css/font.css");
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keys */ "./src/assets/js/keys.js");




const createBoard = (currentLanguage, toUpperCase) => {
    const board = document.querySelector(".board")
    board.innerHTML = `
    <div class="board__line">
        <div id="backqoute">
            ${(0,_addKeys__WEBPACK_IMPORTED_MODULE_0__.addKeys)(currentLanguage, toUpperCase, _keys__WEBPACK_IMPORTED_MODULE_2__.keysArray.slice(0, 1))} 
        </div>
        <div class="board__keys">
            ${(0,_addKeys__WEBPACK_IMPORTED_MODULE_0__.addKeys)(currentLanguage, toUpperCase, _keys__WEBPACK_IMPORTED_MODULE_2__.keysArray.slice(1, 13))} 
        </div>
        <button class="key" data-key="Backspace">Backspace</button>
    </div>
    <div class="board__letters">
        <div class="board__line">
            <button class="key" data-key="Tab">
                Tab
            </button>
            <div class="board__keys">
                ${(0,_addKeys__WEBPACK_IMPORTED_MODULE_0__.addKeys)(currentLanguage, toUpperCase, _keys__WEBPACK_IMPORTED_MODULE_2__.keysArray.slice(13, 25))}
            </div>
            <button class="key" data-key="Delete">
                Delete
            </button>
        </div>

        <div class="board__line">
            <button class="key key__control" data-key="CapsLock">
                Caps Lock
            </button>
            <div class="board__keys">
                ${(0,_addKeys__WEBPACK_IMPORTED_MODULE_0__.addKeys)(currentLanguage, toUpperCase, _keys__WEBPACK_IMPORTED_MODULE_2__.keysArray.slice(25, 36))}
            </div>
            <button class="key" data-key="Enter">
                Enter
            </button>
        </div>

        <div class="board__line">
            <button class="key key__control" data-key="ShiftLeft">
                Shift
            </button>
            <div class="board__keys">
                ${(0,_addKeys__WEBPACK_IMPORTED_MODULE_0__.addKeys)(currentLanguage, toUpperCase, _keys__WEBPACK_IMPORTED_MODULE_2__.keysArray.slice(36))}
            </div>
            <button class="key" data-key="ArrowUp">
            &#8657;
            </button>
            <button class="key key__control" data-key="ShiftRight">
                Shift
            </button>
        </div>

        <div class="board__line">
            <button class="key" data-key="ControlLeft">
                Ctrl
            </button>
            <button class="key" data-key="MetaLeft">
                Win
            </button>
            <button class="key" data-key="AltLeft">
                Alt
            </button>
            <button class="key key__space" data-key="Space">
                
            </button>
            <button class="key" data-key="AltRight">
                Alt
            </button>
            <button class="key" data-key="ArrowLeft">
            &#8656;
            </button>
            <button class="key" data-key="ArrowDown">
            &#8659;
            </button>
            <button class="key" data-key="ArrowRight">
            &#8658;
            </button>
            <button class="key" data-key="ControlRight">
                Ctrl
            </button>
        </div>
    </div>
    `
}


/***/ }),

/***/ "./src/assets/js/keys.js":
/*!*******************************!*\
  !*** ./src/assets/js/keys.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keysArray": () => (/* binding */ keysArray)
/* harmony export */ });
/* harmony import */ var _CreateKey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateKey */ "./src/assets/js/CreateKey.js");


const keysArray = [
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("Backquote", "ё", "`", "Ё", "~"),
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("Digit1", "1", "1", "!", "!"),
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("Digit2", "2", "2", "@", "@"),
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("Digit3", "3", "3", "#", "#"),
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("Digit4", "4", "4", "$", "$"),
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("Digit5", "5", "5", "%", "%"),
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("Digit6", "6", "6", "^", "^"),
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("Digit7", "7", "7", "&", "&"),
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("Digit8", "8", "8", "*", "*"),
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("Digit9", "9", "9", "(", "("),
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("Digit0", "0", "0", ")", ")"),
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("Minus", "-", "-", "_", "_"),
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("Equa", "=", "=", "+", "+"),
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("KeyQ", "й", "q", "Й", "Q"),
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("KeyW", "ц", "w", "Ц", "W"),
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("KeyE", "у", "e", "У", "E"),
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("KeyR", "к", "r", "К", "R"),
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("KeyT", "е", "t", "Е", "T"),
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("KeyY", "н", "y", "Н", "Y"),
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("KeyU", "г", "u", "Г", "U"),
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("KeyI", "ш", "i", "Ш", "I"),
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("KeyO", "щ", "o", "Щ", "O"),
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("KeyP", "з", "p", "З", "P"),
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("BracketLeft", "х", "[", "Х", "{"),
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("BracketRight", "ъ", "]", "Ъ", "}"),
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("KeyA", "ф", "a", "Ф", "A"),
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("KeyS", "ы", "s", "Ы", "S"),
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("KeyD", "в", "d", "В", "D"),
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("KeyF", "а", "f", "А", "F"),
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("KeyG", "п", "g", "П", "G"),
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("KeyH", "р", "h", "Р", "H"),
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("KeyJ", "о", "j", "О", "J"),
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("KeyK", "л", "k", "Л", "K"),
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("KeyL", "д", "l", "Д", "L"),
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("Semicolon", "ж", ";", "Ж", ":"),
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("Quote", "э", "'", "Э", "\""),
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("KeyZ", "я", "z", "Я", "Z"),
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("KeyX", "ч", "x", "Ч", "X"),
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("KeyC", "с", "c", "С", "C"),
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("KeyV", "м", "v", "М", "V"),
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("KeyB", "и", "b", "И", "B"),
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("KeyN", "т", "n", "Т", "N"),
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("KeyM", "ь", "m", "Ь", "M"),
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("Comma", "б", ",", "Б", "<"),
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("Period", "ю", ".", "Ю", ">"),
    new _CreateKey__WEBPACK_IMPORTED_MODULE_0__.CreateKey("Slash", ".", "/", ",", "?")
]


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_root_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/root.scss */ "./src/assets/sass/root.scss");
/* harmony import */ var _addKeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addKeys */ "./src/assets/js/addKeys.js");
/* harmony import */ var _createBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createBoard */ "./src/assets/js/createBoard.js");
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keys */ "./src/assets/js/keys.js");





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
;(0,_createBoard__WEBPACK_IMPORTED_MODULE_2__.createBoard)(currentLanguage, toUpperCase, NUM)
const TEXTAREA = document.querySelector("textarea")
const BOARD__KEYS = document.querySelectorAll(".board__keys")
const BACK_QOUTE = document.querySelector("#backqoute")

const upperCaseKey = () => {
    BACK_QOUTE.innerHTML = (0,_addKeys__WEBPACK_IMPORTED_MODULE_1__.addKeys)(currentLanguage, toUpperCase, _keys__WEBPACK_IMPORTED_MODULE_3__.keysArray.slice(0, 1))
    BOARD__KEYS[1].innerHTML = (0,_addKeys__WEBPACK_IMPORTED_MODULE_1__.addKeys)(currentLanguage, toUpperCase, _keys__WEBPACK_IMPORTED_MODULE_3__.keysArray.slice(13, 25))
    BOARD__KEYS[2].innerHTML = (0,_addKeys__WEBPACK_IMPORTED_MODULE_1__.addKeys)(currentLanguage, toUpperCase, _keys__WEBPACK_IMPORTED_MODULE_3__.keysArray.slice(25, 36))
    BOARD__KEYS[3].innerHTML = (0,_addKeys__WEBPACK_IMPORTED_MODULE_1__.addKeys)(currentLanguage, toUpperCase, _keys__WEBPACK_IMPORTED_MODULE_3__.keysArray.slice(36))
}

const shiftClick = () => {
    upperCaseKey()
    BOARD__KEYS[0].innerHTML = (0,_addKeys__WEBPACK_IMPORTED_MODULE_1__.addKeys)(currentLanguage, toUpperCase, _keys__WEBPACK_IMPORTED_MODULE_3__.keysArray.slice(1, 13))
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
            _keys__WEBPACK_IMPORTED_MODULE_3__.keysArray.forEach(({ code }) => {
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
        const f = _keys__WEBPACK_IMPORTED_MODULE_3__.keysArray.find(({ code }) => code === event.target.dataset.key)
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
    case "Enter":
        TEXTAREA.setRangeText("\n", getCaretPos(), getCaretPos(), "select")
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

})();

/******/ })()
;
//# sourceMappingURL=main.58930a7a2d5d29463e1d.js.map