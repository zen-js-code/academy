'use strict';

const PATH = require('path');

const promisify = require('util.promisify');
const {readFileSync} = require('fs');

const {upperFirst, camelCase} = require('lodash');
const through = require('through2');
const marked = promisify(require('marked'));
const fm = require('front-matter');
const VinylFile = require('vinyl');
const Handlebars = require('handlebars');

const Renderer = require('./renderer');

const EMPTY = Buffer.from('');
const DEFAULT_EXT = 'json';
const THEME = 'http://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/github.min.css';
const REACT_TEMPLATE_SRC = readFileSync(PATH.resolve(__dirname, './templates/reactTemplate.js'), 'utf-8');
const REACT_TEMPLATE = Handlebars.compile(REACT_TEMPLATE_SRC);

const createReactFile = function(path, contents, {attributes = {}} = {}) {
    const {dir, name} = PATH.parse(path);
    const filename = upperFirst(camelCase(name));
    const targetPath = PATH.normalize(`${dir}/${filename}.js`);

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

async function createReactCode(path, contents) {
    const {dir, name} = PATH.parse(path);
    const className = upperFirst(camelCase(name));
    const renderer = new Renderer();

    const code = (await marked(contents, {renderer})).trim();
    const classCode = REACT_TEMPLATE({code, className});

    return classCode;
}

function md(options = {}) {
    return through.obj(async function(file, enc, callback) {
        let error = null, result;

        if (file.isNull() || file.isStream()) {
            result = file;
        }

        try {
            const {path, contents} = file;

            const {attributes, body} = processFrontMatter(contents);
            const reactCode = await createReactCode(path, body);

            result = createReactFile(path, reactCode, {attributes});
        } catch (err) {
            error = err;
        } finally {
            callback(error, result);
        }
    });
}

module.exports = md;
