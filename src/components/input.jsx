import React, {Component} from 'react';

const Input = ({onChange, onKeyPress}) => (
    <input
        className="input-field"
        type="text"
        placeholder="Gevorg"
        autoFocus="true"
        onKeyPress={e => onKeyPress(e)}
        onChange={e => onChange(e.target.value)} />
);

export default Input;
