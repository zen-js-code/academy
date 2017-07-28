import React from 'react';

export default function Course(props) {
    const {id} = props.match.params;

    return (
        <div>{id}</div>
    );
}
