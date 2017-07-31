'use strict';

const PATH = require('path');

const promisify = require('util.promisify');

const through = require('through2');
const marked = promisify(require('marked'));
const fm = require('front-matter');
const VinylFile = require('vinyl');

const DEFAULT_CONTENTS = Buffer.from('');
const DEFAULT_EXT = 'html';

const createTargetFile = function(file, contents, meta) {
    const {attributes = {}, ext = DEFAULT_EXT} = meta;
    const {path, cwd, base, relative, dirname, basename, stem, extname} = file;

    const {dir, name} = PATH.parse(path);
    const targetPath = PATH.normalize(`${dir}/${name}.${ext}`);

    const targetFile = new VinylFile({
        path: targetPath,
        contents: Buffer.from(contents)
    });

    return targetFile;
};

function processFrontMatter(contents = DEFAULT_CONTENTS) {
    const stringContents = contents.toString();
    return fm(stringContents);
}

async function processMarkdown(contents) {
    return await marked(contents);
}

function md(options = {}) {
    const {ext} = options;

    return through.obj(async function(file, enc, callback) {
        let error = null, result;

        if (file.isNull() || file.isStream()) {
            result = file;
        }

        try {
            const {contents} = file;
            const {attributes, body} = processFrontMatter(contents);
            const html = await processMarkdown(body);
            result = createTargetFile(file, html, {attributes, ext});
        } catch (err) {
            error = err;
        } finally {
            callback(error, result);
        }
    });
}

module.exports = md;
