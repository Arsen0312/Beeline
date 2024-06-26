import React from 'react';

interface IYouTube {
    className: string
}

const YouTube = (props: IYouTube) => {
    const { className } = props

    return (
        <svg className={className} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_126_908)">
                <path
                    d="M0.75 12.7501C0.75 6.12264 6.12258 0.750061 12.75 0.750061C19.3775 0.750061 24.75 6.12264 24.75 12.7501C24.75 19.3775 19.3775 24.7501 12.75 24.7501C6.12258 24.7501 0.75 19.3775 0.75 12.7501Z"
                    fill="#D70D0F"/>
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M17.7508 8.6246C18.3016 8.77572 18.7354 9.22107 18.8825 9.78657C19.15 10.8114 19.15 12.9499 19.15 12.9499C19.15 12.9499 19.15 15.0883 18.8825 16.1133C18.7354 16.6788 18.3016 17.1241 17.7508 17.2753C16.7527 17.55 12.7501 17.55 12.7501 17.55C12.7501 17.55 8.74731 17.55 7.74916 17.2753C7.1984 17.1241 6.76465 16.6788 6.61745 16.1133C6.35004 15.0883 6.35004 12.9499 6.35004 12.9499C6.35004 12.9499 6.35004 10.8114 6.61745 9.78657C6.76465 9.22107 7.1984 8.77572 7.74916 8.6246C8.74731 8.34995 12.7501 8.34995 12.7501 8.34995C12.7501 8.34995 16.7527 8.34995 17.7508 8.6246ZM11.5501 11.15V15.15L14.7501 13.15L11.5501 11.15Z"
                      fill="white"/>
            </g>
            <defs>
                <clipPath id="clip0_126_908">
                    <rect width="24" height="24" fill="white" transform="translate(0.75 0.750061)"/>
                </clipPath>
            </defs>
        </svg>

    );
};

export default YouTube;