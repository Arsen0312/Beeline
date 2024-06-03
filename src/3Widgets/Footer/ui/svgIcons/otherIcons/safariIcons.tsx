import React from 'react';

interface ISafariIconsProps {
    className: string
}

const SafariIcons = (props: ISafariIconsProps) => {
    const { className } = props

    return (
        <svg className={className} width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_416_4299)">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M11.9292 4.80958C14.0969 4.80958 15.4835 6.82765 15.4835 6.82765C15.4835 6.82765 13.3685 7.93119 13.3685 10.3294C13.3685 13.1747 16.0256 14.0027 16.0256 14.0027C16.0256 14.0027 13.9279 18.79 11.5741 18.79C10.2504 18.79 10.1618 18.0569 8.40121 18.0569C6.874 18.0569 6.35893 18.79 5.19377 18.79C2.97285 18.79 0.102539 14.1239 0.102539 10.3294C0.102539 6.38735 3.00815 4.80958 4.83031 4.80958C6.42885 4.80958 7.09554 5.71443 8.38389 5.71443C9.46741 5.71443 10.321 4.80958 11.9292 4.80958ZM11.5554 0.790039C11.8752 2.72157 10.0538 5.11073 7.87719 5.03319C7.55731 2.57481 9.90286 0.918808 11.5554 0.790039Z"
                      fill="#7D858E"/>
            </g>
            <defs>
                <clipPath id="clip0_416_4299">
                    <rect width="16.5" height="18" fill="white" transform="translate(0.102539 0.790039)"/>
                </clipPath>
            </defs>
        </svg>

    );
};

export default SafariIcons;