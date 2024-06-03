interface IExperienceSvgIconsProps {
    className: string
}

const ExperienceSvgIcons = (props: IExperienceSvgIconsProps) => {
    const { className } = props
    return (
        <svg className={className} width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M14.0633 5.05664H3.39663C2.66025 5.05664 2.06329 5.65359 2.06329 6.38997V13.0566C2.06329 13.793 2.66025 14.39 3.39663 14.39H14.0633C14.7997 14.39 15.3966 13.793 15.3966 13.0566V6.38997C15.3966 5.65359 14.7997 5.05664 14.0633 5.05664Z"
                stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            <path
                d="M11.3966 14.3901V3.72347C11.3966 3.36985 11.2562 3.03071 11.0061 2.78066C10.7561 2.53061 10.4169 2.39014 10.0633 2.39014H7.39663C7.043 2.39014 6.70387 2.53061 6.45382 2.78066C6.20377 3.03071 6.06329 3.36985 6.06329 3.72347V14.3901"
                stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

    );
};

export default ExperienceSvgIcons;