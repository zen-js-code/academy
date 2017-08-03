import React, {Component} from 'react';

import './style/editor.scss';

export class Editor extends Component {
    render() {
        return (
            <iframe styleName="editor" id="preview" ref={this.initPreview} />
        );
    }
}
