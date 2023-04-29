const keyEng = {
    Backquote: { value: "`", valueShift: "~" },
    Digit1: { value: "1", valueShift: "!" },
    Digit2: { value: "2", valueShift: "@" },
    Digit3: { value: "3", valueShift: "#" },
    Digit4: { value: "4", valueShift: "$" },
    Digit5: { value: "5", valueShift: "%" },
    Digit6: { value: "6", valueShift: "^" },
    Digit7: { value: "7", valueShift: "&" },
    Digit8: { value: "8", valueShift: "*" },
    Digit9: { value: "9", valueShift: "(" },
    Digit0: { value: "0", valueShift: ")" },
    Minus: { value: "-", valueShift: "_" },
    Equal: { value: "=", valueShift: "+" },
    Backspace: { value: "Backspace", valueShift: "Backspace" },
    Tab: { value: "Tab", valueShift: "Tab" },
    KeyQ: { value: "q", valueShift: "Q" },
    KeyW: { value: "w", valueShift: "W" },
    KeyE: { value: "e", valueShift: "E" },
    KeyR: { value: "r", valueShift: "R" },
    KeyT: { value: "t", valueShift: "T" },
    KeyY: { value: "y", valueShift: "Y" },
    KeyU: { value: "u", valueShift: "U" },
    KeyI: { value: "i", valueShift: "I" },
    KeyO: { value: "o", valueShift: "O" },
    KeyP: { value: "p", valueShift: "P" },
    BracketLeft: { value: "[", valueShift: "{" },
    BracketRight: { value: "]", valueShift: "}" },
    Backslash: { value: "\\", valueShift: "|" },
    Delete: { value: "Delete", valueShift: "Delete" },
    CapsLock: { value: "CapsLock", valueShift: "CapsLock" },
    KeyA: { value: "a", valueShift: "A" },
    KeyS: { value: "s", valueShift: "S" },
    KeyD: { value: "d", valueShift: "D" },
    KeyF: { value: "f", valueShift: "F" },
    KeyG: { value: "g", valueShift: "G" },
    KeyH: { value: "h", valueShift: "H" },
    KeyJ: { value: "j", valueShift: "J" },
    KeyK: { value: "k", valueShift: "K" },
    KeyL: { value: "l", valueShift: "L" },
    Semicolon: { value: ";", valueShift: ":" },
    Quote: { value: `'`, valueShift: '"' },
    Enter: { value: "Enter", valueShift: "Enter" },
    ShiftLeft: { value: "Shift", valueShift: "Shift" },
    KeyZ: { value: "z", valueShift: "Z" },
    KeyX: { value: "x", valueShift: "X" },
    KeyC: { value: "c", valueShift: "C" },
    KeyV: { value: "v", valueShift: "V" },
    KeyB: { value: "b", valueShift: "B" },
    KeyN: { value: "n", valueShift: "N" },
    KeyM: { value: "m", valueShift: "M" },
    Comma: { value: ",", valueShift: "<" },
    Period: { value: ".", valueShift: ">" },
    Slash: { value: "/", valueShift: "?" },
    ArrowUp: { value: "ArrowUp", valueShift: "ArrowUp" },
    ShiftRight: { value: "Shift", valueShift: "Shift" },
    ControlLeft: { value: "Control", valueShift: "Control" },
    MetaLeft: { value: "Meta", valueShift: "Meta" },
    AltLeft: { value: "Alt", valueShift: "Alt" },
    Space: { value: " ", valueShift: " " },
    AltRight: { value: "Alt", valueShift: "Alt" },
    ArrowLeft: { value: "ArrowLeft", valueShift: "ArrowLeft" },
    ArrowDown: { value: "ArrowDown", valueShift: "ArrowDown" },
    ArrowRight: { value: "ArrowRight", valueShift: "ArrowRight" },
    ControlRight: { value: "Control", valueShift: "Control" },
};

