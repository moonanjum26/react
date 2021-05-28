import React, { PureComponent } from 'react'
//import PropTypes from 'prop-types';

class PureComp extends PureComponent {
    render() {
        console.log('pure comp render')
        return (
            <div>
                Pure component {this.props.name}
            </div>
        );
    }
}

export default PureComp