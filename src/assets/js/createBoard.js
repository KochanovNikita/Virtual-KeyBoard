import addKeys from './addKeys';
import '../css/font.css';
import keysArray from './keys';

const createBoard = (currentLanguage, toUpperCase) => {
  const board = document.querySelector('.board');
  board.innerHTML = `
    <div class="board__line">
        <div id="backqoute">
            ${addKeys(currentLanguage, toUpperCase, keysArray.slice(0, 1))} 
        </div>
        <div class="board__keys">
            ${addKeys(currentLanguage, toUpperCase, keysArray.slice(1, 13))} 
        </div>
        <button class="key" data-key="Backspace">Backspace</button>
    </div>
    <div class="board__letters">
        <div class="board__line">
            <button class="key" data-key="Tab">
                Tab
            </button>
            <div class="board__keys">
                ${addKeys(currentLanguage, toUpperCase, keysArray.slice(13, 25))}
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
                ${addKeys(currentLanguage, toUpperCase, keysArray.slice(25, 36))}
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
                ${addKeys(currentLanguage, toUpperCase, keysArray.slice(36))}
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
    `;
};
export default createBoard;
