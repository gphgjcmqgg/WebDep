import React from 'react';
import PropTypes from 'prop-types';

const ContextChild = (props,context) => {
    console.log(context);
    return (
        <div>---{context.color}</div>
    );
}

ContextChild.contextTypes = {
    color: PropTypes.string
}
export default ContextChild;