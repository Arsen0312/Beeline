import React from 'react';
import cls from "./VideoForMainPage.module.scss"

const VideoForMainPage = () => {
    return (
        <div className={cls.main}>
            <h2>Наш офис</h2>
            <iframe className={cls.video} width="560" height="315" src="https://www.youtube.com/embed/_mNYSovE6Dg?si=Zppmv-QhQa2JSxVd"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    );
};

export default VideoForMainPage;