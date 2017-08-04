import React, {Component} from 'react';

import {H1, H2, H3, H4} from '../../elements/headings';
import {P} from '../../elements/blocks';
import {Editor} from '../../components/editor/';

export class CssOverview extends Component {
    render() {
        return (
            <div>
                <H1>CSS Overview Course</H1>				<H2>Basics</H2>				<H2>Basics</H2>				<H3>Basics</H3>				<P>Some text</P>				<Editor {...{"language":"javascript","mode":"editable","text":"function foo() {\n\n}"}} />				<P>Some random, perhaps <strong>bolded</strong>, text.</P>				<Editor {...{"language":"css","text":".some__class {\n    border: 1px solid #cccccc;\n}"}} />
            </div>
        );
    }
}
