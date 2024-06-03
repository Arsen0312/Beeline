import React from 'react';

interface IMailIcons {
    className: string
}

const EmailIcons = (props : IMailIcons) => {
    const { className } = props

    return (
        <svg className={className} viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_416_4211)">
                <path
                    d="M17.625 1.33496V11.835C17.625 12.66 16.95 13.335 16.125 13.335H2.625C1.8 13.335 1.125 12.66 1.125 11.835V1.33496"
                    stroke="#808285" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round"/>
                <path d="M17.625 1.33496L10.275 7.40996C9.75 7.78496 9 7.78496 8.475 7.40996L1.125 1.33496H17.625Z"
                      stroke="#808285" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M1.125 1.33496H17.625" stroke="#808285" stroke-width="0.75" stroke-miterlimit="10"
                      stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
                <clipPath id="clip0_416_4211">
                    <rect width="18" height="13.5" fill="white" transform="translate(0.375 0.584961)"/>
                </clipPath>
            </defs>
        </svg>

    );
};

export default EmailIcons;