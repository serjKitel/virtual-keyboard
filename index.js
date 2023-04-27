const keyEng = [
    { code: "Backquote", value: "`" },
    { code: "Digit1", value: "1" },
    { code: "Digit2", value: "2" },
    { code: "Digit3", value: "3" },
    { code: "Digit4", value: "4" },
    { code: "Digit5", value: "5" },
    { code: "Digit6", value: "6" },
    { code: "Digit7", value: "7" },
    { code: "Digit8", value: "8" },
    { code: "Digit9", value: "9" },
    { code: "Digit0", value: "0" },
    { code: "Minus", value: "-" },
    { code: "Equal", value: "=" },
    { code: "Backspace", value: "Backspace" },
    { code: "Tab", value: "Tab" },
    { code: "KeyQ", value: "q" },
    { code: "KeyW", value: "w" },
    { code: "KeyE", value: "e" },
    { code: "KeyR", value: "r" },
    { code: "KeyT", value: "t" },
    { code: "KeyY", value: "y" },
    { code: "KeyU", value: "u" },
    { code: "KeyI", value: "i" },
    { code: "KeyO", value: "o" },
    { code: "KeyP", value: "p" },
    { code: "BracketLeft", value: "[" },
    { code: "BracketRight", value: "]" },
    { code: "Backslash", value: "\\" },
    { code: "Delete", value: "Delete" },
    { code: "CapsLock", value: "CapsLock" },
    { code: "KeyA", value: "a" },
    { code: "KeyS", value: "s" },
    { code: "KeyD", value: "d" },
    { code: "KeyF", value: "f" },
    { code: "KeyG", value: "g" },
    { code: "KeyH", value: "h" },
    { code: "KeyJ", value: "j" },
    { code: "KeyK", value: "k" },
    { code: "KeyL", value: "l" },
    { code: "Semicolon", value: ";" },
    { code: "Quote", value: `'` },
    { code: "Enter", value: "Enter" },
    { code: "ShiftLeft", value: "Shift" },
    { code: "KeyZ", value: "z" },
    { code: "KeyX", value: "x" },
    { code: "KeyC", value: "c" },
    { code: "KeyV", value: "v" },
    { code: "KeyB", value: "b" },
    { code: "KeyN", value: "n" },
    { code: "KeyM", value: "m" },
    { code: "Comma", value: "," },
    { code: "Period", value: "." },
    { code: "Slash", value: "/" },
    { code: "ArrowUp", value: "ArrowUp" },
    { code: "ShiftRight", value: "Shift" },
    { code: "ControlLeft", value: "Control" },
    { code: "MetaLeft", value: "Meta" },
    { code: "AltLeft", value: "Alt" },
    { code: "Space", value: " " },
    { code: "AltRight", value: "Alt" },
    { code: "ArrowLeft", value: "ArrowLeft" },
    { code: "ArrowDown", value: "ArrowDown" },
    { code: "ArrowRight", value: "ArrowRight" },
    { code: "ControlRight", value: "Control" },
];