const keyRu = {
    Backquote: { value: "ё", valueShift: "Ё" },
    Digit1: { value: "1", valueShift: "!" },
    Digit2: { value: "2", valueShift: '"' },
    Digit3: { value: "3", valueShift: "№" },
    Digit4: { value: "4", valueShift: ";" },
    Digit5: { value: "5", valueShift: "%" },
    Digit6: { value: "6", valueShift: ":" },
    Digit7: { value: "7", valueShift: "?" },
    Digit8: { value: "8", valueShift: "*" },
    Digit9: { value: "9", valueShift: "(" },
    Digit0: { value: "0", valueShift: ")" },
    Minus: { value: "-", valueShift: "_" },
    Equal: { value: "=", valueShift: "+" },
    Backspace: { value: "Backspace", valueShift: "Backspace" },
    Tab: { value: "Tab", valueShift: "Tab" },
    KeyQ: { value: "й", valueShift: "Й" },
    KeyW: { value: "ц", valueShift: "Ц" },
    KeyE: { value: "у", valueShift: "У" },
    KeyR: { value: "к", valueShift: "К" },
    KeyT: { value: "е", valueShift: "Е" },
    KeyY: { value: "н", valueShift: "Н" },
    KeyU: { value: "г", valueShift: "Г" },
    KeyI: { value: "ш", valueShift: "Ш" },
    KeyO: { value: "щ", valueShift: "Щ" },
    KeyP: { value: "з", valueShift: "З" },
    BracketLeft: { value: "х", valueShift: "Х" },
    BracketRight: { value: "ъ", valueShift: "Ъ" },
    Backslash: { value: "\\", valueShift: "/" },
    Delete: { value: "Delete", valueShift: "Delete" },
    CapsLock: { value: "CapsLock", valueShift: "CapsLock" },
    KeyA: { value: "ф", valueShift: "Ф" },
    KeyS: { value: "ы", valueShift: "Ы" },
    KeyD: { value: "в", valueShift: "В" },
    KeyF: { value: "а", valueShift: "А" },
    KeyG: { value: "п", valueShift: "П" },
    KeyH: { value: "р", valueShift: "Р" },
    KeyJ: { value: "о", valueShift: "О" },
    KeyK: { value: "л", valueShift: "Л" },
    KeyL: { value: "д", valueShift: "Д" },
    Semicolon: { value: "ж", valueShift: "Ж" },
    Quote: { value: `э`, valueShift: "Э" },
    Enter: { value: "Enter", valueShift: "Enter" },
    ShiftLeft: { value: "Shift", valueShift: "Shift" },
    KeyZ: { value: "я", valueShift: "Я" },
    KeyX: { value: "ч", valueShift: "Ч" },
    KeyC: { value: "с", valueShift: "С" },
    KeyV: { value: "м", valueShift: "М" },
    KeyB: { value: "и", valueShift: "И" },
    KeyN: { value: "т", valueShift: "Т" },
    KeyM: { value: "ь", valueShift: "Ь" },
    Comma: { value: "б", valueShift: "Б" },
    Period: { value: "ю", valueShift: "Ю" },
    Slash: { value: ".", valueShift: "," },
    ArrowUp: { value: "ArrowUp", valueShift: "ArrowUp" },
    ShiftRight: { value: "Shift", valueShift: "Shift" },
    ControlLeft: { value: "Control", valueShift: "Control" },
    MetaLeft: { value: "Meta", valueShift: "Meta" },
    AltLeft: { value: "Alt", valueShift: "Alt" },
    Space: { value: " ", valueShift: " " },
    AltRight: { value: "Alt", valueShift: "Alt" },
    ArrowLeft: { value: "ArrowLeft", valueShift: "ArrowLeft" },
    ArrowDown: { value: "ArrowDown", valueShift: "ArrowDown" },
    ArrowRight: { value: "ArrowRight", valueShift: "ArrowRight" },
    ControlRight: { value: "Control", valueShift: "Control" },
};

let lang = "eng";

