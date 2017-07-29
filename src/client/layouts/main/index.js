import React, {Component, Children} from 'react';

import Header from './Header';
import Menu from './Menu';
import Main from './Main';

export default class MainLayout extends Component {
    processLayout() {
        const {children} = this.props;

        return Children.map(children, (Child) => {
            let MappedChild = null;

            if (Child.type) {
                if (Child.type.prototype instanceof Header) {
                    return Child;
                } else if (Child.type.prototype instanceof Menu) {
                    return Child;
                } else if (Child.type.prototype instanceof Main) {
                    return Child;
                }
            }

            return MappedChild;
        });
    }

    render() {
        this.processLayout();

        return (
            <div>
                {this.processLayout()}
            </div>
        );
    }

    static Header = Header;
}

export {Header, Menu, Main};
