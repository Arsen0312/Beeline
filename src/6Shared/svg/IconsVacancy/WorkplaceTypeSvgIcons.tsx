interface IWorkplaceTypeSvgIconsProps {
    className: string
}

const WorkplaceTypeSvgIcons = (props: IWorkplaceTypeSvgIconsProps) => {
    const { className } = props

    return (
        <svg className={className} width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.96672 1.72363L2.30005 9.72363H8.30005L7.63338 15.057L14.3 7.05697H8.30005L8.96672 1.72363Z"
                  stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

    );
};

export default WorkplaceTypeSvgIcons;