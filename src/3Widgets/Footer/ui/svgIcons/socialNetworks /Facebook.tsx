import React from "react"

interface IFacebook {
    className: string
}

const Facebook = (props: IFacebook) => {
    const { className } = props

    return (
        <svg className={className} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_126_928)">
                <path
                    d="M0.75 12.7501C0.75 6.12264 6.12258 0.750061 12.75 0.750061C19.3775 0.750061 24.75 6.12264 24.75 12.7501C24.75 19.3775 19.3775 24.7501 12.75 24.7501C6.12258 24.7501 0.75 19.3775 0.75 12.7501Z"
                    fill="#475993"/>
                <path
                    d="M14.0008 19.8058V13.2771H15.803L16.0419 11.0274H14.0008L14.0039 9.90131C14.0039 9.31451 14.0596 9.00011 14.9024 9.00011H16.029V6.75003H14.2266C12.0616 6.75003 11.2995 7.84143 11.2995 9.67683V11.0276H9.95007V13.2774H11.2995V19.8058H14.0008Z"
                    fill="white"/>
            </g>
            <defs>
                <clipPath id="clip0_126_928">
                    <rect width="24" height="24" fill="white" transform="translate(0.75 0.750061)"/>
                </clipPath>
            </defs>
        </svg>

    );
};

export default Facebook;