class VirtualKeyboard {
    constructor() {
        this.flagCaps = false;
    }
    addKeyboardContent() {
        const main = document.createElement("div");
        main.classList.add("main");
        document.body.appendChild(main);

        const container = document.createElement("div");
        container.classList.add("container");
        main.appendChild(container);

        const h1 = document.createElement("h1");
        h1.innerHTML = `Virtual Keyboard`;
        container.appendChild(h1);

        this.textarea = document.createElement("textarea");
        this.textarea.classList.add("textarea");
        this.textarea.setAttribute("id", `textarea`);
        container.appendChild(this.textarea);

        this.keyboard = document.createElement("div");
        this.keyboard.classList.add("keyboard");
        container.appendChild(this.keyboard);
    }

    addKeyboardKeys(lang) {
        if (lang === "eng") this.keyboardLang = keyEng;
        else this.keyboardLang = keyRu;
        for (let keyCode in this.keyboardLang) {
            let keyboardKey = document.createElement("div");
            keyboardKey.setAttribute("id", `${keyCode}`);
            if (keyCode === "ArrowLeft") keyboardKey.innerHTML = `&larr;`;
            else if (keyCode === "ArrowRight") keyboardKey.innerHTML = `&rarr;`;
            else if (keyCode === "ArrowUp") keyboardKey.innerHTML = `&uarr;`;
            else if (keyCode === "ArrowDown") keyboardKey.innerHTML = `&darr;`;
            else if (keyCode.includes("Control")) keyboardKey.innerHTML = `Ctrl`;
            else if (keyCode.includes("Meta")) keyboardKey.innerHTML = `Win`;
            else if (keyCode === "Delete") keyboardKey.innerHTML = `Del`;
            else if (keyCode.includes("Alt")) keyboardKey.innerHTML = `Alt`;
            else keyboardKey.innerHTML = `${this.keyboardLang[keyCode].value}`;
            keyboardKey.classList.add("keyboard__key");

            if (
                keyCode.includes("Key") ||
                keyCode === "BracketLeft" ||
                keyCode === "BracketRight" ||
                keyCode === "Semicolon" ||
                keyCode === "Quote" ||
                keyCode === "Backquote" ||
                keyCode === "Comma" ||
                keyCode === "Period"
            )
                keyboardKey.classList.add("key_symbol-letter");

            if (keyCode === "Backspace") keyboardKey.classList.add("key_backspace");
            if (keyCode === "Tab" || keyCode === "Delete")
                keyboardKey.classList.add("key_tab-del");
            if (keyCode.includes("Digit")) keyboardKey.classList.add("key_digit");
            if (keyCode === "CapsLock") keyboardKey.classList.add("key_caps");
            if (keyCode === "Enter") keyboardKey.classList.add("key_enter");
            if (keyCode.includes("Control") || keyCode.includes("Alt"))
                keyboardKey.classList.add("key_ctrl-alt");
            if (keyCode === "Space") keyboardKey.classList.add("key_space");
            if (keyCode.includes("Arrow")) keyboardKey.classList.add("key_arrow");
            if (keyCode === "ShiftLeft") keyboardKey.classList.add("key_shift-left");
            if (keyCode === "ShiftRight") keyboardKey.classList.add("key_shift-right");
            
            this.keyboard.appendChild(keyboardKey);

            if (
                keyCode === "Backspace" ||
                keyCode === "Delete" ||
                keyCode === "Enter" ||
                keyCode === "ShiftRight"
            ) {
                const flexrow = document.createElement("div");
                flexrow.classList.add("flexrow");
                this.keyboard.appendChild(flexrow);
            }
        }
    }

