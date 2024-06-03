interface IShareSvgIconsProps {
    className: string
}

const ShareSvgIcons = (props: IShareSvgIconsProps) => {
    const { className } = props

    return (
        <svg className={className} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M18.66 8.3999C20.3169 8.3999 21.66 7.05676 21.66 5.3999C21.66 3.74305 20.3169 2.3999 18.66 2.3999C17.0032 2.3999 15.66 3.74305 15.66 5.3999C15.66 7.05676 17.0032 8.3999 18.66 8.3999Z"
                stroke="#636363" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path
                d="M6.66003 15.3999C8.31689 15.3999 9.66003 14.0568 9.66003 12.3999C9.66003 10.743 8.31689 9.3999 6.66003 9.3999C5.00318 9.3999 3.66003 10.743 3.66003 12.3999C3.66003 14.0568 5.00318 15.3999 6.66003 15.3999Z"
                stroke="#636363" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path
                d="M18.66 22.3999C20.3169 22.3999 21.66 21.0568 21.66 19.3999C21.66 17.743 20.3169 16.3999 18.66 16.3999C17.0032 16.3999 15.66 17.743 15.66 19.3999C15.66 21.0568 17.0032 22.3999 18.66 22.3999Z"
                stroke="#636363" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.25 13.9097L16.08 17.8897" stroke="#636363" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"/>
            <path d="M16.07 6.90967L9.25 10.8897" stroke="#636363" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"/>
        </svg>

    );
};

export default ShareSvgIcons;