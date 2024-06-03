import React from 'react';

interface IPlayMarketIconsProps {
    className: string
}

const PlayMarketIcons = (props: IPlayMarketIconsProps) => {
    const { className } = props

    return (
            <svg className={className} width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_416_4294)">
                    <g clip-path="url(#clip1_416_4294)">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M1.48274 18.79C1.13854 18.704 0.915039 18.3877 0.915039 17.896V1.66395C0.915039 1.20799 1.10502 0.900675 1.40452 0.790039L9.97594 9.83526L1.48274 18.79ZM2.66285 18.4459L12.9798 13.0035L10.4665 10.3527L2.66285 18.4459ZM13.0503 6.59335L2.87741 1.22587L10.4811 9.30224L13.0514 6.59335H13.0503ZM13.7409 6.95767L17.726 9.05864C18.4803 9.45756 18.487 10.099 17.726 10.5002L13.6403 12.6571L10.975 9.82521L13.7409 6.95767Z"
                              fill="#7D858E"/>
                    </g>
                </g>
                <defs>
                    <clipPath id="clip0_416_4294">
                        <rect width="18" height="18" fill="white" transform="translate(0.915039 0.790039)"/>
                    </clipPath>
                    <clipPath id="clip1_416_4294">
                        <rect width="18" height="18" fill="white" transform="translate(0.915039 0.790039)"/>
                    </clipPath>
                </defs>
            </svg>
    );
};

export default PlayMarketIcons;