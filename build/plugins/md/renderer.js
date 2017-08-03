'use strict';

const marked = require('marked');

function block(tag, content, attributes) {
    const attrs = JSON.stringify(attributes);
    const code = content ?
        `<${tag}>${content}</${tag}>` :
        `<${tag} {...${attrs}} />`;
    return `${code}\r\t\t\t\t`;
}

function inline(tag, content) {
    return `<${tag}>${content}</${tag}>`;
}

class Renderer extends marked.Renderer {
    heading(text, level) {
        return block(`H${level}`, text);
    }

    paragraph(text) {
        return block('P', text);
    }

    code(text, lang = '') {
        const [language, mode] = lang.split('_');
        return block('Editor', null, {language, mode})
    }
}

module.exports = Renderer;
