import React from 'react';

interface ITelephoneIconsProps {
    className: string
}

const TelephoneIcons = (props : ITelephoneIconsProps) => {
    const { className } = props
    return (
        <svg className={className} width="13" height="19" viewBox="0 0 13 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_416_4218)">
                <path
                    d="M9.93408 17.2925H3.10107C2.36633 17.2925 1.70508 16.7186 1.70508 15.9294V2.15552C1.70508 1.43813 2.29286 0.79248 3.10107 0.79248H9.93408C10.6689 0.79248 11.3301 1.3664 11.3301 2.15552V16.0012C11.2566 16.7186 10.6689 17.2925 9.93408 17.2925Z"
                    stroke="#808285" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round"/>
                <path d="M1.70508 14.4231H11.2566" stroke="#808285" stroke-width="0.75" stroke-miterlimit="10"
                      stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.37866 2.22729H7.58286" stroke="#808285" stroke-width="0.75" stroke-miterlimit="10"
                      stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.11328 15.8577H6.84802" stroke="#808285" stroke-width="0.75" stroke-miterlimit="10"
                      stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
                <clipPath id="clip0_416_4218">
                    <rect width="11.25" height="18" fill="white" transform="translate(0.954834 0.0424805)"/>
                </clipPath>
            </defs>
        </svg>

    );
};

export default TelephoneIcons;