import React, { PureComponent } from 'react';

export default class Temp extends PureComponent {
    render() {
        return (
            <div>
                {this.props.val}
            </div>
        );
    }
}