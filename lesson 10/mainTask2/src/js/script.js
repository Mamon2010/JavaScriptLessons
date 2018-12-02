class Option {
    constructor(height = '100%', width = '100%', bg = 'blue', fontSize = 28, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    makeDiv() {
        return document.write(`<div style = "height:${this.height}; width:${this.width}; background-color:${this.bg}; font-size:${this.fontSize}px; textAlign:${this.textAlign}">Вот такой я молодец</div>`);
    }
}

let div = new Option();
div.makeDiv();