'use strict';

const PATH = require('path');

const promisify = require('util.promisify');
const fse = require('fs-extra');

const through = require('through2');
const marked = promisify(require('marked'));
const fm = require('front-matter');
const VinylFile = require('vinyl');
const hl = require('highlight.js');

const Renderer = require('./renderer');

const EMPTY = Buffer.from('');
const DEFAULT_EXT = 'json';
const THEME = 'http://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/github.min.css';

const createJSON = function(file, contents, meta) {
    const {attributes = {}, ext = DEFAULT_EXT} = meta;
    const {path} = file;

    const {dir, name} = PATH.parse(path);
    const targetPath = PATH.normalize(`${dir}/${name}.${ext}`);

    const targetFile = new VinylFile({
        path: targetPath,
        contents: Buffer.from(contents)
    });

    return targetFile;
};

function processFrontMatter(contents = EMPTY) {
    const stringContents = contents.toString();
    return fm(stringContents);
}

async function processMarkdown(contents, renderer) {
    return await marked(contents, {
        highlight(code, lang) {
            const languages = lang ? [lang] : undefined;
            return hl.highlightAuto(code, languages).value;
        },
        renderer
    });
}

function createHTML(html, srcFile) {
    const {cwd, base, stem} = srcFile;
    const path = PATH.resolve(cwd, 'dist', PATH.relative(cwd, base), `${stem}.html`);

    const pageHTML = `<!DOCTYPE html>
        <html>
        <head>
            <link rel="stylesheet" href="${THEME}">
        </head>
        <body>
        ${html}
        </body>
        </html>
    `;

    return fse.outputFile(path, pageHTML);
}

function md(options = {}) {
    const {ext} = options;
    const renderer = new Renderer(options);

    return through.obj(async function(file, enc, callback) {
        let error = null, result;

        if (file.isNull() || file.isStream()) {
            result = file;
        }

        try {
            const {contents} = file;

            const {attributes, body} = processFrontMatter(contents);
            const html = await processMarkdown(body, renderer);

            result = createJSON(file, JSON.stringify(renderer.getAll()), {attributes, ext});
            await createHTML(html, file);
        } catch (err) {
            error = err;
        } finally {
            renderer.reset();
            callback(error, result);
        }
    });
}

module.exports = md;
