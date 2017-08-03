'use strict';

const marked = require('marked');

class Renderer extends marked.Renderer {
    static get H1() {
        return 'h1'
    };

    static get P() {
        return 'p'
    };

    constructor() {
        super();
        this.collector = [];
    }

    getAll() {
        return this.collector;
    }

    get(type = '') {
        return this.collector.filter(item => item.type === type);
    }

    code(text, lang = '') {
        const [pureLang, mode] = lang.split('_');
        this.collector.push({text, type: 'code', lang: pureLang, mode: mode});
        return super.code(text, pureLang);
    }

    blockquote(...args) {
        const [text] = args;
        this.collector.push({text, type: 'blockquote'});
        return super.blockquote(...args);
    }

    html(...args) {
        const [text] = args;
        this.collector.push({text, type: 'html'});
        return super.html(...args);
    }

    heading(...args) {
        const [text, level] = args;
        this.collector.push({text, type: `h${level}`});
        return super.heading(...args);
    }

    hr(...args) {
        this.collector.push({type: 'hr'});
        return super.hr(...args);
    }

    list(...args) {
        const [text, ordered] = args;
        this.collector.push({text, type: ordered ? 'ol' : 'ul'});
        return super.list(...args);
    }

    listitem(...args) {
        const [text] = args;
        this.collector.push({text, type: 'li'});
        return super.listitem(...args);
    }

    paragraph(...args) {
        const [text] = args;
        this.collector.push({text, type: 'p'});
        return super.paragraph(...args);
    }

    table(...args) {
        const [header, body] = args;
        this.collector.push({text: `${header}${body}`, type: 'table'});
        return super.table(...args);
    }

    tablerow(...args) {
        return super.tablerow(...args);
    }

    tablecell(...args) {
        return super.tablecell(...args);
    }

    strong(...args) {
        return super.strong(...args);
    }

    em(...args) {
        return super.em(...args);
    }

    codespan(...args) {
        return super.codespan(...args);
    }

    br(...args) {
        return super.br(...args);
    }

    del(...args) {
        return super.del(...args);
    }

    link(...args) {
        return super.link(...args);
    }

    reset() {
        this.collector = [];
    }
}

module.exports = Renderer;
