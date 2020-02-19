import React from 'react';
import ContextChild from './ContextChild';
const ContextFather = (props) => {
    return (
        <div>
            <ContextChild />
        </div>
    );
}

export default ContextFather;