import React, { Component } from 'react';

import {
    TiClipboard,
    TiHomeOutline,
    TiThLargeOutline,
    TiPuzzleOutline
} from 'react-icons/ti';
import { FaRegFlag } from 'react-icons/fa';

class MyComponent extends Component {
    components = {
        TiClipboard: TiClipboard,
        TiThLargeOutline: TiThLargeOutline,
        TiPuzzleOutline: TiPuzzleOutline,
        FaRegFlag: FaRegFlag,
        TiHomeOutline: TiHomeOutline
    };
    render() {
        const TagName = this.components[this.props.tag || 'TiClipboard'];
        return <TagName />;
    }
}
export default MyComponent;