const keyRu = [
    { code: "Backquote", value: "ё" },
    { code: "Digit1", value: "1" },
    { code: "Digit2", value: "2" },
    { code: "Digit3", value: "3" },
    { code: "Digit4", value: "4" },
    { code: "Digit5", value: "5" },
    { code: "Digit6", value: "6" },
    { code: "Digit7", value: "7" },
    { code: "Digit8", value: "8" },
    { code: "Digit9", value: "9" },
    { code: "Digit0", value: "0" },
    { code: "Minus", value: "-" },
    { code: "Equal", value: "=" },
    { code: "Backspace", value: "Backspace" },
    { code: "Tab", value: "Tab" },
    { code: "KeyQ", value: "й" },
    { code: "KeyW", value: "ц" },
    { code: "KeyE", value: "у" },
    { code: "KeyR", value: "к" },
    { code: "KeyT", value: "е" },
    { code: "KeyY", value: "н" },
    { code: "KeyU", value: "г" },
    { code: "KeyI", value: "ш" },
    { code: "KeyO", value: "щ" },
    { code: "KeyP", value: "з" },
    { code: "BracketLeft", value: "х" },
    { code: "BracketRight", value: "ъ" },
    { code: "Backslash", value: "\\" },
    { code: "Delete", value: "Delete" },
    { code: "CapsLock", value: "CapsLock" },
    { code: "KeyA", value: "ф" },
    { code: "KeyS", value: "ы" },
    { code: "KeyD", value: "в" },
    { code: "KeyF", value: "а" },
    { code: "KeyG", value: "п" },
    { code: "KeyH", value: "р" },
    { code: "KeyJ", value: "о" },
    { code: "KeyK", value: "л" },
    { code: "KeyL", value: "д" },
    { code: "Semicolon", value: "ж" },
    { code: "Quote", value: "э" },
    { code: "Enter", value: "Enter" },
    { code: "ShiftLeft", value: "Shift" },
    { code: "KeyZ", value: "я" },
    { code: "KeyX", value: "ч" },
    { code: "KeyC", value: "с" },
    { code: "KeyV", value: "м" },
    { code: "KeyB", value: "и" },
    { code: "KeyN", value: "т" },
    { code: "KeyM", value: "ь" },
    { code: "Comma", value: "б" },
    { code: "Period", value: "ю" },
    { code: "Slash", value: "." },
    { code: "ArrowUp", value: "ArrowUp" },
    { code: "ShiftRight", value: "Shift" },
    { code: "ControlLeft", value: "Control" },
    { code: "MetaLeft", value: "Meta" },
    { code: "AltLeft", value: "Alt" },
    { code: "Space", value: " " },
    { code: "AltRight", value: "AltGraph" },
    { code: "ArrowLeft", value: "ArrowLeft" },
    { code: "ArrowDown", value: "ArrowDown" },
    { code: "ArrowRight", value: "ArrowRight" },
    { code: "ControlRight", value: "Control" },
];

class VirtualKeyboard {

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
        container.appendChild(this.textarea);
    
        this.keyboard = document.createElement("div");
        this.keyboard.classList.add("keyboard");
        container.appendChild(this.keyboard);

       
    }

    addKeyboard(lang) {
        let keyboardLang;
        if (lang === "eng") keyboardLang = keyEng;
        else keyLang = keyRu;
        keyboardLang.forEach((element) => {
            let keyboardKey = document.createElement("div");
            keyboardKey.setAttribute("id", `${element.code}`);

            if (element.code === "ArrowLeft") keyboardKey.innerHTML = `&larr;`;
            else if (element.code === "ArrowRight") keyboardKey.innerHTML = `&rarr;`;
            else if (element.code === "ArrowUp") keyboardKey.innerHTML = `&uarr;`;
            else if (element.code === "ArrowDown") keyboardKey.innerHTML = `&darr;`;
            else if (element.code.includes("Control")) keyboardKey.innerHTML = `Ctrl`;
            else if (element.code.includes("Meta")) keyboardKey.innerHTML = `Win`;
            else if (element.code.includes("Delete")) keyboardKey.innerHTML = `Del`;
            else keyboardKey.innerHTML = `${element.value}`;

            keyboardKey.classList.add("keyboard__key");

            const keyCode = element.code;

            if (keyCode === "Backspace") keyboardKey.classList.add("key_backspace");
            if (keyCode === "Tab" || keyCode === "Delete")
                keyboardKey.classList.add("key_tab-del");
            if (keyCode === "CapsLock") keyboardKey.classList.add("key_caps");
            if (keyCode === "Enter") keyboardKey.classList.add("key_enter");
            if (keyCode.includes("Control") || keyCode.includes("Alt"))
                keyboardKey.classList.add("key_ctrl-alt");
            if (keyCode === "Space") keyboardKey.classList.add("key_space");
            if (keyCode.includes("Arrow")) keyboardKey.classList.add("key_arrow");
            if (keyCode === "ShiftLeft") keyboardKey.classList.add("key_shift-left");
            if (keyCode === "ShiftRight") keyboardKey.classList.add("key_shift-right");

            this.keyboard.appendChild(keyboardKey);

        });
    }
}

const virtualKeyboard = new VirtualKeyboard();
virtualKeyboard. addKeyboardContent();
virtualKeyboard.addKeyboard("eng");