    keyPress(keyDown, keyShift) {
        const keyCode = keyDown.getAttribute("id");
        const value = this.keyboardLang[keyCode].value;
        const valueShift = this.keyboardLang[keyCode].valueShift;
        let newSymbol = "";
        let inputText = "";
        let inputStart = this.textarea.selectionStart;
        let inputEnd = this.textarea.selectionEnd;
        keyDown.classList.add("key_active");
        this.textarea.focus();
        if (keyCode === "Enter") {
            inputText =
                this.textarea.value.substring(0, inputStart) +
                "\n" +
                this.textarea.value.substring(inputEnd);
            this.textarea.value = inputText;
            this.textarea.focus();
            let newInputEnd = this.textarea.selectionEnd;
            this.textarea.selectionEnd = this.textarea.selectionStart =
                newInputEnd - this.textarea.value.substring(inputEnd).length + 1;
        } else if (keyCode === "CapsLock") {
            if (!this.flagCaps) {
                for (let element of this.keyboard.children)
                    if (element.classList.contains("key_symbol-letter"))
                        element.textContent = element.textContent.toUpperCase();
            } else {
                keyDown.classList.remove("key_active");
                for (let element of this.keyboard.children)
                    if (element.classList.contains("key_symbol-letter"))
                        element.textContent = element.textContent.toLowerCase();
            }
            this.flagCaps = !this.flagCaps;
        } else if (keyCode === "Tab") {
            newSymbol = "    ";
            inputText =
                this.textarea.value.substring(0, inputStart) +
                newSymbol +
                this.textarea.value.substring(inputEnd);
            this.textarea.value = inputText;
            this.textarea.focus();
            this.textarea.selectionEnd = inputStart == inputEnd ? inputEnd + newSymbol.length : inputEnd;
        } else if (keyCode === "Delete") {
            if (inputStart === inputEnd)
                inputText =
                    this.textarea.value.substring(0, inputStart) +
                    this.textarea.value.substring(inputEnd + 1);
            else
                inputText =
                    this.textarea.value.substring(0, inputStart) +
                    this.textarea.value.substring(inputEnd);
            this.textarea.value = inputText;
            this.textarea.focus();
            this.textarea.selectionEnd = this.textarea.selectionStart = inputStart;
        } else if (keyCode === "ArrowLeft") {
            if (keyShift === true) this.textarea.selectionStart = inputStart - 1;
            else
                this.textarea.selectionEnd = this.textarea.selectionStart = inputStart - 1;
        } else if (keyCode === "ArrowRight") {
            if (keyShift === true) this.textarea.selectionEnd = inputEnd + 1;
            else
                this.textarea.selectionEnd = this.textarea.selectionStart = inputStart + 1;
        } else if (keyCode === "ArrowUp") {
            let strPos;
            if (this.textarea.value[inputEnd] === "\n")
                strPos = this.textarea.value.lastIndexOf("\n", inputEnd - 1);
            else strPos = this.textarea.value.lastIndexOf("\n", inputEnd);
            if (strPos !== -1) {
                let curStrLength = inputEnd - strPos;
                let prevStrPos = this.textarea.value.lastIndexOf("\n", strPos - 1);
                let prevStrLength;
                if (prevStrPos !== -1) prevStrLength = strPos - prevStrPos;
                else prevStrLength = inputEnd - curStrLength + 1;

                if (curStrLength >= prevStrLength)
                    this.textarea.selectionEnd = this.textarea.selectionStart = strPos;
                else
                    this.textarea.selectionEnd = this.textarea.selectionStart =
                        inputEnd - prevStrLength;
            }
        } else if (keyCode === "ArrowDown") {
            let strPos;
            if (this.textarea.value[inputEnd] === "\n")
            strPos = this.textarea.value.lastIndexOf("\n", inputEnd - 1);
            else strPos = this.textarea.value.lastIndexOf("\n", inputEnd);
            let curStrLength;
            let nextStrLength;
            if (strPos !== -1) curStrLength = inputEnd - strPos;
            else curStrLength = inputEnd + 1;

            let endCurStrPos = this.textarea.value.indexOf("\n", inputEnd);
            if (endCurStrPos !== -1) {
                let nextStrPos = this.textarea.value.indexOf("\n", endCurStrPos + 1);
                if (nextStrPos === -1) {
                    nextStrPos = this.textarea.value.length;
                }

                nextStrLength = nextStrPos - endCurStrPos;

                if (curStrLength >= nextStrLength)
                    this.textarea.selectionEnd = this.textarea.selectionStart = nextStrPos;
                else
                    this.textarea.selectionEnd = this.textarea.selectionStart =
                        endCurStrPos + curStrLength;
            }
        } else if (keyCode === "Backspace") {
            if (inputStart !== 0) {
                if (inputStart === inputEnd)
                    inputText =
                        this.textarea.value.substring(0, inputStart - 1) +
                        this.textarea.value.substring(inputEnd);
                else
                    inputText =
                        this.textarea.value.substring(0, inputStart) +
                        this.textarea.value.substring(inputEnd);
                this.textarea.value = inputText;
                this.textarea.focus();
                if (inputStart === inputEnd)
                    this.textarea.selectionEnd = this.textarea.selectionStart = inputStart - 1;
                else
                    this.textarea.selectionEnd = this.textarea.selectionStart = inputStart - 1;
            }
        } else if (
            !keyCode.includes("Shift") &&
            !keyCode.includes("Control") &&
            !keyCode.includes("Alt") &&
            !keyCode.includes("Meta")
        ) {
                if (!this.flagCaps) {
                    newSymbol = value;
                } else {
                    newSymbol = value.toUpperCase();
                }
                if (keyShift === true) newSymbol = valueShift;
                inputText =
                    this.textarea.value.substring(0, inputStart) +
                    newSymbol +
                    this.textarea.value.substring(inputEnd);

            this.textarea.value = inputText;
            this.textarea.focus();
        }
    }

