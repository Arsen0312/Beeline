import React from 'react';
import cls from "./JobInBeeline.module.scss"

const JobInBeeline = () => {

    return (
        <div className={cls.main}>
            <h2>Работа в Beeline</h2>
            <p>Билайн был основан в 1992 году и стал первым Телеком-оператором на российском рынке. Сейчас билайн — это почти 50 миллионов клиентов и 27 тысяч сотрудников.</p>
            <div className={cls.boxForImg}>
                <img alt={"it's img"} src={'/assets/imgForJobInBeeline/img1JobInBeeline.png'}/>
                <img className={cls.imgRight} alt={"it's img"} src={'/assets/imgForJobInBeeline/img2JobInBeeline.png'}/>
            </div>
            <div className={cls.boxForImgBottom}>
                <img alt={"it's img"} src={'/assets/imgForJobInBeeline/img3JobInBeeline.png'}/>
                <img className={cls.imgRight} alt={"it's img"} src={'/assets/imgForJobInBeeline/img4JobInBeeline.png'}/>
            </div>
        </div>
    );
};

export default JobInBeeline;