import React, {Component} from 'react';

import './editor.scss';

export default class Editor extends Component {
    render() {
        return (
            <iframe styleName="editor" id="preview" ref={this.initPreview} />
        );
    }
}
