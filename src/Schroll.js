import React from 'react';

const Schroll = (props)=>{
    return (
        <div style={{overflowY:"scroll", border:'2px',height:"800px"}}>
            {props.children}
        </div>
    );
};

export default Schroll;