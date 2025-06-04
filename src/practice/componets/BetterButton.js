import React from 'react';

export default function BetterButton({ onClick, children = " " }) {
    return (
        <button aria-label="Button"
            onClick={onClick} >
            {children}
        </button>
    );
}