    keyboardEvent() {
        document.onkeydown = function (event) {
            const keyDown = document.getElementById(event.code);
            let shiftKey = false;
            if (event.shiftKey) shiftKey = true;
            let ctrlKey = false;
            if (event.ctrlKey) ctrlKey = true;
            if (keyDown != null) {
                event.preventDefault();
                virtualKeyboard.keyPress(keyDown, shiftKey, ctrlKey);
            }
        };
    }

    keyboardEventCancel() {
        document.onkeyup = function (event) {
            const keyUp = document.getElementById(event.code);
            if (keyUp != null && event.code !== "CapsLock")
                keyUp.classList.remove("key_active");
        };
    }

    mouseEvent() {
        this.keyboard.onclick = function (event) {
            event.stopImmediatePropagation();
            event.preventDefault();
            const keyCode = event.target.getAttribute("id");
            let shiftKey = false;
            if (keyCode && keyCode.includes("Shift")) shiftKey = true;
            let ctrlKey = false;
            if (keyCode && keyCode.includes("Control")) ctrlKey = true;
            if (keyCode) virtualKeyboard.keyPress(event.target, shiftKey, ctrlKey);
            if (keyCode !== "CapsLock") event.target.classList.remove("key_active");
        };
    }
    
    updateKeyboard() {
        this.keyboard.innerHTML = "";
    }
}

const virtualKeyboard = new VirtualKeyboard();
virtualKeyboard.addKeyboardContent();
if (localStorage.getItem("lang_saved"))
    lang = localStorage.getItem("lang_saved");
virtualKeyboard.addKeyboardKeys(lang);
virtualKeyboard.keyboardEvent();
virtualKeyboard.keyboardEventCancel();
virtualKeyboard.mouseEvent();

function definitePressedKeys(func, ...codes) {
    let pressed = new Set();
    document.addEventListener("keydown", function (event) {
        event.preventDefault();
        pressed.add(event.code);
        for (let code of codes) {
            if (!pressed.has(code)) {
                return;
            }
        }
        pressed.clear();
        func();
    });
    document.addEventListener("keyup", function (event) {
        pressed.delete(event.code);
    });
}

definitePressedKeys(changeLanguage, "ShiftLeft", "AltLeft");
function changeLanguage() {
    if (lang === "eng") {
        lang = "ru";
    } else lang = "eng";
    localStorage.clear();
    localStorage.setItem("lang_saved", lang);
    virtualKeyboard.updateKeyboard();
    virtualKeyboard.addKeyboardKeys(lang);
}