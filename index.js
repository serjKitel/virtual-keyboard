function addKeyboardContent() {
    const main = document.createElement("div");
    main.classList.add("main");
    document.body.appendChild(main);

    const container = document.createElement("div");
    container.classList.add(".container");
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

addKeyboardContent();