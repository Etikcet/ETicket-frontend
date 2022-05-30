import React from 'react';

function getStyels (){
    return (
        {
            textAlign: 'center',
            backgroundColor: '#3493E8',
            fontStyle: 'italic'
        }
    );
}

export default function footer(){
    return (
        <p style={getStyels()}>©All right reserved 2022<br></br>ET ticket</p>
    );
}

