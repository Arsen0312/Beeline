interface IGradeTitleSvgIconsProps {
    className: string
}

const GradeTitleSvgIcons = (props: IGradeTitleSvgIconsProps) => {
    const { className } = props
    return (
        <svg className={className} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.3334 4.39014L9.00002 10.7235L5.66669 7.39014L0.666687 12.3901" stroke="white"
                  stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.3333 4.39014H15.3333V8.39014" stroke="white" stroke-width="1.33333" stroke-linecap="round"
                  stroke-linejoin="round"/>
        </svg>

    );
};

export default GradeTitleSvgIcons;